import React from 'react';
import { VideoBackground } from '../components/VideoBackground';
import { Bullet } from '../components/Bullet';

export const Process: React.FC = () => {
    return (
        <div className="relative w-full h-full flex flex-col p-[4%]">
            <VideoBackground src="https://stream.mux.com/00qQnfNo7sSpn3pB1hYKkyeSDvxs01NxiQ3sr29uL3e028.m3u8" />

            <div className="relative z-10 flex flex-col h-full">
                <header className="mb-[6%] text-center">
                    <h1 className="text-[clamp(32px,4vw,64px)] font-bold text-[#D2FF55] tracking-tight">
                        Process Check
                    </h1>
                    <h2 className="text-[clamp(20px,2vw,36px)] font-medium text-white/80 mt-2">
                        (Where are we slowing down? How do we fix it?)
                    </h2>
                </header>

                <div className="flex flex-col md:flex-row gap-[5%] px-[5%] flex-1 pb-[4%]">
                    {/* SDK Column */}
                    <div className="flex-1 flex flex-col gap-8 liquid-glass p-10 rounded-2xl justify-center">
                        <h3 className="text-[clamp(28px,3vw,48px)] font-bold text-white mb-2">SDK</h3>
                        <div className="flex flex-col gap-8">
                            <Bullet text="When testing or integrating, failures were hard to debug because real-time logs were not visible in Metabase" />
                            <Bullet text="Understanding how users use new features was dependent on client apps releasing the latest SDK, which takes longer than expected" />
                        </div>
                    </div>

                    {/* CS Dashboard Column */}
                    <div className="flex-1 flex flex-col gap-8 liquid-glass p-10 rounded-2xl justify-center">
                        <h3 className="text-[clamp(28px,3vw,48px)] font-bold text-white mb-2">CS DashBoard</h3>
                        <div className="flex flex-col gap-8">
                            <Bullet text="Need automation in testing" />
                            <div>
                                <Bullet text="No pre-commit hooks, bad code gets committed." />
                                <p className="text-[#D2FF55] text-[clamp(16px,1.5vw,28px)] font-medium mt-2 ml-6">
                                    Fix: install husky and lint staged and setup pre commit
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
