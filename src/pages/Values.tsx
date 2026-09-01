import { IkigaiGood } from "../assets/ikigai/IkigaiGood";
import { IkigaiLove } from "../assets/ikigai/IkigaiLove";
import { IkigaiWorld } from "../assets/ikigai/IkigaiWorld";
import { IkigaiSustain } from "../assets/ikigai/IkigaiSustain";
import { ChevronDownIcon } from "../assets/icons/ChevronDownIcon";
import ScrollFadeIn from "../components/ScrollFadeIn";

const CONTEXT_TITLE = "Ikigai"
const CONTEXT_BODY = "What are my north stars? One of the ways I enjoy explaining it is through the lens of “Ikigai” (生きがい).\n\nIt’s this idea that an individual’s life purpose involves finding the balance between four factors: what you love, what you are good at, what the world needs, and what can sustain you.\n\nThroughout my work experiences, I’ve been learning more about what drives me to build my technical knowledge and always aim to learn."

const VAL_TITLE = "Diving into what this means"
const VAL_CARDS = [
    {
        bold: "I want my work to actually help people.",
        body: "Whether it's a feature that helps users meet their goals or infrastructure that quietly keeps things running, I care about building things that make a real difference for the people who use them.",
        color: "text-teal",
        visual: <IkigaiWorld />
    },
    {
        bold: "I love figuring things out.",
        body: "I'm drawn to hard problems: tracing a bug to its real root cause, untangling a system I don't fully understand yet, or learning a new tool because it's the right one for the job.",
        color: "text-purple",
        visual: <IkigaiLove />
    },
    {
        bold: "I've built range across the stack.",
        body: "I gravitate toward frontend work, but I enjoy stretching into backend and infrastructure too. I like owning problems end to end, from understanding a system's constraints to shipping the fix.",
        color: "text-pink",
        visual: <IkigaiGood />
    },
    {
        bold: "I want to grow alongside a team that's growing too.",
        body: "I'm drawn to teams that are driven by impact, at companies that are growing, where I can keep learning to be a better engineer.",
        color: "text-magenta",
        visual: <IkigaiSustain />
    }
]

const Values = () => {
    return (
        <div className="py-20 pr-20 pl-36 bg-bg-pink min-h-screen flex items-center justify-center overflow-hidden">
            <div className="flex flex-col gap-20 max-w-xl relative">
                <ScrollFadeIn>
                    <div className="flex flex-col gap-20 py-70">
                        <div className="flex gap-10">
                            <h1 className="leading-[1.2]">{CONTEXT_TITLE}</h1>
                            <p className="whitespace-pre-line pt-2">{CONTEXT_BODY}</p>
                        </div>
                        <div className="flex justify-center animate-bounce text-gray-700">
                            <ChevronDownIcon className="w-6 h-6" />
                        </div>
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