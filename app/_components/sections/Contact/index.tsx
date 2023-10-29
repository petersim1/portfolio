import classNames from "classnames";

import styles from "./contact.module.css";
import { worksans, inconsolata } from "@/_lib/fonts";
import { contacts } from "@/_lib/constants";
import { Mirror, Twitter, Linkedin, Github, Mail } from "@/_lib/assets";

export default (): JSX.Element => {
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
    <section className="h_100" id="contact" data-offset-top={0} data-offset-bottom={0}>
      <div className={classNames(styles.content, worksans.className)}>
        <div className={styles.wrapper}>
          <div className={styles.title}>
            <p>
              Feel free to <b>connect</b>
              <br />
              with me. I'd love to hear
              <br />
              what you're <b>building</b>.
            </p>
          </div>
          <div className={classNames(styles.contact_wrapper, inconsolata.className)}>
            {contacts.map((contact, ind) => (
              <a key={ind} href={contact.link} target="_blank" referrerPolicy="no-referrer">
                <div className={styles.contact}>
                  <div className={styles.placeholder}>
                    <Icon type={contact.type} height="30px" style={{ opacity: 1 }} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
