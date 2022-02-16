import { Link } from "react-router-dom"

function RudimentCard({
    id = 0,
    name = 'Single Stroke',
    timeSignature = '4/4',
    difficulty = 'beginner',
}) {
    return (
        <Link to={`/rudiment/${id}`}>
            {name}<br />
            {timeSignature} - {difficulty}<br />
        </Link>
    )
}

export default function HomePage() {

    const cards = new Array(10).fill(0).map((_, i) => (
        <RudimentCard key={i} />
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