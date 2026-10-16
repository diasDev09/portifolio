import { Link, useParams } from 'react-router-dom'
import { getProjectBySlug } from '../data/helpers'
import Gallery from '../components/project/Gallery'
import Process from '../components/project/Process'
import ProjectSection from '../components/project/ProjectSection'
import ProjectSubnav from '../components/project/ProjectSubnav'
import Results from '../components/project/Results'
import Team from '../components/project/Team'
import Seo from '../components/Seo'

export default function ProjectDetail() {
    const { slug } = useParams()
    const project = slug ? getProjectBySlug(slug) : undefined

    if (!project) {
        return (
            <div>
                <Seo title="Projeto não encontrado" description="O projeto solicitado não existe." />
                <h1 className="text-2xl font-bold">Projeto não encontrado</h1>
                <Link to="/projetos" className="text-muted hover:text-ink">
                    ← Voltar para projetos
                </Link>
            </div>
        )
    }

    const { results } = project
    const hasResults = results.problem || results.solution || results.learnings

    return (
        <div className="space-y-8">
            <Seo title={project.title} description={project.summary} />
            <Link to="/projetos" className="text-sm text-muted hover:text-ink">
                ← Projetos
            </Link>

            <header className="space-y-4">
                <h1 className="text-3xl font-bold">{project.title}</h1>
                <p className="max-w-2xl text-muted">{project.summary}</p>
                <ul className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                        <li key={tech} className="rounded-full bg-surface-2 px-2.5 py-0.5 text-xs">
                            {tech}
                        </li>
                    ))}
                </ul>
            </header>

            <div className="rounded-lg border border-border bg-surface p-4">
                <h2 className="mb-3 text-sm font-medium">Links do projeto</h2>
                <ProjectSubnav links={project.links} />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {project.gallery.length > 0 && (
                    <ProjectSection title="Galeria">
                        <Gallery images={project.gallery} title={project.title} />
                    </ProjectSection>
                )}
                {project.team.length > 0 && (
                    <ProjectSection title="Equipe">
                        <Team members={project.team} />
                    </ProjectSection>
                )}
                {project.process.length > 0 && (
                    <ProjectSection title="Processo">
                        <Process steps={project.process} />
                    </ProjectSection>
                )}
                {hasResults && (
                    <ProjectSection title="Resultados">
                        <Results results={results} />
                    </ProjectSection>
                )}
            </div>
        </div>
    )
}