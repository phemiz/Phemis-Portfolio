'use client';

import { updateCredentialsAction } from '@/lib/actions';

export default function SettingsPage() {
    return (
        <div className="max-w-xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Admin Settings</h1>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h2 className="text-xl font-bold mb-6">Security</h2>

                <form action={updateCredentialsAction} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-white/60 mb-2">Update Username</label>
                        <input
                            type="text"
                            name="username"
                            required
                            placeholder="New Username"
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/30"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-white/60 mb-2">Update Password</label>
                        <input
                            type="password"
                            name="password"
                            required
                            placeholder="New Password"
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/30"
                        />
                    </div>

                    <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg mb-4">
                        <p className="text-yellow-200 text-sm">
                            Warning: Updating these credentials will log you out immediately. You will need to sign in again with the new details.
                        </p>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 bg-white text-black font-bold rounded-lg hover:bg-white/90 transition-colors"
                    >
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
}
