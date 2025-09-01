"use client";

import { useState, useRef, useEffect } from "react";
import { PlayIcon, PauseIcon } from "@/assets/icons";
import { cn } from "@/lib/utils";

interface VideoPlayerProps {
    src: string;
    poster?: string;
    className?: string;
}

export default function VideoPlayer({ src, poster, className = "" }: VideoPlayerProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleVideoEnd = () => {
        setIsPlaying(false);
    };

    if (!isMounted) return null;

    return (
        <div
            className={cn("relative rounded-[48px] overflow-hidden cursor-pointer group", className)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={togglePlay}
        >
            <video
                ref={videoRef}
                className="w-full h-full object-cover"
                poster={poster}
                onEnded={handleVideoEnd}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Play/Pause Button Overlay */}
            <div
                className={`absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-300 ${
                    !isPlaying || isHovered ? "opacity-100" : "opacity-0"
                }`}
            >
                <div
                    className="bg-white/10 border border-white/50 rounded-full p-4 transition-[scale] duration-200 hover:scale-110"
                    style={{
                        boxShadow: "0px 4px 12px 0px #FFFFFF40 inset",
                        backdropFilter: "blur(16px)",
                    }}
                >
                    {isPlaying ? <PauseIcon className="w-8 h-8" /> : <PlayIcon className="w-8 h-8" />}
                </div>
            </div>
        </div>
    );
}
