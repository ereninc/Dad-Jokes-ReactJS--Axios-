import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/JokeList.css";
import Joke from "./Joke";

export default function JokeList() {
  const numOfJokes = 10;
  const [jokes, setJokes] = useState(
    JSON.parse(window.localStorage.getItem("jokes")) || []
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (jokes.length === 0) {
      for (let i = 0; i < numOfJokes; i++) {
        fetchData();
      }
    }
  }, []);

  async function fetchData() {
    setIsLoading(true);
    console.log("Fetching data...");
    const response = await axios.get("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" },
    });
    const newJoke = {
      id: response.data.id,
      joke: response.data.joke,
      votes: 0,
    };
    setIsLoading(false);
    console.log("Data fetched!");
    setJokes((jokes) => [newJoke, ...jokes]);
  }

  //   console.log(jokes);

  function handleVote(id, delta) {
    setJokes((jokes) =>
      jokes.map((j) => (j.id === id ? { ...j, votes: j.votes + delta } : j))
    );
  }

  function handleClick() {
    fetchData();
  }

  window.localStorage.setItem("jokes", JSON.stringify(jokes));

  return (
    <div className="JokeList">
      <div className="JokeList-sidebar">
        <h1 className="JokeList-title">
          <span>Dad</span> Jokes
        </h1>
        <img
          src="https://freepngimg.com/thumb/emoji/5-2-face-with-tears-of-joy-emoji-png.png"
          alt="Kanye"
          className="JokeList-img"
        />
        <button className="JokeList-getmore" onClick={handleClick}>
          New Joke!
        </button>
      </div>

      {/* {isLoading ? (
        <div className="JokeList-spinner">
          <i className="far fa-8x fa-laugh fa-spin"></i>
          <h1 className="JokeList-title">Loading...</h1>
        </div>
      ) : (
        <div className="JokeList-jokes">
          {}
        </div>
      )} */}

      <div className="JokeList-jokes">
        {isLoading ? (
          <div className="JokeList-spinner">
            <i className="far fa-8x fa-laugh fa-spin"></i>
            <h1 className="JokeList-title">Loading...</h1>
          </div>
        ) : (
          jokes.map((joke) => (
            <Joke
              key={joke.id}
              joke={joke.joke}
              votes={joke.votes}
              id={joke.id}
              upvote={() => handleVote(joke.id, 1)}
              downvote={() => handleVote(joke.id, -1)}
            />
          ))
        )}
      </div>
    </div>
  );
}
