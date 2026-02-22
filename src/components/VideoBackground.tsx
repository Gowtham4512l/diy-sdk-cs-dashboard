import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

interface VideoBackgroundProps {
    src: string;
}

export const VideoBackground: React.FC<VideoBackgroundProps> = ({ src }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        let hls: Hls | null = null;

        if (Hls.isSupported()) {
            hls = new Hls({ enableWorker: true });
            hls.loadSource(src);
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED, () => {
                video.play().catch((e) => console.error('Video auto-play failed', e));
            });
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            // Fallback for Safari
            video.src = src;
            video.addEventListener('loadedmetadata', () => {
                video.play().catch((e) => console.error('Video auto-play failed', e));
            });
        }

        return () => {
            if (hls) {
                hls.destroy();
            }
        };
    }, [src]);

    return (
        <div className="sticky top-0 left-0 w-full h-0 z-[-20] pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-[100dvh] overflow-hidden bg-black">
                {/* The video itself morphed into a massive glowing, moving gradient */}
                <video
                    ref={videoRef}
                    className="absolute inset-0 w-full h-full object-cover saturate-[250%] contrast-125 opacity-90 mix-blend-screen scale-[1.15] blur-[80px]"
                    autoPlay
                    muted
                    loop
                    playsInline
                />
                {/* Very slight dark wash so it doesn't blind the user, but still lets colors glow huge */}
                <div className="absolute inset-0 bg-[#030305]/20 pointer-events-none"></div>
            </div>
        </div>
    );
};
