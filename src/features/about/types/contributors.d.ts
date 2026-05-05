export type ContributorRole = 'Core maintainer' | 'Contributor' | 'Advisor';

export interface Contributor {
  id: string;
  name: string;
  handle?: string;
  role: ContributorRole;
  avatarUrl?: string;
  location?: string;
  expertise?: string;
  githubUrl?: string;
  twitterUrl?: string;
  websiteUrl?: string;
  isCore?: boolean;
}

export interface ContributorsSectionData {
  eyebrow: string;
  title: string;
  subtitle?: string;
  description?: string;
  contributors: Contributor[];
}
