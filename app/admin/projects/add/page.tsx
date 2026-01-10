'use client';

import { useState } from 'react';
import { addProjectAction, fetchGitHubRepoAction } from '@/lib/actions';
import Link from 'next/link';

export default function AddProjectPage() {
    const [loading, setLoading] = useState(false);
    const [githubUrl, setGithubUrl] = useState('');
    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        shortDesc: '',
        fullDesc: '',
        status: 'in-progress',
        techStack: '',
        githubUrl: ''
    });

    const handleFetchGitHub = async () => {
        if (!githubUrl) {
            alert('Please enter a GitHub URL');
            return;
        }

        setLoading(true);
        const result = await fetchGitHubRepoAction(githubUrl);
        setLoading(false);

        if (result.error) {
            alert(result.error);
            return;
        }

        if (result.success && result.data) {
            setFormData({
                title: result.data.title,
                slug: result.data.slug,
                shortDesc: result.data.shortDesc,
                fullDesc: result.data.fullDesc,
                status: 'in-progress',
                techStack: result.data.techStack.join(', '),
                githubUrl: result.data.githubUrl
            });
            setGithubUrl(result.data.githubUrl);
        }
    };

    return (
        <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
                <Link href="/admin" className="text-white/60 hover:text-white transition-colors">
                    &larr; Back
                </Link>
                <h1 className="text-3xl font-bold">Add New Project</h1>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <form action={addProjectAction} className="space-y-6">

                    {/* GitHub Import Section */}
                    <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl mb-6">
                        <h3 className="text-sm font-bold text-blue-300 mb-2">Import from GitHub</h3>
                        <p className="text-xs text-white/40 mb-3">
                            Note: Only works with public repositories. For private repos, please fill details manually.
                        </p>
                        <div className="flex gap-2">
                            <input
                                type="url"
                                placeholder="https://github.com/username/repo"
                                value={githubUrl}
                                onChange={(e) => setGithubUrl(e.target.value)}
                                className="flex-1 px-4 py-2 bg-black/20 border border-white/10 rounded-lg text-sm text-white focus:outline-none"
                            />
                            <button
                                type="button"
                                onClick={handleFetchGitHub}
                                disabled={loading}
                                className="px-4 py-2 bg-blue-600 text-white text-sm font-bold rounded-lg hover:bg-blue-500 transition-colors disabled:opacity-50"
                            >
                                {loading ? 'Fetching...' : 'Fetch'}
                            </button>
                        </div>
                    </div>

                    <hr className="border-white/10 my-6" />

                    {/* Form Fields */}
                    <div className="grid grid-cols-2 gap-6">
                        <div className="col-span-2">
                            <label className="block text-sm font-medium text-white/60 mb-2">Project Title</label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                required
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/30"
                            />
                        </div>

                        <div className="col-span-2">
                            <label className="block text-sm font-medium text-white/60 mb-2">Slug (URL)</label>
                            <input
                                type="text"
                                name="slug"
                                value={formData.slug}
                                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                                required
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/30"
                            />
                        </div>

                        <div className="col-span-2">
                            <label className="block text-sm font-medium text-white/60 mb-2">Short Description</label>
                            <input
                                type="text"
                                name="shortDesc"
                                value={formData.shortDesc}
                                onChange={(e) => setFormData({ ...formData, shortDesc: e.target.value })}
                                required
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/30"
                            />
                        </div>

                        <div className="col-span-2">
                            <label className="block text-sm font-medium text-white/60 mb-2">Full Description</label>

                            {/* Documentation Upload */}
                            <div className="mb-4 p-4 bg-white/5 border border-white/10 border-dashed rounded-lg">
                                <label className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-4">
                                    Auto-fill from Documentation
                                </label>

                                <div className="space-y-4">
                                    {/* Option 1: File Upload */}
                                    <div className="flex items-center gap-4">
                                        <input
                                            type="file"
                                            accept=".md,.txt"
                                            onChange={(e) => {
                                                const file = e.target.files?.[0];
                                                if (!file) return;

                                                const reader = new FileReader();
                                                reader.onload = (event) => {
                                                    const text = event.target?.result as string;
                                                    setFormData(prev => ({ ...prev, fullDesc: text }));
                                                };
                                                reader.readAsText(file);
                                            }}
                                            className="text-sm text-white/60 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-white/10 file:text-white hover:file:bg-white/20"
                                        />
                                        <span className="text-xs text-white/30 hidden sm:inline">
                                            Upload local README
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-4 text-xs text-white/20 uppercase font-bold">
                                        <span className="h-px bg-white/10 flex-1"></span>
                                        OR
                                        <span className="h-px bg-white/10 flex-1"></span>
                                    </div>

                                    {/* Option 2: GitHub Fetch */}
                                    <div className="flex gap-2">
                                        <input
                                            type="url"
                                            placeholder="https://github.com/username/repo"
                                            className="flex-1 px-3 py-2 bg-black/20 border border-white/10 rounded text-sm text-white focus:outline-none placeholder:text-white/20"
                                            onKeyDown={async (e) => {
                                                if (e.key === 'Enter') {
                                                    e.preventDefault();
                                                    const val = e.currentTarget.value;
                                                    if (!val) return;

                                                    // Dynamic import to avoid client/server issues if actions isn't purely client-friendly yet, 
                                                    // but actions.ts is 'use server' so we can import it directly.
                                                    // However, we need to handle loading state locally if desired.
                                                    const { fetchGitHubReadmeAction } = await import('@/lib/actions');
                                                    const res = await fetchGitHubReadmeAction(val);
                                                    if (res.success && res.content) {
                                                        setFormData(prev => ({ ...prev, fullDesc: res.content }));
                                                    } else if (res.error) {
                                                        alert(res.error);
                                                    }
                                                }
                                            }}
                                        />
                                        <button
                                            type="button"
                                            onClick={async (e) => {
                                                const input = e.currentTarget.previousElementSibling as HTMLInputElement;
                                                const val = input.value;
                                                if (!val) {
                                                    alert("Please enter a GitHub URL");
                                                    return;
                                                }

                                                const { fetchGitHubReadmeAction } = await import('@/lib/actions');
                                                const res = await fetchGitHubReadmeAction(val);
                                                if (res.success && res.content) {
                                                    setFormData(prev => ({ ...prev, fullDesc: res.content }));
                                                } else if (res.error) {
                                                    alert(res.error);
                                                }
                                            }}
                                            className="px-3 py-2 bg-white/10 hover:bg-white/20 rounded text-xs font-bold transition-colors"
                                        >
                                            Fetch to Description
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <textarea
                                name="fullDesc"
                                rows={10}
                                value={formData.fullDesc}
                                onChange={(e) => setFormData({ ...formData, fullDesc: e.target.value })}
                                required
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/30 font-mono text-sm"
                                placeholder="# Project Documentation..."
                            ></textarea>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-white/60 mb-2">Status</label>
                            <select
                                name="status"
                                value={formData.status}
                                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/30"
                            >
                                <option value="in-progress">In Progress</option>
                                <option value="near-complete">Near Complete</option>
                                <option value="completed">Completed</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-white/60 mb-2">Tech Stack (comma separated)</label>
                            <input
                                type="text"
                                name="techStack"
                                value={formData.techStack}
                                onChange={(e) => setFormData({ ...formData, techStack: e.target.value })}
                                placeholder="React, Next.js, AI"
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/30"
                            />
                        </div>

                        <div className="col-span-2">
                            <label className="block text-sm font-medium text-white/60 mb-2">Project Image (for manual entry)</label>
                            <input
                                type="file"
                                name="image"
                                accept="image/*"
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/30 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-white file:text-black hover:file:bg-white/90"
                            />
                        </div>

                        <div className="col-span-2">
                            <label className="block text-sm font-medium text-white/60 mb-2">GitHub URL</label>
                            <input
                                type="url"
                                name="githubUrl"
                                value={formData.githubUrl}
                                onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/30"
                            />
                        </div>

                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 bg-white text-black font-bold rounded-lg hover:bg-white/90 transition-colors mt-8"
                    >
                        Create Project
                    </button>

                </form>
            </div>
        </div>
    );
}
