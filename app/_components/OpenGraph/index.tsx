import { GeistSans } from "geist/font/sans";

export default ({ title, subheader }: { title: string; subheader: string }): JSX.Element => {
  return (
    <div className={GeistSans.className}>
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        <p>{subheader}</p>
      </div>
    </div>
  );
};
