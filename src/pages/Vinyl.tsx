"use client";

import { useState } from "react";
import ScrollFadeIn from "../components/ScrollFadeIn";
import { VinylPlayer } from "../components/VinylPlayer";

const TITLE = "Track record"
const SUBTITLE = "Learn about my different work experiences by clicking through the records."

const VINYL_RECORDS = [
    { id: "genius-ai", cover: "/images/vinyl/covers/genius-ai.png", disc: "/images/vinyl/discs/genius-ai.png" },
    { id: "miovision", cover: "/images/vinyl/covers/miovision.png", disc: "/images/vinyl/discs/miovision.png" },
    { id: "magi", cover: "/images/vinyl/covers/magi.png", disc: "/images/vinyl/discs/magi.png" },
    { id: "wolf", cover: "/images/vinyl/covers/wolf.png", disc: "/images/vinyl/discs/wolf.png" },
    { id: "hatch", cover: "/images/vinyl/covers/hatch.png", disc: "/images/vinyl/discs/hatch.png" },
    { id: "iirc", cover: "/images/vinyl/covers/iirc.png", disc: "/images/vinyl/discs/iirc.png" },
];

const Vinyl = () => {
    const [selectedId, setSelectedId] = useState<string>(VINYL_RECORDS[0].id);

    return (
        <div className="p-6 pt-24 md:py-20 md:px-20 bg-bg-purple min-h-screen flex items-center">
            <div className="flex gap-20 flex-col md:flex-row size-full items-center">
                {/* left col with all the 6 vinyl covers that will act as buttons */}
                <div className="flex flex-col gap-4 md:w-24">
                    {VINYL_RECORDS.map((record) => (
                        <button
                            key={record.id}
                            onClick={() => setSelectedId(record.id)}
                            className={`transition-all duration-300 rounded-md overflow-hidden ${
                                selectedId === record.id
                                    ? "opacity-100"
                                    : "opacity-60 hover:scale-102 hover:opacity-100"
                            }`}
                        >
                            <img
                                src={record.cover}
                                alt={record.id}
                                className="w-full aspect-square object-cover"
                            />
                        </button>
                    ))}
                </div>

                {/* right col with the title and details of the selected vinyl */}
                <div className="flex-1">
                    <ScrollFadeIn>
                        <div className="flex flex-col gap-6">
                            <div>
                                <h1>{TITLE}</h1>
                                <h2>{SUBTITLE}</h2>
                            </div>
                            {/* going to have the vinyl player and the details here */}
                            <div className="flex gap-8">
                                {/* left col with the turntable and discs that are dependent on which cover is selected */}
                                <VinylPlayer selectedDiscImage={VINYL_RECORDS.find(r => r.id === selectedId)?.disc || VINYL_RECORDS[0].disc} />

                                {/* right col with the details of that turntable job experience */}
                                <div className="flex-1">
                                    <p className="text-gray-600">Project details coming soon...</p>
                                </div>
                            </div>
                        </div>
                    </ScrollFadeIn>
                </div>
            </div>
        </div>
    );
};

export default Vinyl;
