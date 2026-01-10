"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { personalInfo } from "@/lib/data";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background text-white pt-24">
            <Header />

            <div className="max-w-4xl mx-auto px-6 md:px-12 py-12">
                <section className="mb-24">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
                        The Architect.
                    </h1>
                    <p className="text-2xl md:text-3xl text-white/80 leading-relaxed font-light mb-12">
                        {personalInfo.bio}
                    </p>

                    <div className="flex gap-4">
                        <button className="px-8 py-3 bg-white text-black font-bold rounded hover:bg-white/90 transition-colors">
                            Download Resume
                        </button>
                        <a href="mailto:hello@example.com" className="px-8 py-3 border border-white/20 font-bold rounded hover:bg-white/10 transition-colors">
                            Contact Me
                        </a>
                    </div>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    <div>
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                            SSD Engineering
                        </h2>
                        <p className="text-white/60 leading-relaxed mb-6">
                            Building scalable, secure, and distributed systems. Expert in React, Node.js, and Cloud Infrastructure.
                        </p>
                        <ul className="list-disc list-inside text-white/60 space-y-2 marker:text-indigo-500">
                            <li>System Architecture Design</li>
                            <li>Full-Stack Development (Next.js/React)</li>
                            <li>Database Optimization (PostgreSQL)</li>
                            <li>API Design (REST/GraphQL)</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                            LLM & AI Integration
                        </h2>
                        <p className="text-white/60 leading-relaxed mb-6">
                            Implementing state-of-the-art AI models into practical business solutions.
                        </p>
                        <ul className="list-disc list-inside text-white/60 space-y-2 marker:text-emerald-500">
                            <li>RAG Pipeline Development</li>
                            <li>Prompt Engineering & Optimization</li>
                            <li>Agentic Workflow Automation</li>
                            <li>Fine-tuning & Model Deployment</li>
                        </ul>
                    </div>
                </section>

                {/* Philosophy / Approach */}
                <section className="bg-white/5 p-8 md:p-12 rounded-2xl border border-white/10">
                    <h2 className="text-3xl font-bold mb-6">Philosophy</h2>
                    <blockquote className="text-xl italic text-white/70 border-l-4 border-white/20 pl-6 my-6">
                        &quot;Technology should not just function; it should anticipate, adapt, and empower. True intelligence is seamless.&quot;
                    </blockquote>
                </section>
            </div>

            <Footer />
        </main>
    );
}
