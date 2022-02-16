class TimeSignature {
    constructor(beatsPerMeasure = 4, symbolPerBeat = 'quarter') {
        this.beatsPerMeasure = beatsPerMeasure
        this.symbolPerBeat = symbolPerBeat
    }

    getLabel() {
        return `${this.beatsPerMeasure}/${this.symbolPerBeat}`
    }

    getBeatsPerMeasure() {
        return this.beatsPerMeasure
    }

    getIntervalBetweenEachMeasureInMs(bpm) {
        const minuteInMilliseconds = 60 * 1000
        return (
            (minuteInMilliseconds / bpm) * this.getBeatsPerMeasure()
        )
    }

}

const TimeSignatures = {
    CommonTime: new TimeSignature(4, 4),
}

export default TimeSignatures