import Link from "next/link";
import { getAllContents } from "@/_actions";

export default (): JSX.Element => {
  const datas = getAllContents();
  return (
    <div>
      {datas.map((data, ind) => (
        <div key={ind}>
          <Link href={`/blog/${data.file}`} prefetch={true}>
            <p>{data.data.title}</p>
            <p>{data.data.date.toString()}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};
