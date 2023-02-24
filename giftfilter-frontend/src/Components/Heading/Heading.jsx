import styles from "./Heading.module.scss";
import { BiSearchAlt } from "react-icons/bi";
import Logo from "src/UI/Logo/Logo";

const Heading = () => {
  return (
    <section className={styles.heading}>
      <Logo />
      <div className={styles.search}>
        <form action="/">
          <label htmlFor="search">Search</label>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search here..."
          />
          <button className={styles.button}>
            <BiSearchAlt />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Heading;
