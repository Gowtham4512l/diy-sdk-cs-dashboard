import React from 'react';
import { VideoBackground } from '../components/VideoBackground';

export const Cover: React.FC = () => {
    return (
        <div className="relative w-full h-full flex flex-col justify-center items-center p-[4%] text-center">
            <VideoBackground src="https://stream.mux.com/JNJEOYI6B3EffB9f5ZhpGbuxzc6gSyJcXaCBbCgZKRg.m3u8" />

            <div className="relative z-10 flex flex-col items-center justify-center liquid-glass rounded-3xl p-12 max-w-[80vw]">
                <h1 className="text-[clamp(40px,6vw,96px)] font-bold tracking-tight text-white mb-4">
                    DIY SDK & CS Dashboard
                </h1>
                <h2 className="text-[clamp(24px,3vw,48px)] text-[#D2FF55] font-semibold mb-12">
                    2025 Highlights & 2026 Roadmap
                </h2>

                <div className="text-[clamp(18px,2vw,32px)] font-medium text-white/90 mb-6">
                    Thanks to
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-2 text-[clamp(14px,1.5vw,22px)] text-white/80 leading-[1.6] text-center">
                    <div>Gani</div>
                    <div>Rahul Karthik Naligala</div>
                    <div>Hari Prasadh</div>
                    <div>Prasath</div>
                    <div>Revanth Venkata</div>
                    <div>Suram Vishnu Vardhan Reddy</div>
                    <div>Anbarasan Felix</div>
                    <div>Bhanu Prakash</div>
                    <div>Kavya</div>
                    <div>Maroof Ansari</div>
                    <div>Nithish</div>
                    <div>Rohith Perala</div>
                    <div className="sm:col-span-3 font-semibold text-white/90 mt-2">Gowtham Reddy</div>
                </div>
            </div>
        </div>
    );
};
