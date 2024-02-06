import React from "react";
import Tile from "./Tile";
import Strike from "./Strike";

const Board = ({ tiles, onTileClick, playerTurn, strikeClass }) => {

    const tilesData = [
        {index: 0, className: "right-border bottom-border"},
        {index: 1, className: "right-border bottom-border"},
        {index: 2, className: "bottom-border"},
        {index: 3, className: "right-border bottom-border"},
        {index: 4, className: "right-border bottom-border"},
        {index: 5, className: "bottom-border"},
        {index: 6, className: "right-border"},
        {index: 7, className: "right-border"},
        {index: 8, className: ""},
    ]

  return (
    <div className="board">
        {tilesData.map((tile)=>(
            <Tile 
              key={tile.index}
              playerTurn={playerTurn}
              onClick={()=>onTileClick(tile.index)}
              value={tiles[tile.index]}
              className={tile.className} />
        ))}
      <Strike strikeClass={strikeClass} />
    </div>
  );
};

export default Board;
