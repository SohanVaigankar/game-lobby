const initialState = {
  gameDetails: { platforms: [] },
  gameScreenshots: { results: [] },
  isLoading: true,
};

const gameDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_GAME_DETAILS":
      return {
        ...state,
        gameDetails: action.payload.gameDetails,
        gameScreenshots: action.payload.gameScreenshots,
        isLoading: false,
      };
    case "LOADING_DETAILS":
      return { ...state, isLoading: true };
    default:
      return { ...state };
  }
};

export default gameDetailsReducer;
