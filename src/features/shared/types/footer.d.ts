export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FooterData {
  brand: {
    name: string;
    description: string;
  };
  sections: FooterSection[];
  bottomText: string;
}
