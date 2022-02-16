import { useEffect } from "react"

/*
    Todo:
    - [] Add feature to align with metronome (maybe pause metronome and restart together)
*/

export default function Staff({
    metronome,
    book,
    playSnare = (hand) => { },
    isPlaying = false,
    setIsPlaying = () => { },
}) {

    const playBookNotes = (notes = []) => {
        const [note, ...notesLeft] = notes
        if (!note) {
            setIsPlaying(false)
            return
        }

        const noteDuration = Math.floor(
            metronome.timeSignature.getIntervalBetweenEachMeasureInMs(metronome.bpm) / note.divisionValue
        )

        setTimeout(() => {
            playSnare(note.hand)
            playBookNotes(notesLeft)
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