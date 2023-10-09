import { useState } from "react";
import { ArtistContext } from "./context/AppContext";
import AppNavigation from "./navigation/Navigation";

export default function App() {
  const [favorites, setFavorites] = useState([]);
  const addFavorite = (artist) => {
    setFavorites([...favorites, artist]);
  };

  return (
    <ArtistContext.Provider value={{ favorites, addFavorite }}>
      <AppNavigation />
    </ArtistContext.Provider>
  );
}
