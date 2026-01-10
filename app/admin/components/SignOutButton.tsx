"use client";

import { useFormStatus } from "react-dom";

export function SignOutButton() {
    const { pending } = useFormStatus();

    return (
        <button
            disabled={pending}
            className={`w-full px-4 py-2 text-left text-sm rounded-lg transition-colors flex items-center gap-2 ${pending
                    ? "text-red-400/50 cursor-wait bg-red-500/5"
                    : "text-red-400 hover:bg-red-500/10"
                }`}
        >
            {pending ? (
                <>
                    <span className="w-3 h-3 border-2 border-red-400/50 border-t-red-400 rounded-full animate-spin"></span>
                    Signing Out...
                </>
            ) : (
                "Sign Out"
            )}
        </button>
    );
}
