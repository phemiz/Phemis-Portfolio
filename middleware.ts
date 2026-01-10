import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { updateSession } from './lib/auth';

export async function middleware(request: NextRequest) {
    const session = request.cookies.get('session');

    // Protect /admin routes
    if (request.nextUrl.pathname.startsWith('/admin') && !request.nextUrl.pathname.startsWith('/admin/login')) {
        if (!session) {
            return NextResponse.redirect(new URL('/admin/login', request.url));
        }
    }

    // Redirect to dashboard if logged in and visiting login
    if (request.nextUrl.pathname.startsWith('/admin/login') && session) {
        return NextResponse.redirect(new URL('/admin', request.url));
    }

    return await updateSession(request);
}

export const config = {
    matcher: '/admin/:path*',
};
