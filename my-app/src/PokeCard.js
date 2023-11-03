import React from 'react';
import './PokeCard.css';

const POKE_API = 'https://raw.githubusercontent.com/' +
  'PokeAPI/sprites/master/sprites/pokemon/';

  const PokeCard = (props) => {
    let imgSrc = `${POKE_API}${props.id}.png`;

    return(
        <div className="PokeCard">
            <div className="Pokecard-title">{props.name}</div>
            <img className="Pokecard-img" src={imgSrc} />
            <div className="Pokecard-type">{props.type}</div>
            <div className="Pokecard-type">{props.exp}</div>
        </div>
    )
  }
  export default PokeCard;