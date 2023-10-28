import classNames from "classnames";

import styles from "@/_styles/projects.module.css";
import { Github, Outlink, Note, Plus, Minus } from "@/_lib/assets";

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

const Project = ({
  ind,
  open,
  data,
  setOpen,
}: {
  ind: number;
  open: number;
  data: DataI;
  setOpen: React.Dispatch<React.SetStateAction<number>>;
}): JSX.Element => {
  const handleOpen = (): void => {
    if (ind === open) {
      setOpen(-1);
    } else {
      setOpen(ind);
    }
  };

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
      <div className={styles.project_header} onClick={handleOpen}>
        <div>{data.title}</div>
        <div className={styles.divider} />
        <div>{data.year}</div>
        <div className={classNames(styles.plus_minus, { [styles.open]: open === ind })}>
          {open === ind ? <Minus fill="var(--font)" /> : <Plus fill="var(--font)" />}
        </div>
      </div>
      <div className={classNames(styles.content, { [styles.open]: open === ind })}>
        <div className={styles.outgoing}>
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
          <div>
            <div className={styles.holder}>
              {data.description.languages.map((language, ind2) => (
                <div key={ind2} className={styles.item}>
                  {language}
                </div>
              ))}
            </div>
            <div className={styles.holder}>
              {data.description.tools.map((tool, ind2) => (
                <div key={ind2} className={styles.item}>
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
