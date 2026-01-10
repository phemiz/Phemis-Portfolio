import Link from 'next/link';
import { logoutAction } from '@/lib/actions';
import { SignOutButton } from './components/SignOutButton';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-black text-white flex">
            {/* Sidebar */}
            <aside className="w-64 border-r border-white/10 bg-white/5 p-6 flex flex-col fixed h-full">
                <div className="mb-12">
                    <h2 className="text-xl font-bold tracking-tight">Admin Console</h2>
                    <p className="text-xs text-white/40">v1.0.0 (Super Admin)</p>
                </div>

                <nav className="flex-1 space-y-2">
                    <Link href="/" className="block px-4 py-2 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors">
                        Home
                    </Link>
                    <Link href="/admin" className="block px-4 py-2 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors">
                        Projects
                    </Link>
                    <Link href="/admin/settings" className="block px-4 py-2 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors">
                        Settings
                    </Link>
                </nav>

                <form action={logoutAction}>
                    <SignOutButton />
                </form>
            </aside>

            {/* Main Content */}
            <main className="flex-1 ml-64 p-8">
                {children}
            </main>
        </div>
    );
}
