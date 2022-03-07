import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
const Card = ({ id, name, url }) => {
  const [pokeinfo, setPokeInfo] = useState({});

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(url);
      // console.log(result.data);
      setPokeInfo({
        exp: result.data.base_experience,
        height: result.data.height,
        weight: result.data.weight,
        image: result.data.sprites.other.dream_world.front_default,
        type: result.data.types[0].type.name,
      });
    };

    fetchItems();
  }, []);
  const style = pokeinfo.type + " pokemon-card";
  return (
    <div className={style} key={name}>
      <img className="pokemon-img" src={pokeinfo.image}></img>
      <div className="pokemon-info">
        <h3>{name}</h3>
        <p>Experience : {pokeinfo.exp}</p>
        <p>Height : {pokeinfo.height} m </p>
        <p>Weight : {pokeinfo.weight} kg</p>
        <p>Type : {pokeinfo.type}</p>
      </div>
    </div>
  );
};

export default Card;
