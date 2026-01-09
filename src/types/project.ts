export interface Project {
  id: number;
  title: string;
  description: string;
  painPoint: string;
  solution: string;
  impact?: string;
  tags: string[];
  featured: boolean;
  coverImage?: string;
  images?: string[];
  video?: string;
  githubUrl?: string;
  demoUrl?: string;
  caseStudyUrl?: string;
}
