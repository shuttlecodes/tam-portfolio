"use client";

import { useState } from "react";
import ScrollFadeIn from "../components/ScrollFadeIn";

const TITLE = "Track record"
const SUBTITLE = "Learn about my different work experiences by clicking through the records."

const VINYL_RECORDS = [
    { id: "genius-ai", image: "/images/vinyl/covers/genius-ai.png" },
    { id: "miovision", image: "/images/vinyl/covers/miovision.png" },
    { id: "magi", image: "/images/vinyl/covers/magi.png" },
    { id: "wolf", image: "/images/vinyl/covers/wolf.png" },
    { id: "hatch", image: "/images/vinyl/covers/hatch.png" },
    { id: "iirc", image: "/images/vinyl/covers/iirc.png" },
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
                                    : "opacity-60 hover:scale-105 hover:opacity-100"
                            }`}
                        >
                            <img
                                src={record.image}
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
                            <div className="bg-white p-8 rounded-lg min-h-96">
                                <p className="text-gray-400">Vinyl player & project details coming soon...</p>
                            </div>
                        </div>
                    </ScrollFadeIn>
                </div>
            </div>
        </div>
    );
};

export default Vinyl;
