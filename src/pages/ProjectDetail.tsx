import { Link, useParams } from 'react-router-dom'
import { getProjectBySlug } from '../data/helpers'

export default function ProjectDetail() {
    const { slug } = useParams()
    const project = slug ? getProjectBySlug(slug) : undefined

    if (!project) {
        return (
            <div>
                <h1 className="text-2xl font-bold">Projeto não encontrado</h1>
                <Link to="/projetos" className="text-muted hover:text-white">
                    ← Voltar para projetos
                </Link>
            </div>
        )
    }

    return (
        <div>
            <h1 className="text-3xl font-bold">{project.title}</h1>
            <p className="mt-2 text-muted">{project.summary}</p>
        </div>
    )
}