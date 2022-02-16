import { useEffect } from "react";
import { Link } from "react-router-dom";
import BulletMetronome from "../../components/metronome/BulletMetronome";
import Metronome from "../../components/metronome/Metronome";
import useMetronome from "../../components/metronome/Metronome.hooks";
import useAudio from "../../hooks/useAudio";

export default function RudimentPage() {
    const { play: playSnare1 } = useAudio('/assets/audio/snares/Snare 6.wav')

    const metronome = useMetronome({
        defaultBPM: 100,
        accentAudio: '/assets/audio/tick.wav',
        tickAudio: '/assets/audio/accent.wav',
    })
    const {
        isPlaying,
        beat,
        togglePlay,
    } = metronome

    useEffect(() => {
        // togglePlay()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const hitLeft = () => { playSnare1() }
    const hitRight = () => { playSnare1() }

    return (
        <div>
            <Link to="/" >Back</Link>
            <BulletMetronome {...metronome} />
            <hr />
            <h1>Single Stroke</h1>
            Staff
            <br />
            <img src="/assets/sprites/snare_default.svg" alt="snare" width={100} />
            <br />
            <button onClick={hitLeft}>Left</button>
            <button onClick={hitRight}>Right</button>
            <Metronome {...metronome} />
        </div>
    )
}