"use client";

import { useState } from "react";
import ScrollFadeIn from "../components/ScrollFadeIn";
import { VinylPlayer } from "../components/VinylPlayer";
import { InternshipDetails } from "../components/InternshipDetails";
import type { InternshipDetail } from "../types/internship";

const VINYL_RECORDS: InternshipDetail[] = [
    {
        id: "genius-ai",
        cover: "/images/vinyl/covers/genius-ai.png",
        disc: "/images/vinyl/discs/genius-ai.png",
        company: "Genius AI",
        title: "Software Engineer Intern",
        dates: "Jun – Aug 2026",
        technologies: ["React Native", "CircleCI", "AWS", "OIDC", "Jest", "Maestro"],
        highlights: [
            "Rebuilt onboarding for 6 features, driving a 25.3% lift in day-7 adoption, led by 175.4% more customers ordering a card reader (a segment with 28x GPV)",
            "Owned an A/B test E2E, reducing subscription downgrades by 17%",
            "Built the marketing site's first staging environment, resolving a legacy CI integration limit; also implemented a unit test framework"
        ]
    },
    {
        id: "miovision",
        cover: "/images/vinyl/covers/miovision.png",
        disc: "/images/vinyl/discs/miovision.png",
        company: "Miovision Technologies",
        title: "Software Engineer Intern",
        dates: "Sep – Dec 2025",
        technologies: ["Angular", "TailwindCSS", "Cypress", "Vitest"],
        highlights: [
            "Built map-based frontend features for configuring traffic-signal intersection geometry",
            "Traced a cluster of crosswalk detector defects to a flawed data modeling assumption",
            "Adopted Angular's signal and computed state patterns to replace legacy subscription logic"
        ]
    },
    {
        id: "magi",
        cover: "/images/vinyl/covers/magi.png",
        disc: "/images/vinyl/discs/magi.png",
        company: "MAGI Inc.",
        title: "Software Engineer Intern",
        dates: "Jan – Apr 2025",
        technologies: ["React", "Next.js", "FastAPI", "LangChain", "TanStack Query", "Zustand"],
        highlights: [
            "Proposed, designed, and shipped a fullstack Streaks retention feature, boosting engagement 18-20% and signups 25%",
            "Architected a mobile web product from scratch, building a swipe-based discovery flow",
            "Ran A/B tests evaluating cost tradeoffs for LLM-powered features",
            "Launched 15+ A/B tests across onboarding, chat, and retention features"
        ],
        links: [{ text: "Built this marketing site", url: "https://magi.inc/" }]
    },
    {
        id: "wolf",
        cover: "/images/vinyl/covers/wolf.png",
        disc: "/images/vinyl/discs/wolf.png",
        company: "WOLF Advanced Technologies",
        title: "Software Engineer & Design Intern",
        dates: "May – Aug 2024",
        technologies: ["Blazor", "C# .NET", "Figma"],
        highlights: [
            "Built features in Blazor for a project management platform and a sales/accounting platform",
            "Standardized a service layer pattern for async data fetching, documenting it for broader use",
            "Pioneered a Figma-based design system with reusable components, reducing UI implementation time",
        ],
        links: [{ text: "Led design efforts", url: "https://www.figma.com/design/UMwJ18H6bobJJWp26zCDvR/Tam---Design-Samples?node-id=2-2" }]
    },
    {
        id: "hatch",
        cover: "/images/vinyl/covers/hatch.png",
        disc: "/images/vinyl/discs/hatch.png",
        company: "Hatch, Digital Products",
        title: "Software Engineer Intern",
        dates: "Sep – Dec 2023",
        technologies: ["Angular", "TypeScript", "Jest"],
        highlights: [
            "Developed front-end features for a mining application, increasing test coverage by 15%",
            "Evaluated and implemented open-source libraries for geospatial coordinate conversions",
            "Facilitated Scrum retrospectives to drive team engagement",
            "Partnered with designers to proactively align feature specifications"
        ]
    },
    {
        id: "iirc",
        cover: "/images/vinyl/covers/iirc.png",
        disc: "/images/vinyl/discs/iirc.png",
        company: "Immigrations, Refugees, Citizenship Canada",
        title: "Automated Test Developer",
        dates: "Jan – Apr 2023",
        technologies: ["Java", "Selenium", "Swagger UI"],
        highlights: [
            "Developed automated test scripts, driving a 20% increase in test coverage",
            "Worked with developers to reduce API latency by 10%"
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
                <div className="md:flex flex-col gap-4 w-16 md:w-24 hidden">
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
                                {/* <h2>{SUBTITLE}</h2> */}
                            </div>
                            {/* going to have the vinyl player and the details here */}
                            <div className="flex gap-8 flex-col lg:flex-row">
                                {/* left col with the turntable and discs that are dependent on which cover is selected */}
                                <VinylPlayer 
                                    selectedDiscImage={VINYL_RECORDS.find(r => r.id === selectedId)?.disc || VINYL_RECORDS[0].disc}
                                    isPlaying={isPlaying}
                                    onTogglePlay={handleTogglePlay}
                                    onPrevious={handlePrevious}
                                    onNext={handleNext}
                                />

                                {/* right col with the details of that turntable job experience */}
                                <div className="flex-1">
                                    <InternshipDetails
                                        key={selectedId}
                                        internship={VINYL_RECORDS.find(r => r.id === selectedId) || VINYL_RECORDS[0]}
                                    />
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
