"use client";

import { useScroll, useMotionValueEvent, useTransform, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const FRAME_COUNT = 75;

interface Settings {
    scrollingText: {
        section0: { heading: string; description: string };
        section30: { heading: string; description: string };
        section60: { heading: string; description: string };
        section90: { heading: string; description: string };
    };
    stackTechnology: string[];
}

export const ScrollSpeakerSequence = ({ settings }: { settings: Settings }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [loaded, setLoaded] = useState(false);
    const [progress, setProgress] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Preload images
    useEffect(() => {
        let isMounted = true;
        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];
            const promises = [];

            for (let i = 0; i < FRAME_COUNT; i++) {
                const promise = new Promise<void>((resolve, reject) => {
                    const img = new Image();
                    img.src = `/sequence/speaker_sequence_${i}_frame.webp`;
                    img.onload = () => {
                        loadedImages[i] = img;
                        resolve();
                    };
                    img.onerror = reject;
                });
                promises.push(promise);
            }

            try {
                await Promise.all(promises);
                if (isMounted) {
                    setImages(loadedImages);
                    setLoaded(true);
                }
            } catch (error) {
                console.error("Failed to load images", error);
            }
        };

        loadImages();

        return () => {
            isMounted = false;
        };
    }, []);

    const draw = useCallback(
        (val: number) => {
            const canvas = canvasRef.current;
            if (!canvas || !images.length) return;

            const ctx = canvas.getContext("2d");
            if (!ctx) return;

            const frameIndex = Math.min(
                FRAME_COUNT - 1,
                Math.floor(val * FRAME_COUNT)
            );
            const img = images[frameIndex];

            if (!img) return;

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            const cw = canvas.width;
            const ch = canvas.height;
            const iw = img.width;
            const ih = img.height;

            // Contain fit logic
            const scale = Math.min(cw / iw, ch / ih);
            const w = iw * scale;
            const h = ih * scale;
            const x = (cw - w) / 2;
            const y = (ch - h) / 2;

            ctx.clearRect(0, 0, cw, ch);
            ctx.drawImage(img, x, y, w, h);
        },
        [images]
    );

    // Initial draw and resize handling
    useEffect(() => {
        if (loaded) {
            const handleResize = () => draw(scrollYProgress.get());

            // Draw immediately
            handleResize();

            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
    }, [loaded, draw, scrollYProgress]);

    // Update on scroll
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setProgress(latest);
        if (loaded) {
            requestAnimationFrame(() => draw(latest));
        }
    });

    // Opacities for text
    const opacity0 = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
    const opacity30 = useTransform(scrollYProgress, [0.15, 0.3, 0.45], [0, 1, 0]);
    const opacity60 = useTransform(scrollYProgress, [0.45, 0.6, 0.75], [0, 1, 0]);
    const opacity90 = useTransform(scrollYProgress, [0.75, 0.9], [0, 1]);

    if (!loaded) {
        return (
            <div className="h-screen w-full flex items-center justify-center bg-background text-white">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
                <span className="ml-4 animate-pulse">Initializing Phemis Portfolio...</span>
            </div>
        );
    }

    return (
        <div ref={containerRef} className="relative h-[400vh] bg-background">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="h-full w-full object-cover"
                />

                {/* Overlay to hide "Veo" text in bottom-right corner */}
                <div className="absolute bottom-0 right-0 w-32 h-24 bg-gradient-to-tl from-background via-background to-transparent pointer-events-none z-10" />

                {/* Text Overlays */}
                <div className="pointer-events-none absolute inset-0 flex flex-col justify-center">

                    {/* 0% Section - Centered */}
                    <motion.div
                        style={{ opacity: opacity0 }}
                        className="absolute inset-0 flex items-center justify-center p-8"
                    >
                        <div className="text-center">
                            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white/90">
                                {settings.scrollingText.section0.heading}
                            </h1>
                            {settings.scrollingText.section0.description && (
                                <p className="text-xl text-white/60 mt-4">
                                    {settings.scrollingText.section0.description}
                                </p>
                            )}
                        </div>
                    </motion.div>

                    {/* 30% Section - Left */}
                    <motion.div
                        style={{ opacity: opacity30 }}
                        className="absolute inset-0 flex items-center justify-start p-8 md:pl-24"
                    >
                        <div className="max-w-xl">
                            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white/90 mb-4">
                                {settings.scrollingText.section30.heading}
                            </h2>
                            {settings.scrollingText.section30.description && (
                                <p className="text-xl text-white/60">
                                    {settings.scrollingText.section30.description}
                                </p>
                            )}
                        </div>
                    </motion.div>

                    {/* 60% Section - Right */}
                    <motion.div
                        style={{ opacity: opacity60 }}
                        className="absolute inset-0 flex items-center justify-end p-8 md:pr-24"
                    >
                        <div className="max-w-xl text-right">
                            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white/90 mb-4">
                                {settings.scrollingText.section60.heading}
                            </h2>
                            {settings.scrollingText.section60.description && (
                                <p className="text-xl text-white/60">
                                    {settings.scrollingText.section60.description}
                                </p>
                            )}
                        </div>
                    </motion.div>

                    {/* 90% Section - Centered */}
                    <motion.div
                        style={{ opacity: opacity90 }}
                        className="absolute inset-0 flex items-center justify-center p-8"
                    >
                        <div className="text-center">
                            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white/90">
                                {settings.scrollingText.section90.heading}
                            </h2>
                            {settings.scrollingText.section90.description && (
                                <p className="text-xl text-white/60 mt-4">
                                    {settings.scrollingText.section90.description}
                                </p>
                            )}
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};
