import React from 'react';
import { VideoBackground } from '../components/VideoBackground';

export const BigIdea: React.FC = () => {
    return (
        <div className="relative w-full h-full flex flex-col p-[4%]">
            <VideoBackground src="https://stream.mux.com/4IMYGcL01xjs7ek5ANO17JC4VQVUTsojZlnw4fXzwSxc.m3u8" />

            <div className="relative z-10 flex flex-col h-full">
                <header className="mb-[8%] text-center">
                    <h1 className="text-[clamp(40px,5vw,80px)] font-bold text-[#D2FF55] tracking-tight">
                        One Big Idea
                    </h1>
                </header>

                <div className="flex px-[10%] flex-1 items-center justify-center gap-[10%] pb-[10%]">
                    {/* Left: Icon */}
                    <div className="flex-[0_0_30%] flex justify-center dropshadow-xl">
                        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full max-w-[300px] h-auto text-white drop-shadow-lg">
                            <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.9 1.2 1.5 1.5 2.5" />
                            <path d="M9 18h6" />
                            <path d="M10 22h4" />
                            <path d="m12 18-1-4" />
                            <path d="m12 18 1-4" />
                        </svg>
                    </div>

                    {/* Right: Text */}
                    <div className="flex-[0_0_60%] flex flex-col gap-6 liquid-glass p-12 rounded-3xl">
                        <h2 className="text-[clamp(32px,4vw,56px)] font-bold text-[#9b51e0] drop-shadow-sm">
                            AI-First Customer Support
                        </h2>
                        <p className="text-[clamp(20px,2.2vw,36px)] text-white/95 leading-relaxed font-medium">
                            An AI agent that helps users complete swaps and escalates to human support only when required.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
