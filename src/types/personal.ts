export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  email: string;
  location?: string;
  availability: boolean;
  resumeUrl?: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}
