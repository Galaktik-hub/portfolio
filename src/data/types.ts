export interface Project {
    slug: string;
    title: string;
    subtitle: string;
    year: number;
    image: string;
    technologies: string[];
    summary: string;
    description: string;
    keyFeatures: string[];
    link?: string;
}
