import ScrollFadeIn from "../components/ScrollFadeIn";

const TITLE = "Projects";
const SUBTITLE = "Details coming soon!";

const Projects = () => {
    return (
        <div className="p-6 pt-24 md:py-20 md:pr-20 md:pl-36 bg-bg-teal min-h-screen flex items-center justify-center">
            <div className="flex flex-col gap-10 items-center text-center">
                <ScrollFadeIn>
                    <div className="flex flex-col gap-4">
                        <h1>{TITLE}</h1>
                        <h2>{SUBTITLE}</h2>
                    </div>
                </ScrollFadeIn>
                {/* Carousel or cards will go here */}
            </div>
        </div>
    );
};

export default Projects;
