import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import loadGameDetails from "../actions/gameDetailAction";

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
    // configs for lazy loading images
    const lazyImgConfigs = {
      rootMargin: "100px 0px 0px 0px",
      threshold: 0.5,
    };

    // setting up observer
    const observer = new window.IntersectionObserver(function (entries, self) {
      // iterate observer over each entry
      entries.forEach((entry) => {
        // processing each image that is intersecting
        if (entry.isIntersecting) {
          loadImages(entry.target);

          // stopping the observer when the image is loaded
          self.unobserve(entry.target);
        }
      });
    });
    // get the node object of all the images w/ attribute 'data-src'
    const allImages = document.querySelectorAll("[data-src]");

    // apply observer to each image
    allImages.forEach((image) => {
      observer.observe(image);
    }, lazyImgConfigs);
  }, [game]);

  // function to replace image path from data-src to src in image tag
  const loadImages = (image) => {
    image.src = image.dataset.src;
  };

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
