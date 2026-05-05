export interface AboutHeroData {
  eyebrow: string;
  title: string;
  highlight: string;
  paragraphs: string[];
  snapshot: {
    label: string;
    items: { label: string; value: string }[];
  };
}

export interface AboutWhatIsData {
  title: string;
  columns: string[];
}

export interface Principle {
  id: string | number;
  title: string;
  description: string;
}

export interface AboutPrinciplesData {
  title: string;
  principles: Principle[];
}

export interface AboutData {
  hero: AboutHeroData;
  whatIs: AboutWhatIsData;
  principles: AboutPrinciplesData;
}
