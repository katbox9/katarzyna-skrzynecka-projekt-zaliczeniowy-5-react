import styles from "./Header.module.css";
import Coins from "../assets/coins-logo-200x200.jpg";

function Header() {
  return (
    <header className={styles.headerContainer}>
      <div>
        <img src={Coins} alt="coins-logo" width="100" height="100" />
      </div>

      <div className="titleApp-Container">
        <h1>Przelicznik walut</h1>
      </div>
    </header>
  );
}

export default Header;
