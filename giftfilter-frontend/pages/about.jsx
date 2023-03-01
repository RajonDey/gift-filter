import Head from "next/head";
import styles from "styles/About.module.scss";

const About = () => {
  return (
    <>
      <Head>
        <title>About Us - Giftlawn intro...</title>
      </Head>
      <section className={styles.page}>
        <h1>About Us</h1>
        <p className={styles.headline}>
          Find the perfect gift for every occasion with Giftlawn's curated
          selection of thoughtful and personalized presents.
        </p>
        <h2>Our Mission</h2>
        <p>
          At Giftlawn, our mission is to help you find the perfect gift for
          every occasion. We believe that gift-giving should be easy and
          stress-free, and that the right gift can bring joy and happiness to
          both the giver and the receiver. That's why we've curated a selection
          of thoughtful and personalized presents that are sure to delight
          anyone on your list.
        </p>

        <h2>Meet Our Gift Curators</h2>
        <div className={styles.curatorsContainer}>
          <div className={styles.curator}>
            <img
              // src="https://ca.slack-edge.com/T0285LK1G-UJEBNRTFY-9ce79f2084fe-512"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwaJyaTjO50SfCPOkgJb7EKHpb_Ptii6k4PAu3Vsw-Dg&s"
              alt="Rajon"
              layout="responsive"
              width={500}
              height={500}
            />
            <h3>Rajon</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              lobortis, felis ut lobortis ultrices, nulla urna bibendum enim.
            </p>
          </div>
          <div className={styles.curator}>
            <img
              // src="https://ca.slack-edge.com/T0285LK1G-U03KVB1V3P1-c49542137d0b-512"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwaJyaTjO50SfCPOkgJb7EKHpb_Ptii6k4PAu3Vsw-Dg&s"
              alt="Reshad"
              layout="responsive"
              width={500}
              height={500}
            />
            <h3>Reshad</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              lobortis, felis ut lobortis ultrices, nulla urna bibendum enim.
            </p>
          </div>
        </div>

        <h2>Affiliate Disclosure</h2>
        <p>
          At Giftlawn, we participate in affiliate marketing programs, which
          means that we may earn commissions on purchases made through our
          recommended links or product suggestions. We want to be transparent
          about our affiliate partnerships and assure you that they do not
          affect the price you pay for the products. We only promote products
          and brands that we believe in and that align with our values, and we
          appreciate your support in helping us continue to bring you the best
          gift ideas and shopping experience.
        </p>

        <h2>Contact Us</h2>
        <p>
          Have a question or comment? We'd love to hear from you! Please email
          us at info@giftlawn.com and we'll get back to you as soon as possible.
        </p>
      </section>
    </>
  );
};

export default About;
