import React from 'react';
import { VideoBackground } from '../components/VideoBackground';
import { Bullet } from '../components/Bullet';

export const PdfSlide2_SDKHighlights: React.FC = () => {
    return (
        <div className="relative w-full h-full flex flex-col p-[4%]">
            <VideoBackground src="https://stream.mux.com/Kec29dVyJgiPdtWaQtPuEiiGHkJIYQAVUJcNiIHUYeo.m3u8" />

            <div className="relative z-10 flex flex-col h-full">
                <header className="mb-[4%] text-center">
                    <h1 className="text-[clamp(32px,4vw,64px)] font-bold text-[#D2FF55] tracking-tight">
                        2025 Highlights (What did we ship?)
                    </h1>
                    <h2 className="text-[clamp(24px,3vw,48px)] font-semibold text-white mt-2">SDK</h2>
                </header>

                <div className="flex flex-col md:flex-row gap-[5%] px-[5%]">
                    <div className="flex-1 flex flex-col gap-8 liquid-glass p-8 rounded-2xl">
                        <Bullet text="Built and released the BLE SDK for both Android and iOS, which enables client apps to interact with Gen 3.0 YCUs." />
                        <Bullet text="Integrated the SDK into Ops, OEM, and Yuma Partner apps." />
                        <Bullet text="Added Jitsu Analytics to track swap sessions in real time, helping with monitoring and issue debugging." />
                    </div>

                    <div className="flex-1 flex flex-col gap-8 liquid-glass p-8 rounded-2xl">
                        <Bullet text="Developed OEM Manual Swap, where users scan the charged battery they received, ensuring the database is updated and the swap token is completed correctly." />
                        <Bullet text="Consolidated the SDK's network architecture from 4 fragmented API clients into a unified system with dedicated OEM separation, improving performance and making it easier to add new API calls." />
                    </div>
                </div>
            </div>
        </div>
    );
};

