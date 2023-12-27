import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoIosClose } from "react-icons/io";
import { loadSearchedGames } from "../actions/gamesAction";
import { useDispatch } from "react-redux";

const Nav = () => {
  const dispatch = useDispatch();

  //   state to store searchbar change state
  const [searchQuery, setSearchQuery] = useState("");

  // fn to update input values to the state
  const inputHandler = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  };

  const handleClick = () => {
    dispatch({ type: "CLEAR_SEARCHED_GAMES" });
    setSearchQuery("");
  };

  //   fn to handle form submission
  const submitHandler = (e) => {
    e.preventDefault();
    if (searchQuery) {
      dispatch(loadSearchedGames(searchQuery));
    }
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
        {searchQuery && (
          <IoIosClose className="clear_button" onClick={handleClick} />
        )}
      </form>
    </motion.nav>
  );
};

export default Nav;
