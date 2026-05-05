export interface CTAAction {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'ghost';
}

export interface CTAData {
  badge?: string;
  title: string;
  description: string;
  actions: CTAAction[];
}
