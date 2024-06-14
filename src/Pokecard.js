import React from "react";

const PokeAPI = 
"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

/** Individual pokemon card. */

function Pokecard(props){
    const { name, type, id } = props;
    let imgSrc = `${PokeAPI}${id}.png`
    return(
        <div className="Pokecard">
            <div className="Pokecard-title">{name}</div>
            <img className="Pokecard-image" src={imgSrc}/>
            <div className="Pokecard-type">Type: {type}</div>
        </div>
    );
}

export default Pokecard;