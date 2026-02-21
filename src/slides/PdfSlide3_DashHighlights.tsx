import React from 'react';
import { VideoBackground } from '../components/VideoBackground';
import { Bullet } from '../components/Bullet';

export const PdfSlide3_DashHighlights: React.FC = () => {
    return (
        <div className="relative w-full h-full flex flex-col p-[4%]">
            <VideoBackground src="https://stream.mux.com/fHfa8VIbBdqZelLGg5thjsypZ101M01dbyIMLNDWQwlLA.m3u8" />

            <div className="relative z-10 flex flex-col h-full">
                <header className="mb-[4%] text-center">
                    <h1 className="text-[clamp(32px,4vw,64px)] font-bold text-[#D2FF55] tracking-tight">
                        2025 Highlights (What did we ship?)
                    </h1>
                    <h2 className="text-[clamp(24px,3vw,48px)] font-semibold text-white mt-2">
                        CS DASHBOARD - Alohomora
                    </h2>
                </header>

                <div className="flex flex-col md:flex-row gap-[5%] px-[5%] justify-center items-stretch flex-1 pb-[4%]">
                    <div className="flex-1 flex flex-col gap-8 liquid-glass p-8 rounded-2xl justify-center">
                        <Bullet text="Real-time Dashboard with State of Charge (SoC)" />
                        <Bullet text="Cloud Connect Integration for Customer Support." />
                        <Bullet text="Remote Control System for Door Access and Other Operations" />
                    </div>

                    <div className="flex-1 flex flex-col gap-8 liquid-glass p-8 rounded-2xl justify-center">
                        <Bullet text="Battery Type Count Monitoring" />
                        <Bullet text="Live Location Tracking for Different User Roles" />
                        <Bullet text="One-click Actions: Reset, Enable, Disable, Mark Faulty" />
                        <Bullet text="Easy call back for Missed calls" />
                    </div>
                </div>
            </div>
        </div>
    );
};
