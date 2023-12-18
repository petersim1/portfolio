import styles from "./projects.module.css";
import { Github, Outlink, Note } from "@/_lib/assets";
import Pill from "@/_components/elements/pill";

interface DataI {
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

export default ({ data }: { data: DataI }): JSX.Element => {
  const getIcon = (type: string): JSX.Element => {
    if (type === "github") {
      return <Github fill="var(--font)" />;
    }
    if (type === "blog") {
      return <Note fill="var(--font)" />;
    }
    return <Outlink fill="var(--font)" />;
  };

  return (
    <div className={styles.project}>
      <div className={styles.outgoing}>
        <div className={styles.info}>
          <h4>
            <b>{data.title}</b>
          </h4>
          {/* <p>{data.year}</p> */}
        </div>
        <div
          className={styles.image}
          style={{ backgroundImage: `url(${data.description.image})` }}
        />
        <div className={styles.links}>
          {data.description.links.map((link, ind2) => (
            <a
              key={ind2}
              href={link.link}
              target="_blank"
              referrerPolicy="no-referrer"
              className={styles.link}
            >
              {getIcon(link.type)}
            </a>
          ))}
          {data.description.links.length === 0 && (
            <span style={{ margin: "auto" }}>{"[proprietary]"}</span>
          )}
        </div>
      </div>
      <div className={styles.text}>
        <div className={styles.blurb}>{data.description.text}</div>
        <div className={styles.tag_holder}>
          {data.description.tools.concat(data.description.languages).map((tool, ind2) => (
            <Pill text={tool} key={ind2} />
          ))}
        </div>
      </div>
    </div>
  );
};
