import "./App.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Form from "./Form/Form";

function App() {
  return (
    <>
      <Header />
      <main className="mainContainer">
        <Form />
      </main>

      <Footer />
    </>
  );
}

export default App;
