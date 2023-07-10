import React, { useState } from 'react'
import axios from 'axios';


const Container = () => {

    const [jokes, setJokes] = useState("Random Jokes Will Display Here")
    const endpoint = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"
    const getData = () => {
        axios.get(endpoint)
        .then ((response) => {

          setJokes(response.data.joke)
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        })
      }
  return (
    <>
        <div id="container">
            <p>{jokes}</p>
            <button className='btn btn-success btn-lg' onClick={getData}>Generate Joke</button>
        </div>
    </>
  )
}

export default Container