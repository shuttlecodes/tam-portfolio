import ScrollFadeIn from "../components/ScrollFadeIn";

const TITLE = "Hi, I'm Tam Mai";
const SUBTITLE = "Mainly a software engineer 🛠️ sometimes a designer 🎨 and perpetually a music enthusiast 🎵";
const BODY_TEXT = "I care about building things well and owning them end to end. This site walks through some of that work, plus what drives me to build.";
const RESUME_LINK = "For the experience TLDR, check out my resume here:"

const Home = () => {

    return (
        <div className="p-6 pt-24 md:py-20 md:pr-20 md:pl-36 bg-bg-teal min-h-screen flex items-center justify-center">
            <div className="flex gap-6 md:flex-row flex-col items-center">
                <img></img>
                <div className="max-w-xl mx-auto flex flex-col gap-4">
                    <ScrollFadeIn>
                        <div className="flex flex-col">
                            <h1>{TITLE}</h1>
                            <h2>{SUBTITLE}</h2>
                        </div>
                    </ScrollFadeIn>
                    <ScrollFadeIn delay={0.1}>
                        {/* make rounded-lg default */}
                        <div className="bg-white p-4 rounded-lg w-full max-w-[400px] flex flex-col gap-4">
                            <p>{BODY_TEXT}</p>
                            <p>{RESUME_LINK}</p>
                        </div>
                    </ScrollFadeIn>
                </div>
            </div>
        </div>
    );
};

export default Home;
