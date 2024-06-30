import styles from "./Email.module.css";
import Link from "next/link";

const Email: React.FC = () => {
  return (
    <div className={styles.email}>
      <Link className={styles.link} href="mailto:NitinGopalaKr.Sontineni@stonybrook.edu">
          NitinGopalaKr.Sontineni@stonybrook.edu
      </Link>
      <div className={styles.line} />
    </div>
  );
};

export default Email;
