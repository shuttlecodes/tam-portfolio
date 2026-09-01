interface Link {
    text: string;
    url: string;
}

export interface InternshipDetail {
    id: string;
    cover: string;
    disc: string;
    company: string;
    title: string;
    dates: string;
    technologies: string[];
    highlights: string[];
    links?: Link[];
}
