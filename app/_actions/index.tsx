"use server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface GithubI {
  success: boolean;
  stars: number;
  forks: number;
}

interface MatterI {
  file: string;
  data: {
    title: string;
    date: Date;
    blurb: string;
    content: string;
  };
}

export const github = (): Promise<GithubI> => {
  return fetch("https://api.github.com/repos/petersim1/portfolio")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Fetch");
    })
    .then((result) => {
      const { stargazers_count: stars, forks_count: forks } = result;
      return {
        success: true,
        stars,
        forks,
      };
    })
    .catch((error) => {
      console.log(error);
      return {
        success: false,
        stars: 0,
        forks: 0,
      };
    });
};

const getMdxFiles = (): string[] => {
  const directory = path.resolve("./app", "_blog");
  return fs.readdirSync(directory).filter((file) => path.extname(file) === ".mdx");
};

const getMdxContent = (file: string): MatterI => {
  const filePath = path.join("./app", "_blog", file);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);
  return {
    file,
    data: {
      title: data.title,
      date: data.date,
      blurb: data.blurb,
      content,
    },
  };
};

export const getAllContents = (): MatterI[] => {
  const files = getMdxFiles();
  const contents = files.map((file) => getMdxContent(file));
  return contents;
};

export const getContent = (file: string): string => {
  const allFiles = getMdxFiles();
  const fileName = allFiles.filter((f) => path.parse(f).name === file);
  const content = getMdxContent(fileName[0]);
  return content.data.content;
};
