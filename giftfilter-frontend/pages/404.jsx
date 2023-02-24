import Error from "src/UI/Error/Error";
import styles from "styles/Custom404.module.scss";

const Custom404 = () => {
  return (
    <section className={styles.section}>
      <h1>Oops!! Error 404</h1>
      <Error text="A wise man once asked… If you can't find a page, does it exist?" />
    </section>
  );
};

export default Custom404;
