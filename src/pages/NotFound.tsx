import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

interface NotFoundProps {
    title?: string
    message?: string
}

export default function NotFound({
    title = 'Página não encontrada',
    message = 'O endereço que você acessou não existe ou foi movido.',
}: NotFoundProps) {
    return (
        <div className="py-16 text-center">
            <Seo title={title} description={message} noIndex />
            <p className="text-7xl font-bold text-surface-2" aria-hidden="true">
                404
            </p>
            <h1 className="mt-4 text-2xl font-bold">{title}</h1>
            <p className="mx-auto mt-2 max-w-md text-muted">{message}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link
                    to="/projetos"
                    className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-white hover:opacity-85"
                >
                    Ver projetos
                </Link>
                <Link to="/" className="rounded-md border border-border px-4 py-2 text-sm hover:border-ink">
                    Ir para o início
                </Link>
            </div>
        </div>
    )
}