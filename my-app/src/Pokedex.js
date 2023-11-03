import React from "react";
import PokeCard from "./PokeCard";
import "./Pokedex.css";

// index of Pokemon : shows card 


const Pokedex = (props) => {
let winner = null;
if (props.isWinner){
    winner = <p className="Pokedex-winner">YOU WIN!!</p>;

}
return (
    <div className="Pokedex">
        <h2 className="Pokedex-title">Pokedex</h2>
        <div className="Pokedex-card">
        {props.pokemon.map(p => (
          <PokeCard
            id={p.id}
            name={p.name}
            type={p.type}
            exp={p.base_experience}
          />
        ))} 
        </div>
        <h4 className="Pokedex-footer">TOTAL EXP: {props.exp} </h4>
        {winner}
    </div>
)
}

export default Pokedex;