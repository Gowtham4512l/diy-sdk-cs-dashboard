import React from 'react';
import { VideoBackground } from '../components/VideoBackground';
import { Bullet as SharedBullet } from '../components/Bullet';
import { ThumbsUp, ThumbsDown, AlertTriangle } from 'lucide-react';

export const Retrospective: React.FC = () => {
    return (
        <div className="relative w-full h-full overflow-y-auto overflow-x-hidden p-6 md:p-[6%] custom-scrollbar scroll-smooth">
            <VideoBackground src="https://stream.mux.com/4IMYGcL01xjs7ek5ANO17JC4VQVUTsojZlnw4fXzwSxc.m3u8" />

            <div className="relative z-10 w-full max-w-[90rem] mx-auto flex flex-col min-h-full justify-center py-12 xl:py-0">
                <header className="mb-10 text-center flex-shrink-0">
                    <h1 className="premium-gradient-text text-[clamp(44px,6vw,84px)] font-extrabold tracking-[-0.04em] mb-3 drop-shadow-2xl">
                        The Good, The Bad, <span className="text-[#D2FF55]">The Ugly</span>
                    </h1>
                    <h2 className="text-[clamp(24px,3vw,42px)] font-semibold text-white/50 tracking-wide uppercase">
                        Retrospective on code & culture
                    </h2>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full mt-2 lg:mt-4">
                    {/* The Good */}
                    <div className="liquid-glass p-6 lg:p-10 rounded-3xl flex flex-col shadow-2xl border border-white/5 relative overflow-hidden group hover:bg-white/[0.03] transition-colors duration-500">
                        <div className="absolute top-0 right-0 p-6 opacity-[0.05] group-hover:opacity-[0.15] transition-opacity duration-500 pointer-events-none text-green-400">
                            <ThumbsUp size={100} />
                        </div>
                        <div className="flex items-center gap-4 mb-6 relative z-10">
                            <div className="p-3 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-xl shadow-lg border border-green-500/30">
                                <ThumbsUp className="text-green-400" size={28} />
                            </div>
                            <h3 className="text-[clamp(28px,3vw,42px)] font-bold tracking-wide">The Good</h3>
                        </div>

                        <div className="flex flex-col gap-6 relative z-10">
                            <div>
                                <h4 className="text-[clamp(24px,2.5vw,36px)] font-bold text-white/90 mb-4 border-b border-white/10 pb-2">SDK</h4>
                                <div className="flex flex-col gap-4">
                                    <SharedBullet text="BLE communication is more stable and reliable" color="bg-green-400" />
                                    <SharedBullet text="Auto-submit flow simplified the swap experience" color="bg-green-400" />
                                    <SharedBullet text="SDK is customisable and supports multiple development environments" color="bg-green-400" />
                                </div>
                            </div>
                            <div>
                                <h4 className="text-[clamp(24px,2.5vw,36px)] font-bold text-white/90 mb-4 border-b border-white/10 pb-2">CS Dashboard</h4>
                                <SharedBullet text="Real-time updates via WebSocket" color="bg-green-400" />
                            </div>
                        </div>
                    </div>

                    {/* The Bad */}
                    <div className="liquid-glass p-6 lg:p-10 rounded-3xl flex flex-col shadow-2xl border border-white/5 relative overflow-hidden group hover:bg-white/[0.03] transition-colors duration-500">
                        <div className="absolute top-0 right-0 p-6 opacity-[0.05] group-hover:opacity-[0.15] transition-opacity duration-500 pointer-events-none text-yellow-400">
                            <ThumbsDown size={100} />
                        </div>
                        <div className="flex items-center gap-4 mb-6 relative z-10">
                            <div className="p-3 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-xl shadow-lg border border-yellow-500/30">
                                <ThumbsDown className="text-yellow-400" size={28} />
                            </div>
                            <h3 className="text-[clamp(28px,3vw,42px)] font-bold tracking-wide">The Bad</h3>
                        </div>

                        <div className="flex flex-col gap-6 relative z-10">
                            <div>
                                <h4 className="text-[clamp(24px,2.5vw,36px)] font-bold text-white/90 mb-4 border-b border-white/10 pb-2">SDK</h4>
                                <SharedBullet text="Code is still tightly coupled and hard to reuse" color="bg-yellow-400" />
                            </div>
                            <div>
                                <h4 className="text-[clamp(24px,2.5vw,36px)] font-bold text-white/90 mb-4 border-b border-white/10 pb-2">CS Dashboard</h4>
                                <SharedBullet text="No strict TypeScript" color="bg-yellow-400" />
                            </div>
                        </div>
                    </div>

                    {/* The Ugly */}
                    <div className="liquid-glass p-6 lg:p-10 rounded-3xl flex flex-col shadow-2xl border border-white/5 relative overflow-hidden group hover:bg-white/[0.03] transition-colors duration-500">
                        <div className="absolute top-0 right-0 p-6 opacity-[0.05] group-hover:opacity-[0.15] transition-opacity duration-500 pointer-events-none text-red-400">
                            <AlertTriangle size={100} />
                        </div>
                        <div className="flex items-center gap-4 mb-6 relative z-10">
                            <div className="p-3 bg-gradient-to-br from-red-400/20 to-red-600/20 rounded-xl shadow-lg border border-red-500/30">
                                <AlertTriangle className="text-red-400" size={28} />
                            </div>
                            <h3 className="text-[clamp(28px,3vw,42px)] font-bold tracking-wide">The Ugly</h3>
                        </div>

                        <div className="flex flex-col gap-6 relative z-10">
                            <div>
                                <h4 className="text-[clamp(24px,2.5vw,36px)] font-bold text-white/90 mb-4 border-b border-white/10 pb-2">SDK</h4>
                                <SharedBullet text="Swap availability check was done in frontend with hardcoded SOC" color="bg-red-400" />
                            </div>
                            <div>
                                <h4 className="text-[clamp(24px,2.5vw,36px)] font-bold text-white/90 mb-4 border-b border-white/10 pb-2">CS Dashboard</h4>
                                <SharedBullet text="No error tracking/monitoring" color="bg-red-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

