import type { InternshipDetail } from "../types/internship";
import ScrollFadeIn from "./ScrollFadeIn";

interface InternshipDetailsProps {
    internship: InternshipDetail;
}

export const InternshipDetails = ({ internship }: InternshipDetailsProps) => {
    return (
        <div className="flex flex-col gap-4 h-[80%] justify-center">
            <ScrollFadeIn delay={0.1}>
                <div>
                    <h1 className="text-2xl">{internship.company}</h1>
                    <p className="text-sm">{internship.dates} | {internship.title}</p>
                </div>
            </ScrollFadeIn>

            <ScrollFadeIn delay={0.2}>
                <div>
                    <ul className="space-y-2">
                        {internship.highlights.map((highlight, idx) => (
                            <li key={idx} className="text-sm text-gray-700 flex gap-2">
                                <span className="text-accent font-bold">•</span>
                                <span>{highlight}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </ScrollFadeIn>

            {internship.links && internship.links.length > 0 && (
                <ScrollFadeIn delay={0.3}>
                    <div className="flex gap-4">
                        {internship.links.map((link) => (
                            <a
                                key={link.text}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-accent hover:underline"
                            >
                                {link.text}
                            </a>
                        ))}
                    </div>
                </ScrollFadeIn>
            )}

            <ScrollFadeIn delay={0.4}>
                <div>
                    <div className="flex flex-wrap gap-2">
                        {internship.technologies.map((tech) => (
                            <span key={tech} className="text-xs bg-gray-200 px-2 py-1 rounded">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </ScrollFadeIn>
        </div>
    );
};
