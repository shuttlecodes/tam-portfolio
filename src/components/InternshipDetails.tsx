import type { InternshipDetail } from "../types/internship";

interface InternshipDetailsProps {
    internship: InternshipDetail;
}

export const InternshipDetails = ({ internship }: InternshipDetailsProps) => {
    return (
        <div className="flex flex-col gap-4">
            <div>
                <h3 className="text-2xl font-semibold">{internship.company}</h3>
                <p className="text-sm text-gray-600">{internship.title}</p>
                <p className="text-sm text-gray-500">{internship.dates}</p>
            </div>

            {/* Technologies */}
            <div>
                <p className="text-xs font-semibold text-gray-700 uppercase mb-2">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                    {internship.technologies.map((tech) => (
                        <span key={tech} className="text-xs bg-gray-200 px-2 py-1 rounded">
                            {tech}
                        </span>
                    ))}
                </div>
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
                <div className="flex gap-4 pt-2">
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
        </div>
    );
};
