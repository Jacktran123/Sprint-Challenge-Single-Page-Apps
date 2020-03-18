import React, { useEffect, useState } from "react";
import axios from 'axios';
import Button from './Button';
import {Button as Button1} from 'reactstrap';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect  
  const [searchTerm, setSearchTerm]=useState('');
  const [result, setResult]= useState([]);

  useEffect(() => {
     axios
     .get('https://rickandmortyapi.com/api/character/')
     .then(res=> {
       console.log(res);
       setResult(res.data.results);
     })
     .catch(error=> console.log(error))
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [searchTerm]);
 const submit=event=>{
   event.preventDefault(); 
   const resultTwo= result.filter(char=> char.name.toLowerCase().includes(searchTerm.toLowerCase()))
   if (resultTwo.length === 0){
       window.alert('No character with the name you are looking for exist in our database');
      setResult([]);
   }
   setResult(resultTwo);
   
 };

   const handleChange=event=>{
     setSearchTerm(event.target.value);
   }

  return (
    
      
   
    <section className="character-list">
      <form onSubmit={submit}>
      <label>
       Name:
         <input id='Name' type='text' name='textField' value={searchTerm} onChange={handleChange}/>
         </label>
         <Button1  type='submit' className='ml-3' color='primary'> Search </Button1>
       </form>
      
      {result.map( people => 
        <div key={people.id}>
          <h1>Name:  {people.name} </h1>
          <p> Gender: {people.gender} </p>
          <img src={people.image} alt='' />
        </div>
        )}
        
       
    </section>
  
  );
      }
