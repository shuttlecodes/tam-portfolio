import { Link, useLocation } from "react-router-dom";
import { HomeIcon } from "../assets/icons/HomeIcon";
import { GlossIcon } from "../assets/icons/GlossIcon";
import { StarIcon } from "../assets/icons/StarIcon";
import { InfoIcon } from "../assets/icons/InfoIcon";

const Sidebar = () => {
    const location = useLocation();

    const navItems = [
        { path: "/", icon: HomeIcon },
        { path: "/my-values", icon: StarIcon },
        { path: "/why-gloss", icon: GlossIcon },
        { path: "/about", icon: InfoIcon },
    ];

    return (
        <nav className="fixed bottom-0 md:top-0 left-0 w-full md:w-16 h-16 md:h-screen bg-white md:border-r border-t md:border-t-0 border-gray-100 rounded-t-xl md:rounded-r-xl md:rounded-tl-none flex flex-row md:flex-col items-center justify-between md:justify-center px-8 md:px-0 py-0 md:py-8 z-50">
            <div className="flex flex-row md:flex-col gap-6 w-full md:w-auto justify-around md:justify-start">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.path;

                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`p-2 rounded-2xl transition-all duration-300 ${isActive
                                ? "bg-accent text-white"
                                : "text-gray-400 hover:bg-gray hover:text-gray-600"
                                }`}
                        >
                            <Icon className="w-6 h-6" />
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
};

export default Sidebar;