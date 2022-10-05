import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// utilities
import getPlatform from "../utils/platformLogos";

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

  return (
    <>
      {
        <div className="card-shadow shadow" onClick={exitDetailsPageHandler}>
          {isLoading ? (
            <div className="loading-screen">
              <h2>Loading...</h2>
            </div>
          ) : (
            <div className="details" >
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
                        src={getPlatform(data.platform.name)}
                        key={data.platform.id}
                        alt={data.platform.name}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="media">
                <img
                  src={gameDetails.data?.background_image}
                  alt="background theme"
                />
              </div>
              <div className="description">
                <p>{gameDetails.data?.description_raw}</p>
              </div>
              <div className="gallery">
                {gameScreenshots.data?.results.map((data) => (
                  <img
                    key={data.id}
                    src={data.image}
                    alt={`${gameDetails.data?.name} screenshot`}
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
