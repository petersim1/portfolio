"use client";

import classNames from "classnames";
import { useState, useEffect, useContext } from "react";

import { ScrollContext } from "@/_state";
import styles from "@/_styles/contact.module.css";
import { worksans, spacemono, inconsolata } from "@/_styles/fonts";
import { contacts } from "@/_lib/constants";
import { Mirror, Twitter, Linkedin, Github, Mail } from "@/_lib/assets";

const Contact = (): JSX.Element => {
  const [social, setSocial] = useState("");
  const [prevSocial, setPrevSocial] = useState("");
  const [typed, setTyped] = useState("");

  const { progress } = useContext(ScrollContext);
  const iProgress = progress.length > 0 ? progress[4] : 0;

  useEffect(() => {
    if (social !== prevSocial) {
      let shrink = typed.length > 0;
      let ind = prevSocial.length;
      const interval = setInterval(() => {
        if (shrink) {
          setTyped(prevSocial.substring(0, ind));
          ind--;
          if (ind < 0) {
            shrink = false;
            ind = 1;
          }
        } else {
          setTyped(social.substring(0, ind));
          ind++;
          if (ind > social.length) {
            clearInterval(interval);
          }
        }
      }, 20);
      setPrevSocial(social);
    }
  }, [social]);

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

  const powers = [1.25, 1.2, 1.15, 1.1, 1];

  return (
    <section className="h_200" id="contact" data-offset-top={0} data-offset-bottom={-10}>
      <div className={classNames(styles.content, worksans.className)}>
        <div className={styles.title}>
          <h3>
            <b>Get in Contact</b>
          </h3>
        </div>
        <div className={classNames(styles.code_box, spacemono.className)}>
          <code>
            {`% python connect_w_me.py --method ${typed}`}
            <span />
          </code>
        </div>
        <div className={classNames(styles.contact_wrapper, inconsolata.className)}>
          {contacts.map((contact, ind) => (
            <a
              key={ind}
              href={contact.link}
              target="_blank"
              referrerPolicy="no-referrer"
              onMouseEnter={(): void => setSocial(contact.type)}
            >
              <div className={styles.contact}>
                <div className={styles.placeholder}>
                  <Icon
                    type={contact.type}
                    height="30px"
                    style={{ opacity: 0.1, filter: "brightness(0.5)" }}
                  />
                  <Icon
                    type={contact.type}
                    height="30px"
                    style={{
                      left: `calc(max(0px,100vw*(100 - ${Math.pow(iProgress, powers[ind])})/100))`,
                      opacity: Math.min(1, Math.pow(iProgress, powers[ind]) / 200),
                    }}
                  />
                </div>
                <div
                  className={classNames(styles.divider, {
                    [styles.show]: Math.min(1, Math.pow(iProgress, powers[ind]) / 100) >= 1,
                  })}
                />
                <div
                  className={classNames(styles.follow, {
                    [styles.show]: Math.min(1, Math.pow(iProgress, powers[ind]) / 100) >= 1,
                  })}
                >
                  {contact.type === "email" ? "contact" : "follow"}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
