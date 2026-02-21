import React from 'react';
import { VideoBackground } from '../components/VideoBackground';
import { Bullet } from '../components/Bullet';
import { Rocket, Zap } from 'lucide-react';

export const SDKHighlights: React.FC = () => {
    return (
        <div className="relative w-full h-full flex flex-col justify-center items-center p-[6%] overflow-hidden">
            <VideoBackground src="https://stream.mux.com/Kec29dVyJgiPdtWaQtPuEiiGHkJIYQAVUJcNiIHUYeo.m3u8" />

            <div className="relative z-10 w-full max-w-7xl flex flex-col h-full justify-center">
                <header className="mb-12 text-center">
                    <h1 className="text-[clamp(40px,5vw,72px)] font-bold text-white tracking-tight mb-2 drop-shadow-lg">
                        2025 <span className="text-[#D2FF55]">Highlights</span>
                    </h1>
                    <h2 className="text-[clamp(24px,3vw,42px)] font-medium text-white/70">
                        What did we ship? (SDK)
                    </h2>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full mt-4">
                    <div className="liquid-glass p-8 lg:p-12 rounded-3xl flex flex-col shadow-2xl border border-white/5 relative overflow-hidden group hover:bg-white/[0.03] transition-colors duration-500">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                            <Rocket size={120} />
                        </div>
                        <div className="flex flex-col gap-6 relative z-10">
                            <Bullet text="Built and released the BLE SDK for both Android and iOS, which enables client apps to interact with Gen 3.0 YCUs." color="bg-[#D2FF55]" size="w-2.5 h-2.5 mt-2.5" textSize="text-[clamp(16px,1.6vw,24px)] leading-relaxed" />
                            <Bullet text="Integrated the SDK into Ops, OEM, and Yuma Partner apps." color="bg-[#D2FF55]" size="w-2.5 h-2.5 mt-2.5" textSize="text-[clamp(16px,1.6vw,24px)] leading-relaxed" />
                            <Bullet text="Added Jitsu Analytics to track swap sessions in real time, helping with monitoring and issue debugging." color="bg-[#D2FF55]" size="w-2.5 h-2.5 mt-2.5" textSize="text-[clamp(16px,1.6vw,24px)] leading-relaxed" />
                        </div>
                    </div>

                    <div className="liquid-glass p-8 lg:p-12 rounded-3xl flex flex-col shadow-2xl border border-white/5 relative overflow-hidden group hover:bg-white/[0.03] transition-colors duration-500">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                            <Zap size={120} />
                        </div>
                        <div className="flex flex-col gap-6 relative z-10">
                            <Bullet text="Developed OEM Manual Swap, where users scan the charged battery they received, ensuring the database is updated and the swap token is completed correctly." color="bg-[#D2FF55]" size="w-2.5 h-2.5 mt-2.5" textSize="text-[clamp(16px,1.6vw,24px)] leading-relaxed" />
                            <Bullet text="Consolidated the SDK's network architecture from 4 fragmented API clients into a unified system with dedicated OEM separation, improving performance and making it easier to add new API calls." color="bg-[#D2FF55]" size="w-2.5 h-2.5 mt-2.5" textSize="text-[clamp(16px,1.6vw,24px)] leading-relaxed" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
