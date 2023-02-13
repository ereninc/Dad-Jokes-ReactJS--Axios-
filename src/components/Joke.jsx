import React from "react";
import "../styles/Joke.css";

export default function Joke(props) {
  return (
    <div className="Joke">
      <div className="Joke-buttons">
        <i className="fas fa-arrow-up" onClick={props.upvote}></i>
        <span className="Joke-votes">{props.votes}</span>
        <i className="fas fa-arrow-down" onClick={props.downvote}></i>
      </div>
      <div className="Joke-text">{props.joke}</div>

      {/* <div className="Joke-smiley">
        <i className="far fa-smile">
          <span className="Joke-smiley-text"></span>
        </i>
      </div> */}
    </div>
  );
}
