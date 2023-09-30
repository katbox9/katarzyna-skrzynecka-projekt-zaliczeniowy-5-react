import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      Aplikacja korzysta z kursów walut publikowanych na stronach Narodowego
      Banku Polskiego.
    </footer>
  );
}

export default Footer;
