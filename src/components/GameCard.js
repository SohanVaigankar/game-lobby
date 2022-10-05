import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import loadGameDetails from "../actions/gameDetailAction";

const Game = ({ game }) => {
  const dispatch = useDispatch();

  const loadGameDetailsHandler = () => {

    // code to stop background scroll when game details are opened
    document.body.style.overflow = "hidden";

    // loading game details
    dispatch(loadGameDetails(game.id));
  };

  return (
    <Link to={`/game/${game.id}`}>
      <div  className="game-card" onClick={loadGameDetailsHandler}>
        <h3 >{game.name}</h3>
        <p>{`Release date : ${game.released}`}</p>
        <img src={game.background_image}  alt={`${game.name} title theme`} />
      </div>
    </Link>
  );
};

export default Game;
