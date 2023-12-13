import fs from "fs";
import path from "path";
import matter from "gray-matter";

const getMDXFiles = (): string[] => {
  const directory = path.resolve("./app", "_blog");
  return fs.readdirSync(directory).filter((file) => path.extname(file) === ".mdx");
};

const readPath = (): any[] => {
  const files = getMDXFiles();
  const contents = files.map((file) => {
    const filePath = path.join("./app", "_blog", file);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);
    return { data, content };
  });
  return contents;
};

export default async ({ params }: { params: { slug: string } }): Promise<JSX.Element> => {
  const data = await readPath();
  console.log(data);
  return <div>{params.slug}</div>;
};
