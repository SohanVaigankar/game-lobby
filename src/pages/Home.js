import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

// action function
import { loadGames } from "../actions/gamesAction";

// components
import Game from "../components/GameCard";
import GameDetails from "../components/GameDetails";

const Home = () => {
  // current param
  let gameID = useParams().id;

  // hook to access redux dispatch fn
  const dispatch = useDispatch();

  // loading games when home route is hit and storing it in redux store
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  // getting data back from store using useSelector
  const { popularGames, upcomingGames, newGames, searchedGames, isLoading } =
    useSelector((state) => state.gamesReducer);

  //   fn to clear searched games
  const clearSearchedGames = () => {
    dispatch({ type: "CLEAR_SEARCHED_GAMES" });
  };

  return (
    <div className="game-list">
      {isLoading ? (
        <div className="loading-screen">
          <h2>Loading...</h2>
        </div>
      ) : (
        gameID && <GameDetails />
      )}

      {searchedGames.length ? (
        <div className="searched">
          <div className="clear-searched-games">
            <img
              src={require("../img/dustbin_icon.png")}
              onClick={clearSearchedGames}
              alt="dustbin logo"
            />
          </div>

          <h2>Searched Games</h2>
          <div className="games">
            {searchedGames.map((game) => (
              <Game key={game.id} game={game} />
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
      <h2>Upcoming Games</h2>
      <div className="games">
        {upcomingGames.map((game) => (
          <Game key={game.id} game={game} />
        ))}
      </div>
      <h2>New Games</h2>
      <div className="games">
        {newGames.map((game) => (
          <Game key={game.id} game={game} />
        ))}
      </div>
      <h2>Popular Games</h2>
      <div className="games">
        {popularGames.map((game) => (
          <Game key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default Home;
