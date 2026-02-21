import React from 'react';
import { VideoBackground } from '../components/VideoBackground';
import { Bullet } from '../components/Bullet';
import { Cog, Network } from 'lucide-react';

export const Process: React.FC = () => {
    return (
        <div className="relative w-full h-full flex flex-col justify-center items-center p-[6%] overflow-hidden">
            <VideoBackground src="https://stream.mux.com/00qQnfNo7sSpn3pB1hYKkyeSDvxs01NxiQ3sr29uL3e028.m3u8" />

            <div className="relative z-10 w-full max-w-7xl flex flex-col h-full justify-center">
                <header className="mb-12 text-center">
                    <h1 className="text-[clamp(40px,5vw,72px)] font-bold text-white tracking-tight mb-2 drop-shadow-lg">
                        Process <span className="text-[#D2FF55]">Check</span>
                    </h1>
                    <h2 className="text-[clamp(18px,2vw,32px)] font-medium text-white/70">
                        Where are we slowing down? How do we fix it?
                    </h2>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full mt-4">
                    {/* SDK Column */}
                    <div className="liquid-glass p-8 lg:p-12 rounded-3xl flex flex-col shadow-2xl border border-white/5 relative overflow-hidden group hover:bg-white/[0.03] transition-colors duration-500 justify-center">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                            <Network size={120} />
                        </div>
                        <div className="flex items-center gap-4 mb-8 relative z-10">
                            <div className="p-4 bg-gradient-to-br from-[#B750B2] to-[#80357e] rounded-2xl shadow-lg">
                                <Network className="text-white" size={32} />
                            </div>
                            <h3 className="text-[clamp(28px,3vw,42px)] font-bold text-white tracking-wide">SDK</h3>
                        </div>
                        <div className="flex flex-col gap-6 relative z-10">
                            <Bullet text="When testing or integrating, failures were hard to debug because real-time logs were not visible in Metabase" color="bg-[#D2FF55]" size="w-2.5 h-2.5 mt-2.5" textSize="text-[clamp(16px,1.6vw,24px)] leading-relaxed" />
                            <Bullet text="Understanding how users use new features was dependent on client apps releasing the latest SDK, which takes longer than expected" color="bg-[#D2FF55]" size="w-2.5 h-2.5 mt-2.5" textSize="text-[clamp(16px,1.6vw,24px)] leading-relaxed" />
                        </div>
                    </div>

                    {/* CS Dashboard Column */}
                    <div className="liquid-glass p-8 lg:p-12 rounded-3xl flex flex-col shadow-2xl border border-white/5 relative overflow-hidden group hover:bg-white/[0.03] transition-colors duration-500 justify-center">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                            <Cog size={120} />
                        </div>
                        <div className="flex items-center gap-4 mb-8 relative z-10">
                            <div className="p-4 bg-gradient-to-br from-[#4A90E2] to-[#2C5F9E] rounded-2xl shadow-lg">
                                <Cog className="text-white" size={32} />
                            </div>
                            <h3 className="text-[clamp(28px,3vw,42px)] font-bold text-white tracking-wide">CS Dashboard</h3>
                        </div>
                        <div className="flex flex-col gap-6 relative z-10">
                            <Bullet text="Need automation in testing" color="bg-[#D2FF55]" size="w-2.5 h-2.5 mt-2.5" textSize="text-[clamp(16px,1.6vw,24px)] leading-relaxed" />
                            <div>
                                <Bullet text="No pre-commit hooks, bad code gets committed." color="bg-[#D2FF55]" size="w-2.5 h-2.5 mt-2.5" textSize="text-[clamp(16px,1.6vw,24px)] leading-relaxed" />
                                <p className="text-[#D2FF55] text-[clamp(15px,1.4vw,22px)] font-medium mt-3 ml-7 bg-white/5 p-3 rounded-lg border border-white/10 inline-block">
                                    <span className="font-bold text-white">Fix:</span> install husky and lint staged and setup pre commit
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
