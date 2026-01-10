'use client';

import { loginAction } from '@/lib/actions';
import { useFormState } from 'react-dom';

const initialState = {
    error: '',
};

export default function LoginPage() {
    // @ts-ignore
    const [state, formAction] = useFormState(loginAction, initialState);

    return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white p-4">
            <div className="w-full max-w-md p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <h1 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-br from-white to-white/60">
                    Admin Access
                </h1>

                <form action={formAction} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-white/60 mb-2">Username</label>
                        <input
                            type="text"
                            name="username"
                            required
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/30 transition-colors"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-white/60 mb-2">Password</label>
                        <input
                            type="password"
                            name="password"
                            required
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/30 transition-colors"
                        />
                    </div>

                    {state?.error && (
                        <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
                            {state.error}
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full py-4 bg-white text-black font-bold rounded-lg hover:bg-white/90 transition-colors"
                    >
                        Authenticate
                    </button>
                </form>
            </div>
        </div>
    );
}
