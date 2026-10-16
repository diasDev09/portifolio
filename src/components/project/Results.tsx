import type { ProjectResults } from '../../types/project'

export default function Results({ results }: { results: ProjectResults }) {
    const blocks = [
        { label: 'Problema', text: results.problem },
        { label: 'Solução', text: results.solution },
        { label: 'Aprendizados', text: results.learnings },
    ].filter((b) => b.text)

    return (
        <dl className="space-y-4">
            {blocks.map((b) => (
                <div key={b.label}>
                    <dt className="font-medium">{b.label}</dt>
                    <dd className="mt-1 text-sm text-muted">{b.text}</dd>
                </div>
            ))}
        </dl>
    )
}