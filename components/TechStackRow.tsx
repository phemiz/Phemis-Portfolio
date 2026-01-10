"use client";

import { motion } from "framer-motion";

const technologies = [
    "React", "Next.js", "TypeScript", "Python", "FastAPI",
    "PostgreSQL", "OpenAI", "LangChain", "Framer Motion", "Tailwind CSS",
    "Node.js", "Docker", "AWS", "Firebase", "Git"
];

export function TechStackRow({ technologies: techList = technologies }: { technologies?: string[] }) {
    return (
        <div className="w-full overflow-hidden bg-white/5 border-y border-white/10 py-8">
            <div className="max-w-7xl mx-auto px-6 mb-4">
                <p className="text-sm font-medium text-white/40 uppercase tracking-widest text-center">Stack Technology</p>
            </div>

            <div className="relative flex">
                <motion.div
                    className="flex gap-12 items-center whitespace-nowrap px-12"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        repeat: Infinity,
                        duration: 40,
                        ease: "linear"
                    }}
                >
                    {[...techList, ...techList, ...techList].map((tech, index) => (
                        <span key={index} className="text-xl md:text-2xl font-bold text-white/20 hover:text-white/80 transition-colors cursor-default">
                            {tech}
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
