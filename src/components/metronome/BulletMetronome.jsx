

const TimeSignatures = {
    CommonTime: '4/4'
}

export default function BulletMetronome({
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
            Beat: {beat} {beatBullets}
        </div>
    )
}