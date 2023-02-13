import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/JokeList.css";

export default function JokeList() {
  const numOfJokes = 10;
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    let joke = "";
    const fetchData = async () => {
      try {
        axios
          .get("https://icanhazdadjoke.com/", {
            headers: {
              Accept: "application/json",
            },
          })
          .then((res) => {
            joke = res.data.joke;
            setJokes((jokes) => [...jokes, joke]);
          })
          .catch((err) => console.log(err));
      } catch (error) {
        throw error;
      }
    };

    for (let i = 0; i < numOfJokes; i++) {
      fetchData();
    }
  }, []);

  console.log(jokes);
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
        <button className="JokeList-getmore">New Joke!</button>
      </div>

      <div className="JokeList-jokes">
        {jokes.map((joke, i) => (
          <div key={i}>{joke}</div>
        ))}
      </div>
    </div>
  );
}
