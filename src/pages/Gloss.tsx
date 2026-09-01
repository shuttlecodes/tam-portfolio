import ScrollFadeIn from "../components/ScrollFadeIn";

const TITLE = "Things I’ve learned throughout this process"
const SUBTITLE = "and why I’m excited about Gloss Genius!"

const POINTS_LEFT = [
    "The culture seems so supportive and welcoming :) I’ve been really appreciating the genuine conversations I get to have.",
    "Company growth is exciting! When I spoke to Lisa, she shared how in the past 3 years, she’s seen the number of users double!",
    "Interns have the chance to “get their hands dirty”!"
]

const POINTS_RIGHT = [
    "I also learned about how users are “uniquely passionate” about the application. It's so motivating to build features for people who also care so much!",
    "Something that my technical interviewer, Calvin, said that stood out to me was that Gloss Genius really gives people the chance to pivot and make their dreams come true.",
]

const Gloss = () => {
    return (
        <div className="py-20 pr-20 pl-36 bg-bg-purple min-h-screen flex items-center justify-center">
            <div className="flex flex-col gap-10 max-w-xl items-center">
                <ScrollFadeIn>
                    <div className="flex flex-col max-w-[400px] text-center gap-2">
                        <h1 className="leading-[1.2]">{TITLE}</h1>
                        <h2>{SUBTITLE}</h2>
                    </div>
                </ScrollFadeIn>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-4">{POINTS_LEFT.map((point, index) => {
                        return (
                            <ScrollFadeIn key={point} delay={index * 0.1}>
                                <p className="bg-white p-4 rounded-xl h-min">{point}</p>
                            </ScrollFadeIn>
                        );
                    })}</div>
                    <div className="flex flex-col gap-4">{POINTS_RIGHT.map((point, index) => {
                        return (
                            <ScrollFadeIn key={point} delay={(index * 0.1) + 0.2}>
                                <p className="bg-white p-4 rounded-xl h-min">{point}</p>
                            </ScrollFadeIn>
                        );
                    })}</div>
                </div>
            </div>
        </div>
    );
};

export default Gloss;