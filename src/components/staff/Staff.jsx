import { useEffect, useState } from "react"
import Sketch from "react-p5"

let semiquavers4JoinedImg = null, stave = null
function StaffCanvas({ currNote, book: { notes, visuals } }) {

    const leftPadding = 45

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(500, 180).parent(canvasParentRef)
        semiquavers4JoinedImg = p5.createImg('/assets/sprites/music_notation/big/Notes/Semiquavers/Semiquavers 4 joined.png');
        stave = p5.createImg('/assets/sprites/music_notation/big/Staves/Stave lines 1 system.png');
        semiquavers4JoinedImg.hide()
        stave.hide()
    }

    const drawNotes = (p5) => {
        notes.forEach(({ hand }, i) => {
            p5.fill(i === currNote ? "green" : "black")
            p5.text(hand === "left" ? "L" : "R", leftPadding + i * 25 + 6, 107)
        })
    }

    const drawVisuals = (p5) => {
        visuals.forEach(({ duration }, i) => {
            p5.image(semiquavers4JoinedImg, leftPadding + 25 * (i * duration), 43, semiquavers4JoinedImg.width / 10, semiquavers4JoinedImg.height / 10)
        })
    }

    const draw = (p5) => {
        if (!stave || !semiquavers4JoinedImg)
            return

        p5.background(200)
        p5.image(stave, 0, 0)
        drawNotes(p5)
        drawVisuals(p5)
    }

    return (
        <Sketch setup={setup} draw={draw} style={{
            border: 'solid black 1px',
            width: "fit-content",
        }} />
    )
}

function useStaff(isPlaying, setIsPlaying, metronome, book, callback = () => { }) {
    const playBookNotes = (notes = [], index = 0) => {
        const [note, ...notesLeft] = notes
        if (!note) {
            metronome.stop()
            setIsPlaying(false)
            return
        }

        const noteDuration = Math.floor(
            metronome.timeSignature.getIntervalBetweenEachMeasureInMs(metronome.bpm) / note.divisionValue
        )

        callback(note, index)
        setTimeout(() => {
            playBookNotes(notesLeft, index + 1)
        }, noteDuration)
    }

    useEffect(() => {
        if (isPlaying) {
            metronome.start()
            playBookNotes(book.notes)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isPlaying])
}

export default function Staff({
    metronome,
    book = { notes: [] },
    isPlaying = false,
    playSnare = () => { },
    setIsPlaying = () => { },
}) {
    const [currNote, setCurrNote] = useState(0)

    useStaff(isPlaying, setIsPlaying, metronome, book, (note, index) => {
        playSnare(note.hand)
        setCurrNote(index)
    })

    return (
        <div>
            {book && <StaffCanvas currNote={currNote} book={book} />}
        </div>
    )
}