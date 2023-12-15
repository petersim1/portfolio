import Link from "next/link";

export default (): JSX.Element => {
  return (
    <div style={{ flex: "1 0 0" }}>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/blog">Return Back to Blog</Link>
    </div>
  );
};
