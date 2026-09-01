import { GitHubIcon } from "../assets/icons/GitHubIcon";

const Footer = () => {
    return (
        <div className="fixed top-6 md:top-auto md:bottom-6 right-6 flex gap-4 items-center text-right text-black">
            <div className="flex flex-col">
                <p><a href="mailto:ttmai@uwaterloo.ca" target="_blank" >ttmai@uwaterloo.ca</a></p>
                <p><a href="https://www.linkedin.com/in/tam-t-mai/" target="_blank" >linkedin.com/in/tam-t-mai</a></p>
            </div>
            <a href="https://github.com/shuttlecodes" target="_blank" className="bg-accent rounded-2xl py-1 px-3 flex items-center justify-center text-white hover:scale-105 transition-transform">
                <GitHubIcon />
            </a>
        </div>
    );
};

export default Footer;
