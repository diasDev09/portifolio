export default function Process({ steps }: { steps: string[] }) {
    return (
        <ol className="space-y-3">
            {steps.map((step, i) => (
                <li key={step} className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs">
                        {i + 1}
                    </span>
                    <span className="text-sm text-muted">{step}</span>
                </li>
            ))}
        </ol>
    )
}