'use client';

import { useEffect, useState } from 'react';
import { updateSettingsAction } from '@/lib/actions';

interface Settings {
    scrollingText: {
        section0: { heading: string; description: string };
        section30: { heading: string; description: string };
        section60: { heading: string; description: string };
        section90: { heading: string; description: string };
    };
    stackTechnology: string[];
}

export default function ContentSettingsPage() {
    const [settings, setSettings] = useState<Settings | null>(null);
    const [stackTech, setStackTech] = useState<string[]>([]);
    const [newTech, setNewTech] = useState('');
    const [loading, setLoading] = useState(true);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        // Fetch current settings
        fetch('/api/settings')
            .then(res => res.json())
            .then(data => {
                setSettings(data);
                setStackTech(data.stackTechnology || []);
                setLoading(false);
            })
            .catch(err => {
                console.error('Failed to load settings:', err);
                setLoading(false);
            });

        // Check for success parameter
        const params = new URLSearchParams(window.location.search);
        if (params.get('success') === 'true') {
            setSuccess(true);
            setTimeout(() => setSuccess(false), 3000);
        }
    }, []);

    const handleAddTech = () => {
        if (newTech.trim() && !stackTech.includes(newTech.trim())) {
            setStackTech([...stackTech, newTech.trim()]);
            setNewTech('');
        }
    };

    const handleRemoveTech = (index: number) => {
        setStackTech(stackTech.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        formData.set('stackTechnology', JSON.stringify(stackTech));

        await updateSettingsAction(formData);
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
            </div>
        );
    }

    if (!settings) {
        return (
            <div className="text-center text-red-400 py-12">
                Failed to load settings. Please try again.
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Content Settings</h1>
                {success && (
                    <div className="px-4 py-2 bg-green-500/20 border border-green-500/40 rounded-lg text-green-300 text-sm">
                        ✓ Settings saved successfully!
                    </div>
                )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Scrolling Text Section */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                    <h2 className="text-2xl font-bold mb-6">Scrolling Text Overlays</h2>
                    <p className="text-white/60 text-sm mb-8">
                        Edit the text that appears during the scroll animation on the home page.
                    </p>

                    {/* Section 0% */}
                    <div className="mb-8 pb-8 border-b border-white/10">
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                            <span className="px-2 py-1 bg-indigo-500/20 text-indigo-300 text-xs rounded">0%</span>
                            Opening Section
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-white/60 mb-2">Heading</label>
                                <input
                                    type="text"
                                    name="section0_heading"
                                    defaultValue={settings.scrollingText.section0.heading}
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/30"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-white/60 mb-2">Description (optional)</label>
                                <input
                                    type="text"
                                    name="section0_description"
                                    defaultValue={settings.scrollingText.section0.description}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/30"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Section 30% */}
                    <div className="mb-8 pb-8 border-b border-white/10">
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                            <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded">30%</span>
                            First Detail Section
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-white/60 mb-2">Heading</label>
                                <input
                                    type="text"
                                    name="section30_heading"
                                    defaultValue={settings.scrollingText.section30.heading}
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/30"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-white/60 mb-2">Description</label>
                                <input
                                    type="text"
                                    name="section30_description"
                                    defaultValue={settings.scrollingText.section30.description}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/30"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Section 60% */}
                    <div className="mb-8 pb-8 border-b border-white/10">
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                            <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded">60%</span>
                            Second Detail Section
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-white/60 mb-2">Heading</label>
                                <input
                                    type="text"
                                    name="section60_heading"
                                    defaultValue={settings.scrollingText.section60.heading}
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/30"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-white/60 mb-2">Description</label>
                                <input
                                    type="text"
                                    name="section60_description"
                                    defaultValue={settings.scrollingText.section60.description}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/30"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Section 90% */}
                    <div className="mb-0">
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                            <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded">90%</span>
                            Closing Section
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-white/60 mb-2">Heading</label>
                                <input
                                    type="text"
                                    name="section90_heading"
                                    defaultValue={settings.scrollingText.section90.heading}
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/30"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-white/60 mb-2">Description (optional)</label>
                                <input
                                    type="text"
                                    name="section90_description"
                                    defaultValue={settings.scrollingText.section90.description}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/30"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stack Technology Section */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                    <h2 className="text-2xl font-bold mb-6">Stack Technology</h2>
                    <p className="text-white/60 text-sm mb-6">
                        Manage the technologies displayed in the scrolling marquee on the home page.
                    </p>

                    <div className="mb-6">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={newTech}
                                onChange={(e) => setNewTech(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && newTech.trim() && (e.preventDefault(), handleAddTech())}
                                placeholder="Add new technology..."
                                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/30"
                            />
                            <button
                                type="button"
                                onClick={handleAddTech}
                                disabled={!newTech.trim()}
                                className={`px-6 py-3 rounded-lg font-medium transition-colors ${newTech.trim()
                                        ? 'bg-white/10 hover:bg-white/20 border border-white/20 cursor-pointer'
                                        : 'bg-white/5 border border-white/5 text-white/30 cursor-not-allowed'
                                    }`}
                            >
                                + Add
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {stackTech.map((tech, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-lg group hover:border-red-400/40 transition-colors"
                            >
                                <span className="text-sm font-medium">{tech}</span>
                                <button
                                    type="button"
                                    onClick={() => handleRemoveTech(index)}
                                    className="text-white/40 hover:text-red-400 transition-colors"
                                    title="Remove"
                                >
                                    ×
                                </button>
                            </div>
                        ))}
                    </div>

                    {stackTech.length === 0 && (
                        <p className="text-white/40 text-sm text-center py-8">
                            No technologies added yet. Add some above!
                        </p>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full py-4 bg-white text-black font-bold rounded-lg hover:bg-white/90 transition-colors"
                >
                    Save All Changes
                </button>
            </form>
        </div>
    );
}
