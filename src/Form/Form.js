import "./Form.css";
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
      .then((response) => convertCurrency(response.data.rates[0].mid, event))
      .catch((error) => console.log(error));
  }

  function convertCurrency(rate, event) {
    const inputValue = event.target.amountToBeCalculated.value;
    const total = inputValue * rate;
    setOutput(`to ${total.toFixed(2)} PLN`);
  }
  return (
    <form id="currency-container" onSubmit={getExchangeRate}>
      <div className="amount-input">
        <label htmlFor="amount-to-be-calculated">
          Podaj kwotę do przeliczeń:
        </label>
        <input
          type="number"
          required
          min="0.01"
          step="0.01"
          name="amountToBeCalculated"
          id="amount-to-be-calculated"
        />
      </div>
      <div className="currency-select">
        <label htmlFor="currency">Wybierz walutę:</label>
        <select name="currency" id="currency">
          <option value="eur">EUR</option>
          <option value="usd">USD</option>
          <option value="chf">CHF</option>
        </select>
      </div>
      <button className="submit-btn" type="submit" id="btn">
        Przelicz
      </button>
      <output className="result-output" id="result">
        {output}
      </output>
    </form>
  );
}

export default Form;
