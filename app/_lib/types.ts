export interface DataI {
  title: string;
  year: number;
  description: {
    text: string;
    image: string;
    languages: string[];
    tools: string[];
    links: {
      type: string;
      link: string;
    }[];
  };
}
