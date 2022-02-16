import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BulletMetronome from "../../components/metronome/BulletMetronome";
import Metronome from "../../components/metronome/Metronome";
import useMetronome from "../../components/metronome/useMetronome";
import Staff from "../../components/staff/Staff";
import useAudio from "../../hooks/useAudio";

import currentBook from '../../books/paradille.json'
import TimeSignatures from "../../music_notation/TimeSignatures";

export default function RudimentPage() {
    const { play: playSnareSound1 } = useAudio('/assets/audio/snares/Snare 6.wav')
    const { play: playSnareSound2 } = useAudio('/assets/audio/snares/Snare 7.wav')
    const { play: playAccentSound } = useAudio('/assets/audio/tick.wav')
    const { play: playTickSound } = useAudio('/assets/audio/accent.wav')

    const [isPlayingStaff, setIsPlayingStaff] = useState(false)

    const metronome = useMetronome({
        playAccentSound,
        playTickSound,
        defaultBPM: 120,
        timeSignature: TimeSignatures.CommonTime,
    })

    useEffect(() => {
        // metronome.togglePlay()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const playSnare = (hand) => {
        if (hand.toLocaleLowerCase() === "left") {
            playSnareSound1()
        } else {
            playSnareSound2()
        }
    }

    const hitLeft = () => { playSnare("left") }
    const hitRight = () => { playSnare("right") }

    return (
        <div>
            <Link to="/" >Back</Link>
            <BulletMetronome {...metronome} />
            <hr />
            <h1>Single Stroke</h1>
            <Staff
                metronome={metronome}
                book={currentBook}
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
