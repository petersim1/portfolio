export default async ({ params }: { params: { slug: string } }): Promise<JSX.Element> => {
  return <div>{params.slug}</div>;
};
