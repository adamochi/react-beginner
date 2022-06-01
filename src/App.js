import { useEffect, useState } from "react";
import styles from "./App.module.css";

function App() {
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  const onChange = (event) => {
    setAmount(event.target.value);
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=1000")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div className={styles.coin_party}>
      <h1 className={styles.title}>
        All The Coins! {loading ? "" : `(${coins.length})`}
      </h1>
      <div>
        <label htmlFor="current">Current Crypto Prices </label>
        {loading ? (
          <strong>Loading...</strong>
        ) : (
          <select id="current">
            {coins.map((coin) => (
              <option>
                {coin.name} ({coin.symbol}) ${coin.quotes.USD.price.toFixed(2)}{" "}
                USD
              </option>
            ))}
          </select>
        )}
      </div>
      <h2 className={styles.heading_style_1}>How many coins can you buy?</h2>
      <form>
        <input
          className={styles.inputs}
          onChange={onChange}
          type={"number"}
          placeholder="enter USD $..."
        ></input>
        <h3>with ${amount} you can buy. . .</h3>
      </form>
      {loading ? (
        <strong></strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option>
              {coin.name} ({coin.symbol}) $
              {(amount / coin.quotes.USD.price).toFixed(2)}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
export default App;
/*
import styles from "./App.module.css";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo(""); // we never modify directly with toDos.push X
  };
  console.log(toDos);
  return (
    <form onSubmit={onSubmit}>
      <h1 className={styles.title}>My To Dos ({toDos.length})</h1>
      <input
        onChange={onChange}
        value={toDo}
        type="text"
        placeholder="Write your to do..."
      />
      <button>submit</button>
    </form>
  );
}
*/
/*
import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("I run only once");
  }, []); // [] where dependencies go
  useEffect(() => {
    if (keyword.length > 3) {
      console.log("I run when 'keyword' changes.");
    }
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1 className={styles.title}>Welcome Back to React!</h1>
      <h2>{counter}</h2>
      <button onClick={onClick}>click me</button>
      <Button text={"continue"} />
    </div>
  );
}

*/
