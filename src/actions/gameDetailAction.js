import axios from "axios";
import { gameDetailsURL, gameScreenshotsURL } from "../utils/api";

const loadGameDetails = (id) => async (dispatch) => {
  dispatch({ type: "LOADING_DETAILS" });
  try {
    const gameDetailsData = await axios.get(gameDetailsURL(id));
    const gameScreenshotsData = await axios.get(gameScreenshotsURL(id));

    dispatch({
      type: "GET_GAME_DETAILS",
      payload: {
        gameDetails: gameDetailsData,
        gameScreenshots: gameScreenshotsData,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

export default loadGameDetails;
