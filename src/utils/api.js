// base url
const api = `https://api.rawg.io/api/`;

// funtion to get day
const getCurrentDate = () => {
  const date = new Date().getDate() + 1;
  return date < 10 ? `0${date}` : date;
};

// funtion to get month
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  return month < 10 ? `0${month}` : month;
};

// funtion to get month
const getCurrentYear = new Date().getFullYear();

const lastYearDate = `${
  getCurrentYear - 1
}-${getCurrentMonth()}-${getCurrentDate()}`;
const currentYearDate = `${getCurrentYear}-${getCurrentMonth()}-${getCurrentDate()}`;
const nextYearDate = `${
  getCurrentYear + 1
}-${getCurrentMonth()}-${getCurrentDate()}`;

// popular games
export const popularGamesURL = () =>
  `${api}games?key=${process.env.REACT_APP_RAWG_API_KEY}&dates=${lastYearDate},${currentYearDate}&ordering=-rating&page_size=10`;

// upcoming games
export const upcomingGamesURL = () =>
  `${api}games?key=${process.env.REACT_APP_RAWG_API_KEY}&dates=${currentYearDate},${nextYearDate}&ordering=-added&page_size=10`;

// new games
export const newGamesURL = () =>
  `${api}games?key=${process.env.REACT_APP_RAWG_API_KEY}&dates=${lastYearDate},${currentYearDate}&ordering=-released&page_size=10`;

// Game Details
export const gameDetailsURL = (game_id) =>
  `${api}games/${game_id}?key=${process.env.REACT_APP_RAWG_API_KEY}`;

// Game Screenshots
export const gameScreenshotsURL = (game_id) =>
  `${api}games/${game_id}/screenshots?key=${process.env.REACT_APP_RAWG_API_KEY}`;

// searched game

export const searchedGamesURL = (game_name) =>
  `${api}games?key=${process.env.REACT_APP_RAWG_API_KEY}&search=${game_name}?&page_size=9`;
