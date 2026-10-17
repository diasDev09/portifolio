import { useEffect, useRef, useState } from 'react'

export default function Gallery({ images, title }: { images: string[]; title: string }) {
    const [active, setActive] = useState<number | null>(null)
    const closeRef = useRef<HTMLButtonElement>(null)
    const triggerRef = useRef<HTMLElement | null>(null)

    const open = (i: number, el: HTMLElement) => {
        triggerRef.current = el
        setActive(i)
    }

    const isOpen = active !== null
    useEffect(() => {
        if (isOpen) closeRef.current?.focus()
        else triggerRef.current?.focus()
    }, [isOpen])

    useEffect(() => {
        if (active === null) return

        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setActive(null)
            if (e.key === 'ArrowRight') setActive((i) => (i === null ? i : (i + 1) % images.length))
            if (e.key === 'ArrowLeft') setActive((i) => (i === null ? i : (i - 1 + images.length) % images.length))
        }

        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [active, images.length])

    return (
        <>
            <ul className="grid grid-cols-[repeat(auto-fit,minmax(14rem,1fr))] gap-4">
                {images.map((src, i) => (
                    <li key={src}>
                        <button
                            onClick={(e) => open(i, e.currentTarget)}
                            className="flex h-72 w-full items-center justify-center overflow-hidden rounded-md bg-surface-2/50 sm:h-96"
                        >
                            <img
                                src={src}
                                alt={`${title}: imagem ${i + 1}`}
                                loading="lazy"
                                className="max-h-full max-w-full object-contain transition-transform hover:scale-[1.02]"
                            />
                        </button>
                    </li>
                ))}
            </ul>

            {active !== null && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label="Imagem ampliada"
                    onClick={() => setActive(null)}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                >
                    <img
                        src={images[active]}
                        alt={`${title}: imagem ${active + 1}`}
                        onClick={(e) => e.stopPropagation()}
                        className="max-h-full max-w-full rounded-md"
                    />
                    <button
                        ref={closeRef}
                        onClick={() => setActive(null)}
                        aria-label="Fechar"
                        className="absolute right-4 top-4 rounded-full bg-surface-2 px-3 py-1 text-sm text-ink"
                    >
                        Fechar ✕
                    </button>
                </div>
            )}
        </>
    )
}