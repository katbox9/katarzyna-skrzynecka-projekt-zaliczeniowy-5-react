import styles from "./Form.module.css";
import axios from "axios";
import { useState } from "react";

function Form() {
  const [output, setOutput] = useState();

  function getExchangeRate(event) {
    event.preventDefault();
    const selectValue = event.target.currency.value;
    axios
      .get(
        `https://api.nbp.pl/api/exchangerates/rates/a/${selectValue}/?format=json`
      )
      .then((response) => {
        if (response.data.rates?.[0]?.mid) {
          const inputValue = event.target.amountToBeCalculated.value;
          convertCurrency(response.data.rates[0].mid, inputValue);
        } else {
          setOutput(`Wystąpił błąd`);
        }
      })
      .catch((error) => console.log(error));
  }

  function convertCurrency(rate, inputValue) {
    const total = inputValue * rate;
    setOutput(`to ${total.toFixed(2)} PLN`);
  }
  return (
    <form onSubmit={getExchangeRate}>
      <div className={styles.amountInput}>
        <label htmlFor="amount-to-be-calculated">
          Podaj kwotę do przeliczeń:
        </label>
        <input
          type="number"
          required
          min="0.01"
          step="0.01"
          name="amountToBeCalculated"
        />
      </div>
      <div className={styles.currencySelect}>
        <label htmlFor="currency">Wybierz walutę:</label>
        <select name="currency">
          <option value="eur">EUR</option>
          <option value="usd">USD</option>
          <option value="chf">CHF</option>
        </select>
      </div>
      <button className={styles.submitBtn} type="submit">
        Przelicz
      </button>
      <output className={styles.resultOutput}>{output}</output>
    </form>
  );
}

export default Form;
