import classNames from "classnames";
import { useMemo, useState, useEffect } from "react";

import styles from "@/styles/contact.module.css";
import { worksans } from "@/styles/fonts";
import { contacts } from "@/constants";
import { Mirror, Twitter, Linkedin, Github, Mail } from "@/assets";
import ContactItem from "../contact";

const Contact = ({progress}: {progress: number}): JSX.Element => {

  const [social, setSocial] = useState("");
  const [prevSocial, setPrevSocial] = useState("");
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (social !== prevSocial) {
      let shrink = typed.length > 0;
      let ind = prevSocial.length;
      const interval = setInterval(() => {
        if (shrink) {
          setTyped(prevSocial.substring(0,ind))
          ind--
          if (ind < 0) {
            shrink = false;
            ind = 1;
          }
        } else {
          setTyped(social.substring(0,ind))
          ind++
          if (ind > social.length) {
            clearInterval(interval);
          }
        }
      }, 20);
      setPrevSocial(social);
    }
  }, [social])

  const position = useMemo(() => {
    return [
      31 + (100 - 31)*progress/100,
      0 + (100 - 0)*progress/100,
      10 + (100 - 10)*progress/150,
      31 + (100 - 31)*progress/150,
      20 + (100 - 20)*progress/100,
    ]
  },[progress]);

  return (
    <section className="h_150" id="contact">
      <div className={classNames(styles.content, worksans.className)}>
        <div className={styles.title}>
          <h3>
            <b>Get in Contact</b>
          </h3>
        </div>
        <div className={styles.code_box}>
          <code>{`% cd socials && python init_follow.py ${typed}`}<span /></code>
        </div>
        <div className={styles.contact_wrapper}>
          {contacts.map((contact, ind) => (
            <ContactItem {...contact} setSocial={setSocial} key={ind}/>
          ))}
        </div>
      </div>
      <div className={styles.parallax_group}>
        <div className={styles.parallax_layer} style={{bottom: `${position[0]}%`}}>
          <Mirror width="30px" />
        </div>
        <div className={styles.parallax_layer} style={{bottom: `${position[1]}%`}}>
          <Twitter width="45px" fill="#1DA1F2"/>
        </div>
        <div className={styles.parallax_layer} style={{bottom: `${position[2]}%`}}>
          <Github width="30px" fill="var(--font)"/>
        </div>
        <div className={styles.parallax_layer} style={{bottom: `${position[3]}%`}}>
          <Linkedin width="45px" fill="#0072b1"/>
        </div>
        <div className={styles.parallax_layer} style={{bottom: `${position[4]}%`}}>
          <Mail width="30px" fill="var(--font)"/>
        </div>
      </div>
    </section>
  );
};

export default Contact;
