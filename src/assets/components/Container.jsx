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
          setJokes("Api Error or Network issue");
          console.log(err);
        })
      }
  return (
    <>
        <div id="container">
            <img className='img-fluid mb-3' width={"50px"} src="/Disk-1s-200px.svg" alt="" />
            <p>{jokes}</p>
            <button className='btn btn-lg' onClick={getData}>Generate Joke <i class="fa-solid fa-shuffle"></i></button>
        </div>
    </>
  )
}

export default Container