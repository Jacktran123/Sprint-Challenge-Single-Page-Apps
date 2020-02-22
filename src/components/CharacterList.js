import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect  
  const [character,setCharacter]= useState([]);
  useEffect(() => {
     axios
     .get('https://rickandmortyapi.com/api/character/')
     .then(res=> {
       console.log(res);
       setCharacter(res.data.results);
     })
     .catch(error=> console.log(error))
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      {character.map( people => 
        <div key={people.id}>
          <h1>Name:  {people.name} </h1>
          <p> Gender: {people.gender} </p>
          <img src={people.image} />
        </div>
        )}
    </section>
  );
}
