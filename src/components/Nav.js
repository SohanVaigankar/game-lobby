import React, { useState } from "react";
import { motion } from "framer-motion";

import { loadSearchedGames } from "../actions/gamesAction";
import { useDispatch } from "react-redux";

const Nav = () => {
  const dispatch = useDispatch();

  //   state to store searchbar change state
  const [searchQuery, setSearchQuery] = useState("");

  // fn to update input values to the state
  const inputHandler = (e) => {
    setSearchQuery(e.target.value);
  };

  //   fn to handle form submission
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(loadSearchedGames(searchQuery));
    setSearchQuery("");
  };

 

  return (
    <motion.nav>
      <motion.div className="logo">
        <h1>Game Lobby</h1>
      </motion.div>
      <form className="search">
        <input type="text" onChange={inputHandler} value={searchQuery} />
        <button type="submit" onClick={submitHandler}>
          Search
        </button>
      </form>
    </motion.nav>
  );
};

export default Nav;
