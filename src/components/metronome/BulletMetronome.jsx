import TimeSignatures from "../../music_notation/TimeSignatures"

export default function BulletMetronome({
    isPlaying = false,
    beat = 0,
    timeSignature = TimeSignatures.CommonTime
}) {
    const beatBullets = new Array(timeSignature.getBeatsPerMeasure()).fill(0).map((_, index) => {
        return <button key={index}>{index === beat ? 'o' : '.'}</button>
    })
    return (
        <div>
            Beat: {beat} {beatBullets}
        </div>
    )
}