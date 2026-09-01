import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollFadeIn from "../components/ScrollFadeIn";

const images = [
    "/images/about/figma.png",
    "/images/about/observe.png",
];

const TITLE = "Looks like you've reached the end";
const SUBTITLE = "Here's more about me and this website";

const TEXT_CARDS = [
    {
        bold: "Revamp of my old portfolio website,",
        body: "which had a vinyl theme! I built wireframes and designed the record player assets with Figma."
    },
    {
        bold: "Built using React, TailwindCSS, and Vite!",
        body: "I used Framer Motion for animations, and deployed with Vercel."
    },
    {
        bold: "So what's next?",
        body: "I'm touching up my projects page, and working on a more animations, especially in the vinyl page."
    },
    {
        bold: "Feel free to reach me!",
        body: "You can find me on LinkedIn via email. I'm always open to chat, whether it's about work or photography, music, food, etc!"
    }
]


const About = () => {
    const [image, setImage] = useState(images[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            const currentIndex = images.indexOf(image);
            const nextIndex = (currentIndex + 1) % images.length;
            setImage(images[nextIndex]);
        }, 5000);
        return () => clearInterval(interval);
    }, [image]);

    return (
        <div className="p-20 bg-bg-purple min-h-screen flex items-center">
            <div className="max-w-2xl mx-auto flex flex-col gap-4">
                <ScrollFadeIn>
                    <div className="flex flex-col">
                        <h1>{TITLE}</h1>
                        <h2>{SUBTITLE}</h2>
                    </div>
                </ScrollFadeIn>
                <div className="flex gap-6 flex-col md:flex-row">
                    <div className="flex flex-col gap-4">
                        {TEXT_CARDS.map((card, index) => {
                            return (
                                <ScrollFadeIn key={card.bold} delay={index * 0.1}>
                                    <p className="bg-white p-4 rounded-xl h-min"><span className="font-bold text-purple">{card.bold}</span> {card.body}</p>
                                </ScrollFadeIn>
                            );
                        })}
                    </div>
                    <ScrollFadeIn delay={0.3}>
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={image}
                                src={image}
                                alt=""
                                className="min-w-[360px] h-[400px] rounded-xl object-cover"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.5 }}
                            />
                        </AnimatePresence>
                    </ScrollFadeIn>
                </div>
            </div>
        </div>
    );
};

export default About;
