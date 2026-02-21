import React from 'react';
import { VideoBackground } from '../components/VideoBackground';
import { Bullet as SharedBullet } from '../components/Bullet';
import { ThumbsUp, ThumbsDown, AlertTriangle } from 'lucide-react';

export const Retrospective: React.FC = () => {
    return (
        <div className="relative w-full h-full flex flex-col justify-center items-center p-[6%] overflow-hidden">
            <VideoBackground src="https://stream.mux.com/4IMYGcL01xjs7ek5ANO17JC4VQVUTsojZlnw4fXzwSxc.m3u8" />

            <div className="relative z-10 w-full max-w-[90rem] flex flex-col h-full justify-center">
                <header className="mb-10 text-center flex-shrink-0">
                    <h1 className="text-[clamp(40px,5vw,72px)] font-bold text-white tracking-tight mb-2 drop-shadow-lg">
                        The Good, The Bad, <span className="text-[#D2FF55]">The Ugly</span>
                    </h1>
                    <h2 className="text-[clamp(20px,2vw,32px)] font-medium text-white/70">
                        Retrospective on code & culture
                    </h2>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full mt-2 lg:mt-4 min-h-0">
                    {/* The Good */}
                    <div className="liquid-glass p-6 lg:p-10 rounded-3xl flex flex-col shadow-2xl border border-white/5 relative overflow-hidden group hover:bg-white/[0.03] transition-colors duration-500">
                        <div className="absolute top-0 right-0 p-6 opacity-[0.05] group-hover:opacity-[0.15] transition-opacity duration-500 pointer-events-none text-green-400">
                            <ThumbsUp size={100} />
                        </div>
                        <div className="flex items-center gap-4 mb-6 relative z-10">
                            <div className="p-3 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-xl shadow-lg border border-green-500/30">
                                <ThumbsUp className="text-green-400" size={28} />
                            </div>
                            <h3 className="text-[clamp(24px,2.5vw,36px)] font-bold text-green-400 tracking-wide">The Good</h3>
                        </div>

                        <div className="flex flex-col gap-6 relative z-10 overflow-y-auto pr-2 custom-scrollbar">
                            <div>
                                <h4 className="text-[clamp(18px,1.8vw,26px)] font-bold text-white/90 mb-3 border-b border-white/10 pb-2">SDK</h4>
                                <div className="flex flex-col gap-4">
                                    <Bullet text="BLE communication is more stable and reliable" color="bg-green-400" />
                                    <Bullet text="Auto-submit flow simplified the swap experience" color="bg-green-400" />
                                    <Bullet text="SDK is customisable and supports multiple development environments" color="bg-green-400" />
                                </div>
                            </div>
                            <div>
                                <h4 className="text-[clamp(18px,1.8vw,26px)] font-bold text-white/90 mb-3 border-b border-white/10 pb-2">CS Dashboard</h4>
                                <Bullet text="Real-time updates via WebSocket" color="bg-green-400" />
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
                            <h3 className="text-[clamp(24px,2.5vw,36px)] font-bold text-yellow-400 tracking-wide">The Bad</h3>
                        </div>

                        <div className="flex flex-col gap-6 relative z-10 overflow-y-auto pr-2 custom-scrollbar">
                            <div>
                                <h4 className="text-[clamp(18px,1.8vw,26px)] font-bold text-white/90 mb-3 border-b border-white/10 pb-2">SDK</h4>
                                <Bullet text="Code is still tightly coupled and hard to reuse" color="bg-yellow-400" />
                            </div>
                            <div>
                                <h4 className="text-[clamp(18px,1.8vw,26px)] font-bold text-white/90 mb-3 border-b border-white/10 pb-2">CS Dashboard</h4>
                                <Bullet text="No strict TypeScript" color="bg-yellow-400" />
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
                            <h3 className="text-[clamp(24px,2.5vw,36px)] font-bold text-red-400 tracking-wide">The Ugly</h3>
                        </div>

                        <div className="flex flex-col gap-6 relative z-10 overflow-y-auto pr-2 custom-scrollbar">
                            <div>
                                <h4 className="text-[clamp(18px,1.8vw,26px)] font-bold text-white/90 mb-3 border-b border-white/10 pb-2">SDK</h4>
                                <Bullet text="Swap availability check was done in frontend with hardcoded SOC" color="bg-red-400" />
                            </div>
                            <div>
                                <h4 className="text-[clamp(18px,1.8vw,26px)] font-bold text-white/90 mb-3 border-b border-white/10 pb-2">CS Dashboard</h4>
                                <Bullet text="No error tracking/monitoring" color="bg-red-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Bullet: React.FC<{ text: string; color: string }> = ({ text, color }) => (
    <SharedBullet text={text} color={color} size="w-2.5 h-2.5 mt-2" textSize="text-[clamp(14px,1.3vw,20px)] text-white/80 leading-snug" />
);
