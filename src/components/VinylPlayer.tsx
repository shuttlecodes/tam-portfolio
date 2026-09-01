interface VinylPlayerProps {
    selectedDiscImage: string;
    isPlaying: boolean;
    onTogglePlay: () => void;
    onPrevious: () => void;
    onNext: () => void;
}

import "./VinylPlayer.css";
import { BackIcon } from "../assets/icons/BackIcon";
import { PlayIcon } from "../assets/icons/PlayIcon";
import { NextIcon } from "../assets/icons/NextIcon";

export const VinylPlayer = ({ selectedDiscImage, isPlaying, onTogglePlay, onPrevious, onNext }: VinylPlayerProps) => {
    return (
        <div className="flex flex-col gap-6 items-center">
            {/* Turntable */}
            <div className="relative w-80 h-80 flex items-center justify-center">
                {/* Layer 1: Turntable background */}
                <img
                    src="/images/vinyl/turntable/turntable-bg.png"
                    alt="turntable"
                    className="absolute inset-2 w-[calc(100%-1rem)] h-[calc(100%-1rem)] object-cover rounded-lg"
                />

                {/* Layer 2: Selected vinyl disc - centered and spinning */}
                <div className={`absolute w-64 h-64 rounded-full overflow-hidden shadow-lg ${isPlaying ? "vinyl-disc-spinning" : ""}`}>
                    <img
                        src={selectedDiscImage}
                        alt="vinyl record"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Layer 3: Needle on top with tilt and subtle swing */}
                <img
                    src="/images/vinyl/turntable/needle.png"
                    alt="needle"
                    className="absolute w-8 h-auto object-contain z-10 needle-tilt"
                    style={{ top: "10%", left: "10%" }}
                />
            </div>

            {/* Control Buttons */}
            <div className="flex gap-8 items-center justify-center">
                <button
                    onClick={onPrevious}
                    className="p-2 rounded-full hover:bg-gray-200 transition-colors"
                    aria-label="Previous record"
                >
                    <BackIcon className="w-6 h-6 text-accent" />
                </button>

                <button
                    onClick={onTogglePlay}
                    className="p-3 rounded-full bg-accent hover:bg-accent/90 transition-colors"
                    aria-label={isPlaying ? "Pause" : "Play"}
                >
                    <PlayIcon className="w-6 h-6 text-white" />
                </button>

                <button
                    onClick={onNext}
                    className="p-2 rounded-full hover:bg-gray-200 transition-colors"
                    aria-label="Next record"
                >
                    <NextIcon className="w-6 h-6 text-accent" />
                </button>
            </div>
        </div>
    );
};
