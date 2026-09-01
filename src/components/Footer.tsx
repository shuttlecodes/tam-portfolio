import { GitHubIcon } from "../assets/icons/GitHubIcon";

const Footer = () => {
    return (
        <div className="fixed top-6 md:top-auto md:bottom-6 right-6 flex gap-4 items-center text-right text-black">
            <div className="flex flex-col">
                <p>February 2026</p>
                <p>Tam Mai x Gloss Genius</p>
            </div>
            <a href="https://github.com/shuttlecodes/gloss-genius-site" target="_blank" rel="noopener noreferrer" className="bg-accent rounded-2xl py-1 px-3 flex items-center justify-center text-white">
                <GitHubIcon />
            </a>
        </div>
    );
};

export default Footer;
