import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/abot-us">
          <h1>Hello</h1>
        </Route>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

// npm i react-router-dom@5.3.0
// react router allows us to navigate pages npm install react-router-dom
// routes are screens. we will have a home route for the movie list,
// when we use a map, react js makes us give a key to the elements
/*
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true); // first one is the data, 2nd is the function that will modify the data
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("https://www.omdbapi.com/?i=tt3896198&apikey=401a796f")
      .then((response) => response.json())
      .then((json) => {
        setMovies(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <main>
          <h1>{movies.Title}</h1>
          <h2>imdb Rating: {movies.imdbRating}</h2>
          <h4>imdb ID: {movies.imdbID}</h4>
          <p>{movies.Plot}</p>
          <div>
            <img src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg" />
          </div>
          <div>{movies.Poster}</div>
        </main>
      )}
    </div>
  );
}
*/
/*
import { useEffect, useState } from "react";
import style from "./App.module.css";

function App() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [amount, setAmount] = useState(0);
  const onChange = (event) => {
    setAmount(event.target.value);
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json); // to show our data, we put it on the state
        setLoading(false);
      });
  }, []);
  return (
    <div className={style.coin_party}>
      <h1 className={style.title}>All the Coins! ({coins.length})</h1>
      {loading ? (
        <strong>Loading. . .</strong>
      ) : (
        <select>
          {coins.map((potato) => (
            <option>
              {potato.name} ({potato.symbol}) $
              {potato.quotes.USD.price.toFixed(2)} USD
            </option> // the potato value in this case means each potato inside of the coins array
          ))}
        </select>
      )}
      <h2 className={style.heading_style_1}>How many coins can you buy. . .</h2>
      <input
        className={style.inputs}
        type={"number"}
        placeholder="enter USD. . ."
        onChange={onChange}
      ></input>
      <h4 className={style.heading_style_1}>
        With ${amount} USD, you can buy. . .
      </h4>
      {loading ? (
        <strong>Loading. . .</strong>
      ) : (
        <select>
          {coins.map((potato) => (
            <option>
              {potato.name} ({potato.symbol}) $
              {(amount / potato.quotes.USD.price).toFixed(2)}
            </option> // the potato value in this case means each potato inside of the coins array
          ))}
        </select>
      )}
    </div>
  );
}
*/
/*
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
*/
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
