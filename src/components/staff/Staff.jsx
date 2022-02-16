import { useEffect } from "react"

/*
    Todo:
    - [] Add feature to align with metronome (maybe pause metronome and restart together)
*/

export default function Staff({
    metronome,
    playSnare,
    book,
    isPlaying = false,
    setIsPlaying,
}) {

    const playBookNotes = (notesLeft = []) => {
        const [head, ...tail] = notesLeft
        if (!head) {
            setIsPlaying(false)
            return
        }

        const noteDuration = Math.floor(
            metronome.timeSignature.getIntervalBetweenEachMeasureInMs(metronome.bpm) / head.divisionValue
        )

        setTimeout(() => {
            playSnare()
            playBookNotes(tail)
        }, noteDuration)
    }

    useEffect(() => {
        isPlaying && playBookNotes(book.notes)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isPlaying])

    return (
        <div>

        </div>
    )
}