import React, { useState, useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { Maximize, Minimize, ChevronLeft, ChevronRight } from 'lucide-react';

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

            {/* Top right keyboard hint */}
            <div
                className={`absolute top-[4%] right-[4%] z-50 text-[11px] text-white/40 tracking-wide transition-opacity duration-300 pointer-events-none ${showControls ? 'opacity-100' : 'opacity-0'}`}
            >
                ← → Navigate · F Fullscreen
            </div>

            {/* Bottom Controls */}
            <div
                className={`absolute bottom-[4%] left-1/2 -translate-x-1/2 z-50 flex items-center gap-8 px-6 py-3 rounded-full liquid-glass transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}
            >
                {/* Left: Counter */}
                <div className="text-[13px] text-white/50 tabular-nums font-medium">
                    {currentIndex + 1} / {totalSlides}
                </div>

                {/* Center: Dots */}
                <div className="flex items-center gap-2">
                    {React.Children.map(children, (_, idx) => (
                        <div
                            key={idx}
                            className={`h-[6px] rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-[24px] bg-white/90' : 'w-[6px] bg-white/30'
                                }`}
                        />
                    ))}
                </div>

                {/* Right: Controls */}
                <div className="flex items-center gap-1">
                    <button
                        onClick={goToPrevSlide}
                        disabled={currentIndex === 0}
                        className="p-1.5 text-white/50 hover:text-white/90 hover:bg-white/10 rounded-full transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white/50"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={goToNextSlide}
                        disabled={currentIndex === totalSlides - 1}
                        className="p-1.5 text-white/50 hover:text-white/90 hover:bg-white/10 rounded-full transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white/50"
                    >
                        <ChevronRight size={20} />
                    </button>

                    <div className="w-[1px] h-4 bg-white/10 mx-1" />

                    <button
                        onClick={toggleFullscreen}
                        className="p-1.5 text-white/50 hover:text-white/90 hover:bg-white/10 rounded-full transition-colors"
                    >
                        {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
                    </button>
                </div>
            </div>
        </div>
    );
};
