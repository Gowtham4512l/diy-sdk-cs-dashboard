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
    const hideControlsTimeoutRef = useRef<number | null>(null);

    const totalSlides = React.Children.count(children);

    const goToNextSlide = () => setCurrentIndex((prev) => Math.min(prev + 1, totalSlides - 1));
    const goToPrevSlide = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

    const toggleFullscreen = async () => {
        if (!document.fullscreenElement) {
            await document.documentElement.requestFullscreen().catch(err => console.error(err));
            setIsFullscreen(true);
        } else {
            await document.exitFullscreen().catch(err => console.error(err));
            setIsFullscreen(false);
        }
    };

    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
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

    return (
        <div className="relative w-screen h-screen overflow-hidden bg-black text-white font-sans">
            {/* Slides */}
            <div className="relative w-full h-full">
                {React.Children.map(children, (child, index) => {
                    let transform = 'scale(1)';
                    let opacity = 0;
                    let pointerEvents: 'auto' | 'none' = 'none';

                    if (index === currentIndex) {
                        transform = 'scale(1)';
                        opacity = 1;
                        pointerEvents = 'auto';
                    } else if (index < currentIndex) {
                        transform = 'scale(0.95)';
                        opacity = 0;
                    } else {
                        transform = 'scale(1.05)';
                        opacity = 0;
                    }

                    return (
                        <div
                            key={index}
                            className="absolute inset-0 w-full h-full transition-all duration-500 ease-in-out"
                            style={{
                                transform,
                                opacity,
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
