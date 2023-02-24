import Author from "src/UI/Author/Author";
import styles from "./Cardpost.module.scss";
import Link from "next/link";
import client from "src/sanity";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";

const Cardpost = ({ post, author }) => {
  const {
    author: authorRef,
    title,
    mainImage,
    publishedAt,
    short_text,
    slug,
  } = post || {};

  const imageProps = useNextSanityImage(client, mainImage);
  const getAuthor = author?.find((author) => author._id === authorRef._ref);

  return (
    <div className={styles.post}>
      <div className={styles.image}>
        <Link href={`/post/${slug.current}`}>
          <Image {...imageProps} alt={title} />
        </Link>
      </div>
      <div className={styles.content}>
        <Link href={`/post/${slug.current}`}>
          <h2 className="h3">{title}</h2>
        </Link>
        <p>{short_text}</p>
        <div className={styles.footer}>
          <Author author={getAuthor} date={publishedAt} />
          <Link href={`/post/${slug.current}`} className="h5">
            Continue Reading &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cardpost;
