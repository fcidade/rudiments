import { Link } from "react-router-dom"

import { books } from "../../books"

function RudimentCard({
    id = 0,
    name = 'Single Stroke',
    timeSignature = '4/4',
    difficulty = 'beginner',
}) {
    return (
        <Link to={`/rudiment/${id}`}>
            {name}<br />
            {timeSignature.getLabel()} - {difficulty}<br />
            <hr />
        </Link>
    )
}

export default function HomePage() {
    const cards = books.map((book) => (
        <RudimentCard key={book.id} {...book} />
    ))

    return (
        <div>
            <header className={'header'}>
                <h1>Rudimentos</h1>
            </header>
            {cards}
        </div>
    )
}