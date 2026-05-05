export interface ProductLink {
  label: string;
  href: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  website?: ProductLink;
  repository?: ProductLink;
  image?: string;
  badge?: string;
}
