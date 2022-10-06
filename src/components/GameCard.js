import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import loadGameDetails from "../actions/gameDetailAction";

// utils
import lazyLoadImages from "../utils/lazyLoadImages";

const Game = ({ game }) => {
  // state to keep track of image loading
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const dispatch = useDispatch();

  const loadGameDetailsHandler = () => {
    // code to stop background scroll when game details are opened
    document.body.style.overflow = "hidden";

    // loading game details
    dispatch(loadGameDetails(game.id));
  };

  // intersection observer / lazy loading images
  useEffect(() => {
    lazyLoadImages();
  }, [game]);

  return (
    <Link to={`/game/${game.id}`}>
      <div className="game-card" onClick={loadGameDetailsHandler}>
        <h3>{game.name}</h3>
        <p>{`Release date : ${game.released}`}</p>
        <img
          src={""}
          data-src={game.background_image}
          alt={`${game.name} title theme`}
          onLoad={() => setIsImageLoaded(true)}
          className={isImageLoaded ? "loaded" : "loading"}
        />
      </div>
    </Link>
  );
};

export default Game;
