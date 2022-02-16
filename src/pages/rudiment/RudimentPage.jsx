import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BulletMetronome from "../../components/metronome/BulletMetronome";
import Metronome from "../../components/metronome/Metronome";
import useMetronome from "../../components/metronome/useMetronome";
import Staff from "../../components/staff/Staff";
import useAudio from "../../hooks/useAudio";

import singleStrokeBook from '../../books/single_stroke.json'
import TimeSignatures from "../../music_notation/TimeSignatures";

export default function RudimentPage() {
    const { play: playSnare } = useAudio('/assets/audio/snares/Snare 6.wav')
    const { play: playAccentSound } = useAudio('/assets/audio/tick.wav')
    const { play: playTickSound } = useAudio('/assets/audio/accent.wav')

    const [isPlayingStaff, setIsPlayingStaff] = useState(false)

    const metronome = useMetronome({
        playAccentSound,
        playTickSound,
        defaultBPM: 60,
        timeSignature: TimeSignatures.CommonTime,
    })

    useEffect(() => {
        // metronome.togglePlay()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const hitLeft = () => { playSnare() }
    const hitRight = () => { playSnare() }

    return (
        <div>
            <Link to="/" >Back</Link>
            <BulletMetronome {...metronome} />
            <hr />
            <h1>Single Stroke</h1>
            <Staff
                metronome={metronome}
                book={singleStrokeBook}
                playSnare={playSnare}
                isPlaying={isPlayingStaff}
                setIsPlaying={setIsPlayingStaff} />
            <br />
            <img src="/assets/sprites/snare_default.svg" alt="snare" width={100} onClick={() => setIsPlayingStaff(true)} />
            <br />
            <button onClick={hitLeft}>Left</button>
            <button onClick={hitRight}>Right</button>
            <Metronome {...metronome} />
        </div>
    )
}
