import Link from "next/link";
import classNames from "classnames";

import styles from "@/_styles/resume.module.css";
import { worksans } from "@/_styles/fonts";
import { Arrow } from "@/_lib/assets";
import Light from "@/_components/layout/Light";

export default (): JSX.Element => {
  return (
    <main>
      <section className="h_100" style={{ overflow: "hidden" }}>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <Link href="/">
              <Arrow fill="var(--font)" height="2rem" style={{ transform: "rotate(180deg)" }} />
            </Link>
            <a
              href="/resume.pdf"
              download
              className={classNames(styles.download, worksans.className)}
            >
              Download
            </a>
            <Light />
          </div>
          <div className={styles.resume_holder}>
            <object
              data="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0&view=fitH&zoom=100"
              type="application/pdf"
              className={styles.resume}
            />
            <p>Can't display resume, but feel free to download it instead!</p>
          </div>
        </div>
      </section>
    </main>
  );
};
