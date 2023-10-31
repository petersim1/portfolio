// import Link from "next/link";
import classNames from "classnames";

import styles from "./layout.module.css";
import { inconsolata } from "@/_lib/fonts";
import { contacts } from "@/_lib/constants";
import { Mirror, Twitter, Linkedin, Github, Mail } from "@/_lib/assets";
// import { Branch, Star, Arrow } from "@/_lib/assets";
// import { github } from "@/_actions";

export default async (): Promise<JSX.Element> => {
  // const { stars, forks } = await github();
  const Icon = (props: React.HTMLProps<SVGElement>): JSX.Element => {
    const { type, ...rest } = props;

    if (type === "twitter") {
      return <Twitter {...rest} fill="#1DA1F2" />;
    }
    if (type === "github") {
      return <Github {...rest} fill="var(--font)" />;
    }
    if (type === "email") {
      return <Mail {...rest} fill="var(--font)" />;
    }
    if (type === "linkedin") {
      return <Linkedin {...rest} fill="#0072b1" />;
    }
    return <Mirror {...rest} />;
  };
  return (
    <footer className={inconsolata.className}>
      <div className={styles.footer}>
        <div>
          ~ built by <b>peter simone</b> using nextjs ~
        </div>
        <div className={classNames(styles.contact_wrapper, inconsolata.className)}>
          {contacts.map((contact, ind) => (
            <a key={ind} href={contact.link} target="_blank" referrerPolicy="no-referrer">
              <div className={styles.contact}>
                <Icon type={contact.type} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
