import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Search_Input.module.css";

import Search from "../../assets/icons/search.svg";
import Reset from "../../assets/icons/x.svg";
import ArrowRight from "../../assets/icons/arrow-left.svg";

export default function SearchInput() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query) {
      navigate(`/search/${query}`);
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    setQuery("");
  };

  return (
    <form className={styles.form_container} onSubmit={handleSearch}>
      <div className={styles.form_input_container}>
        <img className={styles.search_icon} src={Search}></img>
        <input
          className={styles.form_search_input}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="O que deseja encontrar?"
        />
      </div>
      <div className={styles.form_buttons}>
        <button className={styles.form_reset_button} disabled={!query} onClick={handleReset}>
          <img className={styles.erase_icon} src={Reset}></img>
        </button>
        <button className={styles.form_input_submit} disabled={!query} type="submit">
          <img className={styles.arrow_right_icon} src={ArrowRight}></img>
        </button>
      </div>
    </form>
  );
}
