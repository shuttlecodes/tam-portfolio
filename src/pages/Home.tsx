import ScrollFadeIn from "../components/ScrollFadeIn";
import headshotBW from "/images/home/headshot-bw.png";
import { motion } from "framer-motion";

const TITLE = "Hi, I'm Tam Mai";
const SUBTITLE = "Software engineer 🛠️ and sometimes a designer 🎨 but perpetually a music enthusiast 🎵";
const BODY_TEXT = "I care about building things well and owning them end to end. This site walks through some of that work, plus what drives me to build.";
const RESUME_LINK = "For the experience TLDR, check out my resume here:"

const Home = () => {

    return (
        <div className="p-6 pt-24 md:py-20 md:pr-20 md:pl-36 bg-bg-teal min-h-screen flex items-center justify-center">
            <div className="flex gap-10 md:flex-row flex-col items-center">
                <div className="relative flex items-center justify-center">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                            duration: 1.2,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                        className="absolute w-80 h-80 bg-blue-200 rounded-full"
                    />
                    <img src={headshotBW} alt="Tam Mai headshot" className="max-w-xs relative z-10"/>
                </div>
                <div className="max-w-xl mx-auto flex flex-col gap-4">
                    <ScrollFadeIn>
                        <div className="flex flex-col">
                            <h1>{TITLE}</h1>
                            <h2>{SUBTITLE}</h2>
                        </div>
                    </ScrollFadeIn>
                    <ScrollFadeIn delay={0.2}>
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
