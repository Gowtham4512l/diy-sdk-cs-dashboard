import React from 'react';
import { VideoBackground } from '../components/VideoBackground';
import { Bullet as SharedBullet } from '../components/Bullet';
import { Map, Zap } from 'lucide-react';

export const PathForward: React.FC = () => {
    return (
        <div className="relative w-full h-full flex flex-col justify-center items-center p-[6%] overflow-hidden">
            <VideoBackground src="https://stream.mux.com/00qQnfNo7sSpn3pB1hYKkyeSDvxs01NxiQ3sr29uL3e028.m3u8" />

            <div className="relative z-10 w-full max-w-7xl flex flex-col h-full justify-center">
                <header className="mb-12 text-center">
                    <h1 className="premium-gradient-text text-[clamp(44px,6vw,84px)] font-extrabold tracking-[-0.04em] mb-3 drop-shadow-2xl">
                        The <span className="text-[#D2FF55]">Path</span> Forward
                    </h1>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full mt-4">
                    {/* SDK Column */}
                    <div className="liquid-glass p-8 lg:p-12 rounded-3xl flex flex-col shadow-2xl border border-white/5 relative overflow-hidden group hover:bg-white/[0.03] transition-colors duration-500 justify-center">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                            <Map size={120} />
                        </div>
                        <div className="flex items-center gap-4 mb-8 relative z-10">
                            <div className="p-4 bg-gradient-to-br from-[#B750B2] to-[#80357e] rounded-2xl shadow-lg">
                                <Map className="text-white" size={32} />
                            </div>
                            <h3 className="text-[clamp(32px,3.5vw,48px)] font-bold text-white tracking-wide">SDK</h3>
                        </div>
                        <div className="flex flex-col gap-6 relative z-10">
                            <SharedBullet text="Support multiple battery swaps across multiple YCUs" />
                            <SharedBullet text="Provide a complete UI through the SDK" />
                            <SharedBullet text="Make the codebase modular and easier to maintain" />
                            <SharedBullet text="Enable client apps to track and respond to door open and door close events, allowing clear, real-time user feedback in the UI." />
                        </div>
                    </div>

                    {/* CS Dashboard Column */}
                    <div className="liquid-glass p-8 lg:p-12 rounded-3xl flex flex-col shadow-2xl border border-white/5 relative overflow-hidden group hover:bg-white/[0.03] transition-colors duration-500 justify-center">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                            <Zap size={120} />
                        </div>
                        <div className="flex items-center gap-4 mb-8 relative z-10">
                            <div className="p-4 bg-gradient-to-br from-[#4A90E2] to-[#2C5F9E] rounded-2xl shadow-lg">
                                <Zap className="text-white" size={32} />
                            </div>
                            <h3 className="text-[clamp(32px,3.5vw,48px)] font-bold text-white tracking-wide">CS Dashboard</h3>
                        </div>
                        <div className="flex flex-col gap-6 relative z-10">
                            <SharedBullet text="Robust State Management and Testing to Improve System Stability and Release Confidence" />
                            <SharedBullet text="Performance and Scale Optimization - to support growing real-time operational usage." />
                            <SharedBullet text="Breaking Down Large Single Files into Smaller, Reusable Components" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

