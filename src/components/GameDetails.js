import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// utilities
import getPlatform from "../utils/platformLogos";
import lazyLoadImages from "../utils/lazyLoadImages";

const GameDetails = () => {
  const { gameDetails, gameScreenshots, isLoading } = useSelector(
    (state) => state.gameDetailsReducer
  );

  const navigate = useNavigate();
  // handling scroll of home page when gameDetails page is exited by clicking on the shadow
  const exitDetailsPageHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";

      // redirect to homepage after exiting
      navigate("/");
    }
  };

  // Lazy Loading Images

  // state to keep track of image loading
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  //  useEffect hook to execute lazy loading
  useEffect(() => {
    lazyLoadImages();
  }, [isLoading]);

  return (
    <>
      {
        <div className="card-shadow shadow" onClick={exitDetailsPageHandler}>
          {isLoading ? (
            <div className="loading-screen">
              <h2>Loading...</h2>
            </div>
          ) : (
            <div className="details">
              <div
                className="close-details-btn shadow"
                onClick={exitDetailsPageHandler}
              >
                X
              </div>
              <div className="stats">
                <div className="rating">
                  <h3>{gameDetails.data?.name}</h3>
                  <p>{`Rating: ${gameDetails.data?.rating}//5`}</p>
                </div>
                <div className="info">
                  <h3>Platforms</h3>
                  <div className="platforms">
                    {gameDetails.data?.platforms.map((data) => (
                      <img
                        src={""}
                        data-src={getPlatform(data.platform.name)}
                        key={data.platform.id}
                        alt={data.platform.name}
                        onLoad={() => setIsImageLoaded(true)}
                        className={isImageLoaded ? "loaded" : "loading"}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="media">
                <img
                  src={""}
                  data-src={gameDetails.data?.background_image}
                  alt="background theme"
                  onLoad={() => setIsImageLoaded(true)}
                  className={isImageLoaded ? "loaded" : "loading"}
                />
              </div>
              <div className="description">
                <p>{gameDetails.data?.description_raw}</p>
              </div>
              <div className="gallery">
                {gameScreenshots.data?.results.map((data) => (
                  <img
                    key={data.id}
                    src={""}
                    data-src={data.image}
                    alt={`${gameDetails.data?.name} screenshot`}
                    onLoad={() => setIsImageLoaded(true)}
                    className={isImageLoaded ? "loaded" : "loading"}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      }
    </>
  );
};

export default GameDetails;
