import styles from "./App.module.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Form from "./Form/Form";

function App() {
  return (
    <>
      <Header />
      <main className={styles.mainContainer}>
        <Form />
      </main>

      <Footer />
    </>
  );
}

export default App;
