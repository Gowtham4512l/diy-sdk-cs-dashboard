import React, { useState, useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { Maximize, Minimize } from 'lucide-react';

interface PresentationProps {
    children: ReactNode[];
}

export const Presentation: React.FC<PresentationProps> = ({ children }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [showControls, setShowControls] = useState(true);
    const containerRef = useRef<HTMLDivElement>(null);
    const hideControlsTimeoutRef = useRef<number | null>(null);

    const totalSlides = React.Children.count(children);

    const goToNextSlide = () => setCurrentIndex((prev) => Math.min(prev + 1, totalSlides - 1));
    const goToPrevSlide = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

    const toggleFullscreen = async () => {
        try {
            const elem = containerRef.current || document.documentElement;
            // @ts-ignore - webkit prefix
            const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement;

            if (!fullscreenElement) {
                if (elem.requestFullscreen) {
                    await elem.requestFullscreen();
                } else {
                    // @ts-ignore - webkit prefix
                    await elem.webkitRequestFullscreen?.();
                }
            } else {
                if (document.exitFullscreen) {
                    await document.exitFullscreen();
                } else {
                    // @ts-ignore - webkit prefix
                    await document.webkitExitFullscreen?.();
                }
            }
        } catch (err) {
            console.error("Fullscreen error:", err);
        }
    };

    useEffect(() => {
        const handleFullscreenChange = () => {
            // @ts-ignore
            setIsFullscreen(!!(document.fullscreenElement || document.webkitFullscreenElement));
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener('webkitfullscreenchange', handleFullscreenChange);

        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
            document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
        };
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
                e.preventDefault();
                goToNextSlide();
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault();
                goToPrevSlide();
            } else if (e.key === 'f' || e.key === 'F') {
                e.preventDefault();
                toggleFullscreen();
            } else if (e.key === 'Escape') {
                if (isFullscreen) {
                    toggleFullscreen();
                }
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isFullscreen, totalSlides]);

    useEffect(() => {
        const resetControlsTimeout = () => {
            setShowControls(true);
            if (hideControlsTimeoutRef.current) {
                window.clearTimeout(hideControlsTimeoutRef.current);
            }
            hideControlsTimeoutRef.current = window.setTimeout(() => {
                setShowControls(false);
            }, 3000);
        };

        resetControlsTimeout();
        window.addEventListener('mousemove', resetControlsTimeout);
        return () => {
            window.removeEventListener('mousemove', resetControlsTimeout);
            if (hideControlsTimeoutRef.current) window.clearTimeout(hideControlsTimeoutRef.current);
        };
    }, []);

    useEffect(() => {
        const handleGlassMouseMove = (e: MouseEvent) => {
            const cards = document.querySelectorAll('.liquid-glass');
            for (let i = 0; i < cards.length; i++) {
                const card = cards[i] as HTMLElement;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            }
        };
        window.addEventListener('mousemove', handleGlassMouseMove);
        return () => window.removeEventListener('mousemove', handleGlassMouseMove);
    }, []);

    return (
        <div ref={containerRef} className="relative w-screen h-screen overflow-hidden mesh-bg text-white font-sans bg-[#030305]">
            {/* Ambient Background Glows & Grid */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-grid opacity-50" />
                <div className="orb-1" />
                <div className="orb-2" />
            </div>

            {/* Cinematic Overlays */}
            <div className="vignette" />
            <div className="film-grain" />
            {/* Slides */}
            <div className="relative w-full h-full z-10">
                {React.Children.map(children, (child, index) => {
                    let transform = 'translateX(0) scale(1) translateZ(0)';
                    let opacity = 0;
                    let filter = 'blur(20px)';
                    let pointerEvents: 'auto' | 'none' = 'none';

                    if (index === currentIndex) {
                        transform = 'translateX(0) scale(1) translateZ(0)';
                        opacity = 1;
                        filter = 'blur(0px)';
                        pointerEvents = 'auto';
                    } else if (index < currentIndex) {
                        // Slide left, shrink, fly backwards
                        transform = 'translateX(-15%) scale(0.85) translateZ(-100px)';
                        opacity = 0;
                        filter = 'blur(30px)';
                    } else {
                        // Slide right, shrink, fly backwards
                        transform = 'translateX(15%) scale(0.85) translateZ(-100px)';
                        opacity = 0;
                        filter = 'blur(30px)';
                    }

                    return (
                        <div
                            key={index}
                            className="absolute inset-0 w-full h-full transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
                            style={{
                                transform,
                                opacity,
                                filter,
                                pointerEvents,
                                zIndex: index === currentIndex ? 10 : 0
                            }}
                        >
                            {child}
                        </div>
                    );
                })}
            </div>

            {/* Minimal Progress Bar at bottom edge */}
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white/10 z-50">
                <div
                    className="h-full bg-white/80 transition-all duration-300 ease-out"
                    style={{ width: `${((currentIndex + 1) / totalSlides) * 100}%` }}
                />
            </div>

            {/* Top right keyboard hint */}
            <div
                className={`absolute top-[4%] right-[4%] z-50 text-[11px] text-white/40 tracking-wide transition-opacity duration-300 pointer-events-none ${showControls ? 'opacity-100' : 'opacity-0'}`}
            >
                ← → Navigate · F Fullscreen
            </div>



            {/* Bottom Corner Controls (Slide number & Fullscreen) */}
            <div className={`absolute bottom-[4%] left-[4%] right-[4%] z-50 flex justify-between items-end pointer-events-none transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
                {/* Left: Counter */}
                <div className="liquid-glass px-4 py-2 rounded-2xl text-[14px] text-white/90 tabular-nums font-medium pointer-events-auto shadow-lg">
                    {currentIndex + 1} <span className="opacity-40 ml-0.5">/ {totalSlides}</span>
                </div>

                {/* Right: Fullscreen Toggle */}
                <button
                    onClick={toggleFullscreen}
                    className="liquid-glass p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-2xl transition-all pointer-events-auto shadow-lg"
                >
                    {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
                </button>
            </div>
        </div>
    );
};
