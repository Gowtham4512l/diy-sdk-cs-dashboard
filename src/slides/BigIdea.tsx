import React from 'react';
import { VideoBackground } from '../components/VideoBackground';
import { BotMessageSquare, Sparkles } from 'lucide-react';

export const BigIdea: React.FC = () => {
    return (
        <div className="relative w-full h-full flex flex-col justify-center items-center p-[6%] overflow-hidden">
            <VideoBackground src="https://stream.mux.com/4IMYGcL01xjs7ek5ANO17JC4VQVUTsojZlnw4fXzwSxc.m3u8" />

            <div className="relative z-10 w-full max-w-7xl flex flex-col items-center justify-center">
                <header className="mb-16 text-center">
                    <div className="inline-flex items-center gap-4 mb-4">
                        <Sparkles className="text-[#D2FF55]" size={40} />
                        <h1 className="text-[clamp(48px,6vw,96px)] font-bold text-white tracking-tight drop-shadow-lg">
                            One Big <span className="text-[#D2FF55]">Idea</span>
                        </h1>
                        <Sparkles className="text-[#D2FF55]" size={40} />
                    </div>
                </header>

                <div className="liquid-glass p-8 lg:p-16 rounded-[40px] flex flex-col md:flex-row items-center gap-10 md:gap-16 shadow-2xl border border-white/10 relative overflow-hidden group w-full max-w-6xl">
                    <div className="absolute -inset-2 bg-gradient-to-r from-[#9b51e0]/20 via-transparent to-[#4A90E2]/20 blur-3xl rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />

                    {/* Left: Icon */}
                    <div className="flex-shrink-0 flex justify-center dropshadow-2xl p-6 bg-gradient-to-br from-white/10 to-white/5 rounded-full border border-white/10 relative">
                        <div className="absolute inset-0 bg-white/5 blur-2xl rounded-full animate-pulse" />
                        <BotMessageSquare size={160} className="text-white relative z-10 drop-shadow-2xl" strokeWidth={1.5} />
                    </div>

                    {/* Right: Text */}
                    <div className="flex flex-col gap-6 relative z-10">
                        <div className="inline-block px-5 py-2 bg-white/10 border border-white/20 rounded-full w-fit">
                            <span className="text-[#D2FF55] font-semibold text-[clamp(14px,1.5vw,20px)] tracking-widest uppercase">The Future</span>
                        </div>
                        <h2 className="text-[clamp(36px,4.5vw,64px)] font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-[#9b51e0] drop-shadow-sm leading-tight">
                            AI-First Customer Support
                        </h2>
                        <p className="text-[clamp(22px,2.5vw,36px)] text-white/80 leading-relaxed font-medium">
                            An AI agent that helps users complete swaps and escalates to human support only when required.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
