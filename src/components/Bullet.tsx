import React from 'react';

interface BulletProps {
    text: React.ReactNode;
    color?: string;
    shadow?: string;
    size?: string;
    textSize?: string;
}

export const Bullet: React.FC<BulletProps> = ({
    text,
    color = 'bg-[#B750B2]',
    shadow = '',
    size = 'w-2.5 h-2.5 mt-2.5',
    textSize = 'text-[clamp(16px,1.5vw,28px)]'
}) => (
    <div className="flex items-start gap-4">
        <div className={`${size} rounded-full ${color} ${shadow} shrink-0`.trim()} />
        <p className={`${textSize} text-white/90 leading-relaxed`}>{text}</p>
    </div>
);
