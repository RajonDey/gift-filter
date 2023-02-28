import Head from "next/head";
import styles from "styles/Home.module.scss";

const About = () => {
  return (
    <>
      <Head>
        <title>About Us - Giftlawn intro...</title>
      </Head>
      <section className={styles.page}>
        <h1>About Us</h1>
        <p>
          Welcome to our website! We are a team of passionate developers who
          love creating awesome websites using Next.js.
        </p>
      </section>
    </>
  );
};

export default About;
