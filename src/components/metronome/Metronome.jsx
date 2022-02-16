import TimeSignatures from "../../music_notation/TimeSignatures";

export default function Metronome({
    isPlaying,
    bpm,
    setBPM,
    togglePlay,
    increaseBPM,
    decreaseBPM,
    timeSignature = TimeSignatures.CommonTime,
}) {
    return (
        <div>
            <p>Metronome {timeSignature.getLabel()}</p>
            <input type="number" min={20} max={400} value={bpm} onChange={e => setBPM(Number(e.target.value))} /><span>bpm</span>
            <hr />
            <button onClick={togglePlay}>{isPlaying ? 'stop' : 'play'}</button>
            <button onClick={increaseBPM}>+</button>
            <button onClick={decreaseBPM}>-</button>
            <hr />
        </div>
    )
}