import styles from "@/styles/contact.module.css";

const ContactItem = ({type, link, setSocial}: {type: string; link: string; setSocial: React.Dispatch<React.SetStateAction<string>>}): JSX.Element => {

  return (
    <a href={link} target="_blank" referrerPolicy="no-referrer" onMouseEnter={() => setSocial(type)}>
      <div className={styles.contact}>
        <div>{type}</div>
      </div>
    </a>
  );
};

export default ContactItem;
