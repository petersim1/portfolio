import styles from "@/styles/projects.module.css";

const Project = ({
  ind,
  open,
  data,
  setOpen,
}: {
  ind: number;
  open: number;
  data: any;
  setOpen: React.Dispatch<React.SetStateAction<number>>;
}): JSX.Element => {
  const handleOpen = (): void => {
    if (ind === open) {
      setOpen(-1);
    } else {
      setOpen(ind);
    }
  };

  return (
    <div className={styles.project}>
      <div className={styles.project_header} onClick={handleOpen}>
        <div>{data.title}</div>
        <div className={styles.divider} />
        <div>{data.year}</div>
        <div className={styles.arrow}>
          <img src="/images/arrow.svg" alt="arrow" />
        </div>
      </div>
      <div style={{ width: "100%", height: "50px", display: open === ind ? "block" : "none" }} />
    </div>
  );
};

export default Project;
