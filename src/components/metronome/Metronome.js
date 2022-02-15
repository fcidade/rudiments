import useMetronome from "./Metronome.hooks"

function Metronome({
    defaultBPM = 180,
}) {
    const {
        isPlaying,
        bpm,
        setBPM,
        increaseBPM,
        decreaseBPM,
        togglePlay,
    } = useMetronome({
        defaultBPM,
        accentAudio: '/assets/audio/tick.wav',
        tickAudio: '/assets/audio/accent.wav',
    })

    return (
        <div>
            <p>Metronome 4/4</p>
            <input type="number" min={20} max={400} value={bpm} onChange={e => setBPM(Number(e.target.value))} /><span>bpm</span>
            <hr />
            <button onClick={togglePlay}>{isPlaying ? 'stop' : 'play'}</button>
            <button onClick={increaseBPM}>+</button>
            <button onClick={decreaseBPM}>-</button>
        </div>
    )
}

export default Metronome