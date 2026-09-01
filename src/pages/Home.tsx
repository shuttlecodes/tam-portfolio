import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollFadeIn from "../components/ScrollFadeIn";

const images = [
    "/images/home/ikigai-photo.png",
    "/images/home/buildings.JPG",
    "/images/home/pottery.JPG",
    "/images/home/art-frames.jpeg",
    "/images/home/boat.JPG",
    "/images/home/flower.JPG",
    "/images/home/malay.JPG"
];

const SUBTITLE = "As an add-on to my application...";
const TITLE = "here's a little more about me!";
const BODY_TEXT = "The more I learn about Gloss Genius, the more I want to work here! Since I had some extra time over the weekend, I put this small website together to share some of the reasons why I would love to join the team and mission at Gloss. \n\nFeel free to use the navigation bar on the left to check out the different pages! \n\n- Tam :)";

const Home = () => {
    const [image, setImage] = useState(images[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            const currentIndex = images.indexOf(image);
            const nextIndex = (currentIndex + 1) % images.length;
            setImage(images[nextIndex]);
        }, 3000);
        return () => clearInterval(interval);
    }, [image]);

    return (
        <div className="p-6 pt-24 md:py-20 md:pr-20 md:pl-36 bg-bg-teal min-h-screen flex items-center justify-center">
            <div className="max-w-xl mx-auto flex flex-col gap-4">
                <ScrollFadeIn>
                    <div className="flex flex-col">
                        <h2>{SUBTITLE}</h2>
                        <h1>{TITLE}</h1>
                    </div>
                </ScrollFadeIn>
                <div className="flex gap-6 md:flex-row flex-col items-center">
                    <ScrollFadeIn delay={0.1}>
                        <p className="bg-white p-6 rounded-xl w-full max-w-[350px] md:w-[300px] whitespace-pre-line">{BODY_TEXT}</p>
                    </ScrollFadeIn>
                    <ScrollFadeIn delay={0.2}>
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={image}
                                src={image}
                                alt=""
                                className="w-full max-w-[350px] md:min-w-[300px] md:w-[300px] h-64 md:h-[300px] rounded-xl object-cover"
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

export default Home;
