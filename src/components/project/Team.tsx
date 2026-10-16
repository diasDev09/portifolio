import type { Member } from '../../types/project'

export default function Team({ members }: { members: Member[] }) {
    return (
        <ul className="grid gap-3 sm:grid-cols-2">
            {members.map((m) => (
                <li key={m.name} className="flex gap-3 rounded-md bg-surface-2 p-3">
                    {m.avatar ? (
                        <img src={m.avatar} alt={m.name} className="h-10 w-10 rounded-full object-cover" />
                    ) : (
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent font-semibold">
                            {m.name.charAt(0)}
                        </div>
                    )}
                    <div>
                        <h3 className="font-medium">
                            {m.github ? (
                                <a href={m.github} target="_blank" rel="noreferrer" className="hover:underline">
                                    {m.name}
                                </a>
                            ) : (
                                m.name
                            )}
                        </h3>
                        <p className="text-xs text-muted">{m.role}</p>
                        <p className="mt-1 text-sm text-muted">{m.contribution}</p>
                    </div>
                </li>
            ))}
        </ul>
    )
}