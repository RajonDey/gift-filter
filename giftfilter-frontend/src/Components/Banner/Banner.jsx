import FilterSection from "../filter-section/FilterSection";
import styles from "./Banner.module.scss";

const Banner = () => {
  return (
    <section className={styles.banner}>
      <h1>
        Find the <span>perfect gift</span> for <span>every occasion.</span>
      </h1>
      <h3>Create unforgettable moments with our gift collection.</h3>
      <FilterSection />
    </section>
  );
};
export default Banner;
