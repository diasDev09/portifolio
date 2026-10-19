import { useEffect, useState } from 'react'
import { scrollToTop } from '../utils/scroll'

// Distância (px) do fim da página a partir da qual o botão aparece.
// Para aparecer logo após começar a rolar, troque a regra em update() por: scrollY > 400
const NEAR_BOTTOM = 200

export default function BackToTop() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const update = () => {
            const { scrollY, innerHeight } = window
            const pageHeight = document.documentElement.scrollHeight
            const hasScroll = pageHeight > innerHeight + 50
            setVisible(hasScroll && scrollY + innerHeight >= pageHeight - NEAR_BOTTOM)
        }

        update()
        window.addEventListener('scroll', update, { passive: true })
        window.addEventListener('resize', update)
        // Reavalia quando o conteúdo muda de altura (troca de página, filtros, imagens).
        const observer = new ResizeObserver(update)
        observer.observe(document.body)

        return () => {
            window.removeEventListener('scroll', update)
            window.removeEventListener('resize', update)
            observer.disconnect()
        }
    }, [])

    return (
        <button
            type="button"
            onClick={scrollToTop}
            aria-label="Voltar ao topo"
            aria-hidden={!visible}
            tabIndex={visible ? 0 : -1}
            className={`fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-accent text-lg text-white shadow-lg transition-all duration-300 hover:opacity-85 ${visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
                }`}
        >
            ↑
        </button>
    )
}