import { useState } from "react";
import useAudio from "../../hooks/useAudio";
import useInterval from "../../hooks/useInterval";

const useMetronome = ({
    defaultBPM = 180,
    accentAudio,
    tickAudio,
}) => {
    const [beat, setBeat] = useState(0)
    const [bpm, setBPM] = useState(defaultBPM)
    const [isPlaying, setIsPlaying] = useState(false)
    const { play: playAccentSound } = useAudio(accentAudio)
    const { play: playTickSound } = useAudio(tickAudio)

    const tickSound = () => {
        if (isPlaying) {
            (beat === 0) ? playAccentSound() : playTickSound()
        }
        setBeat(prev => (prev + 1) % 4)
    }

    const start = () => setIsPlaying(true)
    const stop = () => setIsPlaying(false)
    const increaseBPM = () => setBPM(prev => prev + 1)
    const decreaseBPM = () => setBPM(prev => prev - 1)
    const togglePlay = () => isPlaying ? stop() : start()

    const timeBetweenEachTick = 1000 * 60 / bpm
    useInterval(tickSound, timeBetweenEachTick)

    return {
        beat,
        isPlaying,
        bpm,
        tickSound,
        start,
        stop,
        setBPM,
        increaseBPM,
        decreaseBPM,
        togglePlay,
    }
}

export default useMetronome