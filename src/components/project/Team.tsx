import type { Member } from '../../types/project'

export default function Team({ members }: { members: Member[] }) {
    return (
        <ul className="flex flex-wrap justify-center gap-x-4 gap-y-6">
            {members.map((m) => (
                <li key={m.name} className="w-24 text-center sm:w-32">
                    <div className="aspect-3/4 overflow-hidden rounded-md bg-surface-2">
                        {m.avatar ? (
                            <img
                                src={m.avatar}
                                alt={`Foto de ${m.name}`}
                                loading="lazy"
                                onError={(e) => (e.currentTarget.style.display = 'none')}
                                className="h-full w-full object-cover object-top"
                            />
                        ) : (
                            <div className="flex h-full w-full items-center justify-center text-4xl font-semibold text-muted">
                                {m.name.charAt(0)}
                            </div>
                        )}
                    </div>
                    <h3 className="mt-2 text-xs font-semibold sm:text-sm">Função: {m.role}</h3>
                    <p className="mt-0.5 text-[0.65rem] uppercase leading-tight tracking-wide text-muted">
                        {m.github ? (
                            <a href={m.github} target="_blank" rel="noreferrer" className="hover:text-ink hover:underline">
                                {m.name}
                            </a>
                        ) : (
                            m.name
                        )}
                    </p>
                    {m.contribution && <p className="mt-1 text-xs text-muted">{m.contribution}</p>}
                </li>
            ))}
        </ul>
    )
}