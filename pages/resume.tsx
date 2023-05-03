import Link from "next/link";
import classNames from "classnames";

import styles from "@/styles/resume.module.css";
import { worksans } from "@/styles/fonts";
import { Arrow } from "@/assets";
import Light from "@/components/layout/Light";

const Page = (): JSX.Element => {
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
            <embed
              src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0&view=fitH&zoom=120"
              type="application/pdf"
              className={styles.resume}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
