import React from 'react';
import { VideoBackground } from '../components/VideoBackground';
import { Bullet } from '../components/Bullet';
import { Hammer, Code2 } from 'lucide-react';

export const Refactors: React.FC = () => {
    return (
        <div className="relative w-full h-full flex flex-col justify-center items-center p-[6%] overflow-hidden">
            <VideoBackground src="https://stream.mux.com/Kec29dVyJgiPdtWaQtPuEiiGHkJIYQAVUJcNiIHUYeo.m3u8" />

            <div className="relative z-10 w-full max-w-7xl flex flex-col h-full justify-center">
                <header className="mb-12 text-center">
                    <h1 className="premium-gradient-text text-[clamp(44px,6vw,84px)] font-extrabold tracking-[-0.04em] mb-3 drop-shadow-2xl">
                        Major <span className="text-[#D2FF55]">Refactors</span> Needed
                    </h1>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full mt-4">
                    {/* SDK Column */}
                    <div className="liquid-glass p-8 lg:p-12 rounded-3xl flex flex-col shadow-2xl border border-white/5 relative overflow-hidden group hover:bg-white/[0.03] transition-colors duration-500 justify-start">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                            <Hammer size={120} />
                        </div>
                        <div className="flex items-center gap-4 mb-8 relative z-10">
                            <div className="p-4 bg-gradient-to-br from-[#B750B2] to-[#80357e] rounded-2xl shadow-lg">
                                <Hammer className="text-white" size={32} />
                            </div>
                            <h3 className="text-[clamp(32px,3.5vw,48px)] font-bold text-white tracking-wide">SDK</h3>
                        </div>
                        <div className="flex flex-col gap-6 relative z-10">
                            <Bullet text="Migrate to Modern DI: Replace manual ServiceLocator with Hilt or Koin to resolve God Object issues and improve testability." color="bg-[#D2FF55]" />
                            <Bullet text="Initialization Safety: Remove Force Unwrap (!!) risks in core service initialization to prevent startup crashes." color="bg-[#D2FF55]" />
                            <Bullet text="Set up a Jira project for the BLE SDK to better track updates." color="bg-[#D2FF55]" />
                        </div>
                    </div>

                    {/* CS Dashboard Column */}
                    <div className="liquid-glass p-8 lg:p-12 rounded-3xl flex flex-col shadow-2xl border border-white/5 relative overflow-hidden group hover:bg-white/[0.03] transition-colors duration-500 justify-start">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                            <Code2 size={120} />
                        </div>
                        <div className="flex items-center gap-4 mb-8 relative z-10">
                            <div className="p-4 bg-gradient-to-br from-[#4A90E2] to-[#2C5F9E] rounded-2xl shadow-lg">
                                <Code2 className="text-white" size={32} />
                            </div>
                            <h3 className="text-[clamp(32px,3.5vw,48px)] font-bold text-white tracking-wide">CS Dashboard</h3>
                        </div>
                        <div className="flex flex-col gap-6 relative z-10">
                            <Bullet text="Enable TypeScript strict mode to catch issues early and reduce runtime errors" color="bg-[#D2FF55]" />
                            <Bullet text="Break down large/monolithic components and standardize the API client layer to improve maintainability and ease of refactoring." color="bg-[#D2FF55]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
