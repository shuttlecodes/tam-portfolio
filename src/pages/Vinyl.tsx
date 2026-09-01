"use client";

import { useState } from "react";
import ScrollFadeIn from "../components/ScrollFadeIn";
import { VinylPlayer } from "../components/VinylPlayer";
import { InternshipDetails } from "../components/InternshipDetails";
import type { InternshipDetail } from "../types/internship";

const TITLE = "Track record"
const SUBTITLE = "Learn about my different work experiences by clicking through the records."

const VINYL_RECORDS: InternshipDetail[] = [
    {
        id: "genius-ai",
        cover: "/images/vinyl/covers/genius-ai.png",
        disc: "/images/vinyl/discs/genius-ai.png",
        company: "Genius AI",
        title: "Software Engineering Intern",
        dates: "May – Aug 2024",
        technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
        highlights: [
            "Built feature placeholder 1",
            "Improved placeholder metric by X%"
        ],
        links: [{ text: "View project", url: "#" }]
    },
    {
        id: "miovision",
        cover: "/images/vinyl/covers/miovision.png",
        disc: "/images/vinyl/discs/miovision.png",
        company: "MioVision",
        title: "Backend Engineering Intern",
        dates: "Jan – Apr 2024",
        technologies: ["Python", "Django", "AWS", "PostgreSQL"],
        highlights: [
            "Placeholder achievement 1",
            "Placeholder achievement 2"
        ]
    },
    {
        id: "magi",
        cover: "/images/vinyl/covers/magi.png",
        disc: "/images/vinyl/discs/magi.png",
        company: "Magi",
        title: "Full Stack Developer",
        dates: "May – Aug 2023",
        technologies: ["React", "Node.js", "MongoDB", "Docker"],
        highlights: [
            "Placeholder work item 1",
            "Placeholder work item 2"
        ]
    },
    {
        id: "wolf",
        cover: "/images/vinyl/covers/wolf.png",
        disc: "/images/vinyl/discs/wolf.png",
        company: "Wolf",
        title: "Software Engineering Intern",
        dates: "Sep – Dec 2022",
        technologies: ["Java", "Spring Boot", "MySQL"],
        highlights: [
            "Placeholder experience 1"
        ]
    },
    {
        id: "hatch",
        cover: "/images/vinyl/covers/hatch.png",
        disc: "/images/vinyl/discs/hatch.png",
        company: "Hatch",
        title: "Junior Developer",
        dates: "Jan – Apr 2022",
        technologies: ["JavaScript", "React", "Node.js"],
        highlights: [
            "Placeholder role description"
        ]
    },
    {
        id: "iirc",
        cover: "/images/vinyl/covers/iirc.png",
        disc: "/images/vinyl/discs/iirc.png",
        company: "IIRC",
        title: "Software Developer",
        dates: "May – Aug 2021",
        technologies: ["Python", "Flask"],
        highlights: [
            "Placeholder first role"
        ]
    }
];

const Vinyl = () => {
    const [selectedId, setSelectedId] = useState<string>(VINYL_RECORDS[0].id);
    const [isPlaying, setIsPlaying] = useState<boolean>(true);

    const handlePrevious = () => {
        const currentIndex = VINYL_RECORDS.findIndex(r => r.id === selectedId);
        const previousIndex = currentIndex === 0 ? VINYL_RECORDS.length - 1 : currentIndex - 1;
        setSelectedId(VINYL_RECORDS[previousIndex].id);
    };

    const handleNext = () => {
        const currentIndex = VINYL_RECORDS.findIndex(r => r.id === selectedId);
        const nextIndex = currentIndex === VINYL_RECORDS.length - 1 ? 0 : currentIndex + 1;
        setSelectedId(VINYL_RECORDS[nextIndex].id);
    };

    const handleTogglePlay = () => {
        setIsPlaying(!isPlaying);
    };

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
                                {/* <h1>{TITLE}</h1> */}
                                <h2>{SUBTITLE}</h2>
                            </div>
                            {/* going to have the vinyl player and the details here */}
                            <div className="flex gap-8">
                                {/* left col with the turntable and discs that are dependent on which cover is selected */}
                                <VinylPlayer 
                                    selectedDiscImage={VINYL_RECORDS.find(r => r.id === selectedId)?.disc || VINYL_RECORDS[0].disc}
                                    isPlaying={isPlaying}
                                    onTogglePlay={handleTogglePlay}
                                    onPrevious={handlePrevious}
                                    onNext={handleNext}
                                />

                                {/* right col with the details of that turntable job experience */}
                                <div className="flex-1 flex items-center">
                                    <InternshipDetails internship={VINYL_RECORDS.find(r => r.id === selectedId) || VINYL_RECORDS[0]} />
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
