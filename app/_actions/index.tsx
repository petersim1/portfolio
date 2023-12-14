"use server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface GithubI {
  success: boolean;
  stars: number;
  forks: number;
}

interface MdxI {
  file: string;
  data: { [key: string]: any };
  content: string;
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

const getMdxContent = (file: string): MdxI => {
  const filePath = path.join("./app", "_blog", file);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContent);
  return {
    file: file.replace(".mdx", ""),
    data,
    content,
  };
};

export const getAllContents = (): { file: string; data: { [key: string]: any } }[] => {
  const files = getMdxFiles();
  const contents = files
    .map((f) => {
      const { file, data } = getMdxContent(f);
      return { file, data };
    })
    .sort((a, b) => b.data.date - a.data.date);
  return contents;
};

export const getContent = (file: string): { data: any; content: string } => {
  const allFiles = getMdxFiles();
  const fileName = allFiles.filter((f) => path.parse(f).name === file);
  const { data, content } = getMdxContent(fileName[0]);
  return {
    data,
    content,
  };
};
