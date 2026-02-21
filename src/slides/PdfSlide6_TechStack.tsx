import React from 'react';
import { VideoBackground } from '../components/VideoBackground';
import { Bullet as SharedBullet } from '../components/Bullet';

export const PdfSlide6_TechStack: React.FC = () => {
    return (
        <div className="relative w-full h-full flex flex-col p-[4%]">
            <VideoBackground src="https://stream.mux.com/JNJEOYI6B3EffB9f5ZhpGbuxzc6gSyJcXaCBbCgZKRg.m3u8" />

            <div className="relative z-10 flex flex-col h-full">
                <header className="mb-[6%] text-center">
                    <h1 className="text-[clamp(32px,3.8vw,60px)] font-bold text-[#D2FF55] tracking-tight">
                        Under the Hood
                    </h1>
                    <h2 className="text-[clamp(20px,2vw,36px)] font-medium text-white/80 mt-2">
                        (Tech stack status, major refactors needed)
                    </h2>
                </header>

                <h3 className="text-[clamp(28px,3vw,48px)] font-bold text-white mb-6 px-[5%]">Tech Stack Status</h3>

                <div className="flex flex-col md:flex-row gap-[5%] px-[5%] flex-1 pb-[4%]">
                    {/* SDK Column */}
                    <div className="flex-1 flex flex-col gap-6 liquid-glass p-10 rounded-2xl">
                        <h4 className="text-[clamp(24px,2.5vw,40px)] font-bold text-[#B750B2] mb-2">SDK:</h4>
                        <div className="flex flex-col gap-6">
                            <Bullet text="Language: Kotlin 2.1.0 (Stable), Swift 5." />
                            <Bullet text="BLE Engine: Native Android BLE APIs (Classic/Stock implementation)." />
                            <Bullet text="Networking: Retrofit 2.9.0 + OkHttp 4.9.1." />
                            <Bullet text="Event Handling: SharedFlow (kotlin), Combine (swift) for yumaResponse event stream" />
                            <Bullet text="Architecture: Singleton ServiceLocator (Manual DI)." />
                        </div>
                    </div>

                    {/* CS Dashboard Column */}
                    <div className="flex-1 flex flex-col gap-6 liquid-glass p-10 rounded-2xl">
                        <h4 className="text-[clamp(24px,2.5vw,40px)] font-bold text-[#B750B2] mb-2">CS Dashboard:</h4>
                        <div className="flex flex-col gap-6">
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
    <SharedBullet text={text} color="bg-white" size="w-2.5 h-2.5 mt-2.5" textSize="text-[clamp(15px,1.4vw,26px)]" />
);
