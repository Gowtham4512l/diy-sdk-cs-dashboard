import React from 'react';
import { VideoBackground } from '../components/VideoBackground';
import { Bullet as SharedBullet } from '../components/Bullet';
import { Smartphone, Monitor } from 'lucide-react';

export const TechStack: React.FC = () => {
    return (
        <div className="relative w-full h-full flex flex-col justify-center items-center p-[6%] overflow-hidden">
            <VideoBackground src="https://stream.mux.com/JNJEOYI6B3EffB9f5ZhpGbuxzc6gSyJcXaCBbCgZKRg.m3u8" />

            <div className="relative z-10 w-full max-w-7xl flex flex-col h-full justify-center">
                <header className="mb-12 text-center">
                    <h1 className="text-[clamp(40px,5vw,72px)] font-bold text-white tracking-tight mb-2 drop-shadow-lg">
                        Under the <span className="text-[#D2FF55]">Hood</span>
                    </h1>
                    <h2 className="text-[clamp(18px,2vw,32px)] font-medium text-white/70">
                        Tech stack status & major refactors needed
                    </h2>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full mt-4">
                    {/* SDK Column */}
                    <div className="liquid-glass p-8 lg:p-12 rounded-3xl flex flex-col shadow-2xl border border-white/5 relative overflow-hidden group hover:bg-white/[0.03] transition-colors duration-500">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                            <Smartphone size={120} />
                        </div>
                        <div className="flex items-center gap-4 mb-8 relative z-10">
                            <div className="p-4 bg-gradient-to-br from-[#B750B2] to-[#80357e] rounded-2xl shadow-lg">
                                <Smartphone className="text-white" size={32} />
                            </div>
                            <h3 className="text-[clamp(28px,3vw,42px)] font-bold text-white tracking-wide">SDK</h3>
                        </div>
                        <div className="flex flex-col gap-5 relative z-10">
                            <Bullet text="Language: Kotlin 2.1.0 (Stable), Swift 5." />
                            <Bullet text="BLE Engine: Native Android BLE APIs (Classic/Stock implementation)." />
                            <Bullet text="Networking: Retrofit 2.9.0 + OkHttp 4.9.1." />
                            <Bullet text="Event Handling: SharedFlow (kotlin), Combine (swift) for yumaResponse event stream" />
                            <Bullet text="Architecture: Singleton ServiceLocator (Manual DI)." />
                        </div>
                    </div>

                    {/* CS Dashboard Column */}
                    <div className="liquid-glass p-8 lg:p-12 rounded-3xl flex flex-col shadow-2xl border border-white/5 relative overflow-hidden group hover:bg-white/[0.03] transition-colors duration-500">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                            <Monitor size={120} />
                        </div>
                        <div className="flex items-center gap-4 mb-8 relative z-10">
                            <div className="p-4 bg-gradient-to-br from-[#4A90E2] to-[#2C5F9E] rounded-2xl shadow-lg">
                                <Monitor className="text-white" size={32} />
                            </div>
                            <h3 className="text-[clamp(28px,3vw,42px)] font-bold text-white tracking-wide">CS Dashboard</h3>
                        </div>
                        <div className="flex flex-col gap-5 relative z-10">
                            <Bullet text="React + TypeScript (modern, scalable frontend stack)" />
                            <Bullet text="Real-time communication using Socket.IO (critical for live ops visibility)" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Bullet: React.FC<{ text: string }> = ({ text }) => (
    <SharedBullet text={text} color="bg-[#D2FF55]" size="w-2.5 h-2.5 mt-2.5" textSize="text-[clamp(15px,1.5vw,22px)] text-white/90 leading-snug" />
);
