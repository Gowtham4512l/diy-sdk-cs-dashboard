import React from 'react';
import { VideoBackground } from '../components/VideoBackground';
import { Bullet } from '../components/Bullet';

export const Refactors: React.FC = () => {
    return (
        <div className="relative w-full h-full flex flex-col p-[4%]">
            <VideoBackground src="https://stream.mux.com/Kec29dVyJgiPdtWaQtPuEiiGHkJIYQAVUJcNiIHUYeo.m3u8" />

            <div className="relative z-10 flex flex-col h-full">
                <header className="mb-[6%] text-center">
                    <h1 className="text-[clamp(32px,3.8vw,60px)] font-bold text-[#D2FF55] tracking-tight">
                        Major Refactors Needed
                    </h1>
                </header>

                <div className="flex flex-col md:flex-row gap-[5%] px-[5%] flex-1 pb-[4%]">
                    {/* SDK Column */}
                    <div className="flex-1 flex flex-col gap-8 liquid-glass p-10 rounded-2xl">
                        <h4 className="text-[clamp(24px,2.5vw,40px)] font-bold text-white mb-2">SDK:</h4>
                        <div className="flex flex-col gap-8">
                            <Bullet text="Migrate to Modern DI: Replace manual ServiceLocator with Hilt or Koin to resolve God Object issues and improve testability." />
                            <Bullet text="Initialization Safety: Remove Force Unwrap (!!) risks in core service initialization to prevent startup crashes." />
                            <Bullet text="Set up a Jira project for the BLE SDK to better track updates." />
                        </div>
                    </div>

                    {/* CS Dashboard Column */}
                    <div className="flex-1 flex flex-col gap-8 liquid-glass p-10 rounded-2xl">
                        <h4 className="text-[clamp(24px,2.5vw,40px)] font-bold text-white mb-2">CS Dashboard:</h4>
                        <div className="flex flex-col gap-8">
                            <Bullet text="Enable TypeScript strict mode to catch issues early and reduce runtime errors" />
                            <Bullet text="Break down large/monolithic components and standardize the API client layer to improve maintainability and ease of refactoring." />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
