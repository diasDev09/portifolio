import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export default function Layout() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-10">
                <Outlet />
            </main>
            <footer className="border-t border-border py-6 text-center text-sm text-muted">
                © {new Date().getFullYear()} Caio Dias
            </footer>
        </div>
    )
}