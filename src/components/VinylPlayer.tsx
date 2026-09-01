interface VinylPlayerProps {
    selectedDiscImage: string;
}

import "./VinylPlayer.css";

export const VinylPlayer = ({ selectedDiscImage }: VinylPlayerProps) => {
    return (
        <div className="relative w-80 h-80 flex items-center justify-center">
            {/* Layer 1: Turntable background */}
            <img
                src="/images/vinyl/turntable/turntable-bg.png"
                alt="turntable"
                className="absolute inset-2 w-[calc(100%-1rem)] h-[calc(100%-1rem)] object-cover rounded-lg"
            />

            {/* Layer 2: Selected vinyl disc - centered and spinning */}
            <div className="absolute w-64 h-64 rounded-full overflow-hidden shadow-lg vinyl-disc-spinning">
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
    );
};
