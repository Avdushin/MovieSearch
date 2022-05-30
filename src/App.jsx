import { useState, useEffect } from "react";
import MoveList from "./filmsList";

import FILMS_DATA from './FILMS_DATA.json';

const filtermoves = (searchText, listOfmoves) => {
  if (!searchText) {
    return listOfmoves;
  }
  return listOfmoves.filter(({ move_name, move_genre }) =>
    move_name.toLowerCase().includes(searchText.toLowerCase()) ||  
    move_genre.toLowerCase().includes(searchText.toLowerCase()) 
  );
}
const data = FILMS_DATA;


function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const [moveList, setMoveList] = useState(data);


  useEffect(() => {
    document.title = "Movie Search";
    const Debounce = setTimeout(() => {
      const filteredmoves = filtermoves(searchTerm, data);
      setMoveList(filteredmoves);
    }, 300);

    return () => clearTimeout(Debounce);
  }, [searchTerm]);

  return (
    <div className="container">
      <div className="live-search"><h1>MovieSerch</h1></div>
      <div className="input-text">
        <input className="search-input"
          type="text"
          placeholder="Search film"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <MoveList className="moveres" moveList={moveList} />
        
      </div>
    </div>
  );
}

export default App;
