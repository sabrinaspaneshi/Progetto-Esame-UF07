import { Link } from 'react-router-dom'


export default function NotFound() {
    return (
        <div className="error-page text-center">
            <h1>Ops! Pagina non trovata</h1>
            <p>Non sappiamo come tu sia finito qui, ma sei nel posto sbagliato.</p>
            <Link to="/" className="btn-primary">
                Torna alla Home
            </Link>
        </div>
    )
}