import { useEffect, useState } from "react";
import useInterval from "../../hooks/useInterval";
import TimeSignatures from "../../music_notation/TimeSignatures";

const useMetronome = ({
    defaultBPM = 180,
    playAccentSound,
    playTickSound,
    timeSignature = TimeSignatures.CommonTime,
}) => {
    const [beat, setBeat] = useState(0)
    const [bpm, setBPM] = useState(defaultBPM)
    const [isPlaying, setIsPlaying] = useState(false)

    const tickSound = () => {
        setBeat(prev => (prev + 1) % timeSignature.getBeatsPerMeasure())
    }

    const start = () => {
        setBeat(0)
        setIsPlaying(true)
    }
    const stop = () => {
        setIsPlaying(false)
        setBeat(0)
    }
    const increaseBPM = () => setBPM(prev => prev + 1)
    const decreaseBPM = () => setBPM(prev => prev - 1)
    const togglePlay = () => isPlaying ? stop() : start()

    const timeBetweenEachTick = 1000 * 60 / bpm
    useInterval(tickSound, isPlaying ? timeBetweenEachTick : null)

    useEffect(() => {
        if (isPlaying) {
            (beat === 0) ? playAccentSound() : playTickSound()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isPlaying, beat])

    return {
        beat,
        isPlaying,
        bpm,
        timeSignature,
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