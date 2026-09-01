import type { InternshipDetail } from "../types/internship";

interface InternshipDetailsProps {
    internship: InternshipDetail;
}

export const InternshipDetails = ({ internship }: InternshipDetailsProps) => {
    return (
        <div className="flex flex-col gap-4 h-[80%] justify-center">
            <div>
                <h1 className="text-2xl">{internship.company}</h1>
                <p className="text-sm">{internship.dates} | {internship.title}</p>
            </div>

            {/* Highlights */}
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

            {/* Links */}
            {internship.links && internship.links.length > 0 && (
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
            )}

            {/* Technologies */}
            <div>
                <div className="flex flex-wrap gap-2">
                    {internship.technologies.map((tech) => (
                        <span key={tech} className="text-xs bg-gray-200 px-2 py-1 rounded">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};
