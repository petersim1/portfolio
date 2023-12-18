// import Link from "next/link";
import classNames from "classnames";

import { Text, TextShadow } from "@/_components/elements/Text";
import styles from "../styled.module.css";
import { worksans } from "@/_lib/fonts";
import { contacts } from "@/_lib/constants";
import { Mirror, Twitter, Linkedin, Github, Mail } from "@/_lib/assets";
// import { Branch, Star, Arrow } from "@/_lib/assets";
// import { github } from "@/_actions";

export default (): JSX.Element => {
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
    <footer className={worksans.className}>
      <div className={styles.footer}>
        <Text size="xs">
          ~ built by{" "}
          <b>
            <TextShadow>peter simone</TextShadow>
          </b>{" "}
          using nextjs ~
        </Text>
        <div className={classNames(styles.contact_wrapper)}>
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
