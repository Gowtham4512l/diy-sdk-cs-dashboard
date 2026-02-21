import React from 'react';
import { VideoBackground } from '../components/VideoBackground';
import { Bullet as SharedBullet } from '../components/Bullet';

export const PdfSlide4_Retrospective: React.FC = () => {
    return (
        <div className="relative w-full h-full flex flex-col p-[4%]">
            <VideoBackground src="https://stream.mux.com/4IMYGcL01xjs7ek5ANO17JC4VQVUTsojZlnw4fXzwSxc.m3u8" />

            <div className="relative z-10 flex flex-col h-full">
                <header className="mb-[4%] text-center">
                    <h1 className="text-[clamp(32px,4vw,64px)] font-bold text-[#D2FF55] tracking-tight">
                        The Good, The Bad, The Ugly
                    </h1>
                    <h2 className="text-[clamp(20px,2vw,36px)] font-medium text-white/80 mt-2">
                        (Retrospective on code & culture)
                    </h2>
                </header>

                <div className="flex gap-[4%] px-[2%] flex-1 pb-[4%] items-stretch">
                    {/* The Good */}
                    <div className="flex-1 flex flex-col gap-6 liquid-glass p-8 rounded-2xl">
                        <h3 className="text-[clamp(24px,2.5vw,40px)] font-bold text-green-400 mb-2">The Good</h3>

                        <div>
                            <h4 className="text-[clamp(20px,2vw,32px)] font-semibold text-white mb-4">SDK:</h4>
                            <div className="flex flex-col gap-4">
                                <Bullet text="BLE communication is more stable and reliable" />
                                <Bullet text="Auto-submit flow simplified the swap experience" />
                                <Bullet text="SDK is customisable and supports multiple development environments" />
                            </div>
                        </div>

                        <div className="mt-8">
                            <h4 className="text-[clamp(20px,2vw,32px)] font-semibold text-white mb-4">CS Dashboard:</h4>
                            <Bullet text="Real-time updates via WebSocket" />
                        </div>
                    </div>

                    {/* The Bad */}
                    <div className="flex-1 flex flex-col gap-6 liquid-glass p-8 rounded-2xl">
                        <h3 className="text-[clamp(24px,2.5vw,40px)] font-bold text-yellow-400 mb-2">The Bad</h3>

                        <div>
                            <h4 className="text-[clamp(20px,2vw,32px)] font-semibold text-white mb-4">SDK:</h4>
                            <Bullet text="Code is still tightly coupled and hard to reuse" />
                        </div>

                        <div className="mt-8">
                            <h4 className="text-[clamp(20px,2vw,32px)] font-semibold text-white mb-4">CS Dashboard:</h4>
                            <Bullet text="No strict TypeScript" />
                        </div>
                    </div>

                    {/* The Ugly */}
                    <div className="flex-1 flex flex-col gap-6 liquid-glass p-8 rounded-2xl">
                        <h3 className="text-[clamp(24px,2.5vw,40px)] font-bold text-red-400 mb-2">The Ugly</h3>

                        <div>
                            <h4 className="text-[clamp(20px,2vw,32px)] font-semibold text-white mb-4">SDK:</h4>
                            <Bullet text="Swap availability check was done in frontend with hardcoded SOC" />
                        </div>

                        <div className="mt-8">
                            <h4 className="text-[clamp(20px,2vw,32px)] font-semibold text-white mb-4">CS Dashboard:</h4>
                            <Bullet text="No error tracking/monitoring" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Bullet: React.FC<{ text: string }> = ({ text }) => (
    <SharedBullet text={text} color="bg-white" size="w-2 h-2 mt-2" textSize="text-[clamp(14px,1.2vw,22px)]" />
);
