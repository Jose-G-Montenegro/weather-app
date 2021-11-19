import React, { useState } from "react";
import { useHistory } from "react-router";

export default function SearchBar({onSearch}) {
  const history = useHistory();
  const [city, setCity] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('')
      history.push('/')
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input type="submit" value="Search" />
    </form>
  );
}
