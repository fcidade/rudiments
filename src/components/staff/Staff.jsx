import { useEffect } from "react"

/*
    Todo:
    - [] Add feature to align with metronome (maybe pause metronome and restart together)
*/

export default function Staff({
    metronome,
    book,
    isPlaying = false,
    playSnare = () => { },
    setIsPlaying = () => { },
}) {

    const playBookNotes = (notes = []) => {
        const [note, ...notesLeft] = notes
        if (!note) {
            metronome.stop()
            setIsPlaying(false)
            return
        }

        const noteDuration = Math.floor(
            metronome.timeSignature.getIntervalBetweenEachMeasureInMs(metronome.bpm) / note.divisionValue
        )

        playSnare(note.hand)
        setTimeout(() => {
            playBookNotes(notesLeft)
        }, noteDuration)
    }

    useEffect(() => {
        if (isPlaying) {
            metronome.start()
            playBookNotes(book.notes)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isPlaying])

    return (
        <div>

        </div>
    )
}