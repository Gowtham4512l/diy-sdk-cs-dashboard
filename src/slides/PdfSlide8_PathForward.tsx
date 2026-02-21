import React from 'react';
import { VideoBackground } from '../components/VideoBackground';
import { Bullet as SharedBullet } from '../components/Bullet';

export const PdfSlide8_PathForward: React.FC = () => {
    return (
        <div className="relative w-full h-full flex flex-col p-[4%]">
            <VideoBackground src="https://stream.mux.com/00qQnfNo7sSpn3pB1hYKkyeSDvxs01NxiQ3sr29uL3e028.m3u8" />

            <div className="relative z-10 flex flex-col h-full">
                <header className="mb-[6%]">
                    <h1 className="text-[clamp(32px,3.8vw,60px)] font-bold text-[#D2FF55] tracking-tight">
                        The Path Forward
                    </h1>
                </header>

                <div className="flex flex-col md:flex-row gap-[5%] px-[5%] flex-1 pb-[4%]">
                    {/* SDK Column */}
                    <div className="flex-1 flex flex-col gap-8 liquid-glass p-10 rounded-2xl">
                        <h4 className="text-[clamp(24px,2.5vw,40px)] font-bold text-white mb-2">SDK:</h4>
                        <div className="flex flex-col gap-8">
                            <Bullet text="Support multiple battery swaps across multiple YCUs" />
                            <Bullet text="Provide a complete UI through the SDK" />
                            <Bullet text="Make the codebase modular and easier to maintain" />
                            <Bullet text="Enable client apps to track and respond to door open and door close events, allowing clear, real-time user feedback in the UI." />
                        </div>
                    </div>

                    {/* CS Dashboard Column */}
                    <div className="flex-1 flex flex-col gap-8 liquid-glass p-10 rounded-2xl">
                        <h4 className="text-[clamp(24px,2.5vw,40px)] font-bold text-white mb-2">CS Dashboard:</h4>
                        <div className="flex flex-col gap-8">
                            <Bullet text="Robust State Management and Testing to Improve System Stability and Release Confidence" />
                            <Bullet text="Performance and Scale Optimization - to support growing real-time operational usage." />
                            <Bullet text="Breaking Down Large Single Files into Smaller, Reusable Components" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Bullet: React.FC<{ text: string }> = ({ text }) => (
    <SharedBullet text={text} color="bg-white" size="w-2.5 h-2.5 mt-2.5" textSize="text-[clamp(16px,1.5vw,28px)]" />
);
