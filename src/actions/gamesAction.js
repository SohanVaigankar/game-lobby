import axios from "axios";

import {
  popularGamesURL,
  upcomingGamesURL,
  newGamesURL,
  searchedGamesURL,
} from "../utils/api";

// Action Creator

// to use thunk , arrow fn can be followed by another arrow fn, also async functionality can be added
export const loadGames = () => async (dispatch) => {
  try {
    // fetching using axios
    const popularGamesData = await axios.get(popularGamesURL());
    const upcomingGamesData = await axios.get(upcomingGamesURL());
    const newGamesData = await axios.get(newGamesURL());
    //   dispatching action to reducer
    dispatch({
      type: "FETCH_GAMES",
      payload: {
        popularGames: popularGamesData.data.results,
        upcomingGames: upcomingGamesData.data.results,
        newGames: newGamesData.data.results,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

export const loadSearchedGames = (game_name) => async (dispatch) => {
  try {
    const searchedGamesData = await axios.get(searchedGamesURL(game_name));

    dispatch({
      type: "FETCH_SEARCHED_GAMES",
      payload: { searchedGames: searchedGamesData.data.results },
    });
  } catch (error) {
    console.error(error);
  }
};
