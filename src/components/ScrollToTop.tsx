import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Ao trocar de página, volta para o topo (o React Router não faz isso sozinho).
export default function ScrollToTop() {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return null
}