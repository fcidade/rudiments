export default function Metronome({
    isPlaying,
    bpm,
    setBPM,
    togglePlay,
    increaseBPM,
    decreaseBPM,
}) {
    return (
        <div>
            <p>Metronome 4/4</p>
            <input type="number" min={20} max={400} value={bpm} onChange={e => setBPM(Number(e.target.value))} /><span>bpm</span>
            <hr />
            <button onClick={togglePlay}>{isPlaying ? 'stop' : 'play'}</button>
            <button onClick={increaseBPM}>+</button>
            <button onClick={decreaseBPM}>-</button>
            <hr />
        </div>
    )
}