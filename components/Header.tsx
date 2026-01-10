import Link from "next/link";
import { cn } from "@/lib/utils";

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-black/50 border-b border-white/10 transition-all duration-300">
            <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold tracking-tighter text-white hover:text-white/80 transition-colors">
                    Phemis Portfolio
                </Link>
            </div>
            <nav className="hidden md:flex items-center gap-8">
                <Link href="/projects" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                    Projects
                </Link>
                <Link href="/about" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                    About
                </Link>
                <Link href="/admin/login" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                    Admin
                </Link>
                <Link href="/contact" className="text-sm font-medium px-4 py-2 rounded-full bg-white text-black hover:bg-white/90 transition-colors">
                    Contact
                </Link>
            </nav>
            {/* Mobile Menu Icon could go here */}
            <div className="md:hidden">
                <span className="text-white/70 text-sm">Menu</span>
            </div>
        </header>
    );
}
