import { IkigaiGood } from "../assets/ikigai/IkigaiGood";
import { IkigaiLove } from "../assets/ikigai/IkigaiLove";
import { IkigaiWorld } from "../assets/ikigai/IkigaiWorld";
import { IkigaiSustain } from "../assets/ikigai/IkigaiSustain";
import ScrollFadeIn from "../components/ScrollFadeIn";

const CONTEXT_TITLE = "Ikigai + context"
const CONTEXT_BODY = "I gave a sneak peak of this in the home page, but a concept I learned about in high school that’s stuck with me since, has been “Ikigai” (生きがい).\n\nIt’s this idea that an individual’s life purpose involves finding the balance between four factors: what you love, what you are good at, what the world needs, and what can sustain you.\n\nThroughout my work experiences, I’ve been learning more about myself, my skills, and my passions!"

const VAL_TITLE = "Diving into what this means"
const VAL_CARDS = [
    {
        bold: "I aspire to build something that helps real people.",
        body: "I love that Gloss Genius empowers individuals by building tools that help manage the day-to-day operations of running a business! This is such a meaningful and impactful way to support people who want to pursue their true passions.",
        color: "text-teal",
        visual: <IkigaiWorld />
    },
    {
        bold: "I love creating things!",
        body: "Whether this be in the context of software or as part of my hobbies (scrapbooking, sketching, photography), I love working with aesthetics and being part of spaces where I can learn, grow, and share new ideas!",
        color: "text-purple",
        visual: <IkigaiLove />
    },
    {
        bold: "I’ve built up experience in software.",
        body: "With most comfort veering towards front-end and full-stack work, I especially enjoy working on client-facing applications. I love learning more about the specific users I’m building tools for, and developing better intuition on their needs.",
        color: "text-pink",
        visual: <IkigaiGood />
    },
    {
        bold: "Team growth is important to me!",
        body: "I was excited to learn about how Gloss Genius is expanding its work to cater towards the “up market” now too, and even explore different verticals that involve appointment bookings! The future looks rather promising for the organization.",
        color: "text-magenta",
        visual: <IkigaiSustain />
    }
]

const Values = () => {
    return (
        <div className="py-20 pr-20 pl-36 bg-bg-pink min-h-screen flex items-center justify-center">
            <div className="flex flex-col gap-10 max-w-xl">
                <ScrollFadeIn>
                    <div className="flex gap-10 py-70">
                        {/* to do: make it snappy */}
                        <h1 className="leading-[1.2]">{CONTEXT_TITLE}</h1>
                        <p className="whitespace-pre-line pt-2">{CONTEXT_BODY}</p>
                    </div>
                </ScrollFadeIn>
                <div className="flex flex-col gap-10">
                    <ScrollFadeIn>
                        <h1>{VAL_TITLE}</h1>
                    </ScrollFadeIn>
                    {VAL_CARDS.map((card, index) => {
                        return (
                            <div key={card.bold} className={`flex gap-6 items-center ${index % 2 !== 0 ? "flex-row-reverse" : ""}`}>
                                <ScrollFadeIn delay={0.1}>
                                    <div className="flex flex-col gap-2 bg-white p-6 rounded-xl h-min">
                                        <p><span className={`${card.color} font-bold`}>{card.bold}</span> {card.body}</p>
                                    </div>
                                </ScrollFadeIn>
                                <ScrollFadeIn delay={0.2}>
                                    <div>{card.visual}</div>
                                </ScrollFadeIn>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Values;