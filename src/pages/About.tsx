import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollFadeIn from "../components/ScrollFadeIn";

const images = [
    "/images/about/figma.png",
    "/images/about/observe.png",
];

const TITLE = "More about this website";
const SUBTITLE = "and the process of building it.";

const TEXT_CARDS = [
    {
        bold: "Looked at the Gloss Genius website",
        body: "and noted down a few observations! I wanted to go with the same light-coloured theme, with rounded edges."
    },
    {
        bold: "Made some wireframes on Figma,",
        body: "while also getting inspiration from Dribbble."
    },
    {
        bold: "Built using React, TailwindCSS, and Vite!",
        body: "I deployed with Vercel - Check out the GitHub repo for details."
    },
    {
        bold: "If I had more time",
        body: "I would’ve liked to add more animations,  make this responsive & accessible."
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
        <div className="py-20 pr-20 pl-36 bg-bg-teal min-h-screen flex items-center">
            <div className="max-w-2xl mx-auto flex flex-col gap-4">
                <ScrollFadeIn>
                    <div className="flex flex-col">
                        <h1>{TITLE}</h1>
                        <h2>{SUBTITLE}</h2>
                    </div>
                </ScrollFadeIn>
                <div className="flex gap-6">
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
