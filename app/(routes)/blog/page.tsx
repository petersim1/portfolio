import { getAllContents } from "@/_actions";

export default async ({ params }: { params: { slug: string } }): Promise<JSX.Element> => {
  const data = await getAllContents();
  console.log(data);
  return <div>{params.slug}</div>;
};
