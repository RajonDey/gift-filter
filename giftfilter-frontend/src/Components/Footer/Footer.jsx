import Logo from "src/UI/Logo/Logo";
import styles from "./Footer.module.scss";
import Link from "next/link";
import { RiInstagramFill } from "react-icons/ri";
import { BsPinterest } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";

const social = [
  { component: <RiInstagramFill />, url: "#" },
  { component: <BsPinterest />, url: "#" },
  { component: <FaTiktok />, url: "#" },
  { component: <BsFacebook />, url: "#" },
];

const Footer = () => {
  const renderSocial = social.map((el, i) => (
    <a href={el.url} key={i}>
      {el.component}
    </a>
  ));

  return (
    <footer className={styles["footer-wrapper"]}>
      <div className={styles.footer}>
        <div className={styles.content}>
          <Logo />
          <p>
            Find the perfect gift for every occasion with Giftlawn's curated
            selection of thoughtful and personalized presents.
          </p>
          <div className={styles.social}>{renderSocial}</div>
        </div>
        <div className={styles.menu}>
          <ul>
            <li>
              <Link href="/about">About US</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/terms-policies">Terms & Policies</Link>
            </li>
            <li>
              <Link href="/sitemap">Sitemap</Link>
            </li>
          </ul>
        </div>
      </div>
      <p className={styles.copy}>© 2023, Giftlawn. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
