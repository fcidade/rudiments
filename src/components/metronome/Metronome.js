import { useEffect } from "react"
import useMetronome from "./Metronome.hooks"

const TimeSignatures = {
    CommonTime: '4/4'
}

function BulletMetronome({
    isPlaying = false,
    beat = 0,
    timeSignature = TimeSignatures.CommonTime
}) {
    const amountOfBeatsInAMeasure = Number(timeSignature.split('/')[0])
    const beatBullets = new Array(amountOfBeatsInAMeasure).fill(0).map((_, index) => {
        return <button key={index}>{index === beat ? 'o' : '.'}</button>
    })
    return (
        <div>
            {beat} {beatBullets}
        </div>
    )
}

function Metronome({
    defaultBPM = 180,
}) {
    const {
        isPlaying,
        bpm,
        beat,
        setBPM,
        increaseBPM,
        decreaseBPM,
        togglePlay,
    } = useMetronome({
        defaultBPM,
        accentAudio: '/assets/audio/tick.wav',
        tickAudio: '/assets/audio/accent.wav',
    })

    useEffect(() => {
        // togglePlay()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <p>Metronome 4/4</p>
            <input type="number" min={20} max={400} value={bpm} onChange={e => setBPM(Number(e.target.value))} /><span>bpm</span>
            <hr />
            <button onClick={togglePlay}>{isPlaying ? 'stop' : 'play'}</button>
            <button onClick={increaseBPM}>+</button>
            <button onClick={decreaseBPM}>-</button>
            <hr />
            <BulletMetronome isPlaying={isPlaying} beat={beat} />
        </div>
    )
}

export default Metronome