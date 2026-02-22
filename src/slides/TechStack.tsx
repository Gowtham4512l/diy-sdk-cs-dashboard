import React from 'react';
import { VideoBackground } from '../components/VideoBackground';
import { Bullet as SharedBullet } from '../components/Bullet';
import { Smartphone, Monitor } from 'lucide-react';

export const TechStack: React.FC = () => {
    return (
        <div className="absolute inset-0 w-full h-full bg-black">
            <VideoBackground src="https://stream.mux.com/JNJEOYI6B3EffB9f5ZhpGbuxzc6gSyJcXaCBbCgZKRg.m3u8" />
            <div className="relative w-full h-full overflow-y-auto overflow-x-hidden p-6 md:p-[6%] custom-scrollbar text-left scroll-smooth z-10">
                <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col min-h-full justify-center py-12 md:py-0">
                    <header className="mb-14 text-center opacity-0 animate-slide-up stagger-1">
                        <h1 className="premium-gradient-text text-[clamp(44px,6vw,84px)] font-extrabold tracking-[-0.04em] mb-3 drop-shadow-2xl">
                            Under the <span className="text-[#D2FF55]">Hood</span>
                        </h1>
                        <h2 className="text-[clamp(24px,3vw,42px)] font-semibold text-white/50 tracking-wide uppercase">
                            Tech stack status & <span className="text-white/80">major refactors</span> needed
                        </h2>
                    </header>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full mt-4 items-stretch">
                        {/* SDK Column */}
                        <div className="liquid-glass p-8 lg:p-14 rounded-[32px] flex flex-col shadow-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500 justify-start opacity-0 animate-slide-up stagger-2">
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none text-[#B750B2]/50 group-hover:text-[#B750B2] group-hover:scale-110 transform">
                                <Smartphone size={180} />
                            </div>
                            <div className="flex items-center gap-6 mb-10 relative z-10">
                                <div className="p-4 bg-gradient-to-br from-[#B750B2] to-[#80357e] rounded-2xl shadow-lg ring-1 ring-white/20">
                                    <Smartphone className="text-white" size={36} />
                                </div>
                                <h3 className="text-[clamp(32px,3.5vw,48px)] font-bold text-white tracking-wide">SDK</h3>
                            </div>
                            <div className="flex flex-col gap-8 relative z-10">
                                <SharedBullet text="Language: Kotlin 2.1.0 (Stable), Swift 5." />
                                <SharedBullet text="BLE Engine: Native Android BLE APIs (Classic/Stock implementation)." />
                                <SharedBullet text="Networking: Retrofit 2.9.0 + OkHttp 4.9.1." />
                                <SharedBullet text="Event Handling: SharedFlow (kotlin), Combine (swift) for yumaResponse event stream" />
                                <SharedBullet text="Architecture: Singleton ServiceLocator (Manual DI)." />
                            </div>
                        </div>

                        {/* CS Dashboard Column */}
                        <div className="liquid-glass p-8 lg:p-14 rounded-[32px] flex flex-col shadow-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500 justify-start opacity-0 animate-slide-up stagger-3">
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none text-[#4A90E2]/50 group-hover:text-[#4A90E2] group-hover:scale-110 transform">
                                <Monitor size={180} />
                            </div>
                            <div className="flex items-center gap-6 mb-10 relative z-10">
                                <div className="p-4 bg-gradient-to-br from-[#4A90E2] to-[#2C5F9E] rounded-2xl shadow-lg ring-1 ring-white/20">
                                    <Monitor className="text-white" size={36} />
                                </div>
                                <h3 className="text-[clamp(32px,3.5vw,48px)] font-bold text-white tracking-wide">CS Dashboard</h3>
                            </div>
                            <div className="flex flex-col gap-8 relative z-10">
                                <SharedBullet text="React + TypeScript (modern, scalable frontend stack)" color="bg-[#4A90E2]" shadow="shadow-[0_0_12px_#4A90E2]" />
                                <SharedBullet text="Real-time communication using Socket.IO (critical for live ops visibility)" color="bg-[#4A90E2]" shadow="shadow-[0_0_12px_#4A90E2]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

