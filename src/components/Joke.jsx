import React from "react";
import "../styles/Joke.css";
import { getColor, getEmoji } from "../helpers/Helper";

export default function Joke(props) {
  let emoji = getEmoji(props.votes);
  return (
    <div className="Joke">
      <div className="Joke-buttons">
        <i className="fas fa-arrow-up" onClick={props.upvote}></i>
        <span
          className="Joke-votes"
          style={{ borderColor: `${getColor(props.votes)}` }}
        >
          {props.votes}
        </span>
        <i className="fas fa-arrow-down" onClick={props.downvote}></i>
      </div>
      <div className="Joke-text">{props.joke}</div>

      <div className="Joke-smiley">
        <i
          class={emoji}
          aria-role="presentation"
          aria-label="ROLLING ON THE FLOOR LAUGHING"
        ></i>
      </div>
    </div>
  );
}
