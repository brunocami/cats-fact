import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../styles/Cats.css"


function Cats() {


    const API_KEY = "YVMJy5aCUnrcmqSyIG8MDTY0yH7DrOMO"

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [catsFact, setCatsFact] = useState("");
    const [catsGif, setCatsGif] = useState("");

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()

    const GifItem = (string) => {
        axios.get(`https://api.giphy.com/v1/gifs/search?q=${string}&api_key=${API_KEY}`)
            .then((res) => {
                setCatsGif(res.data.data[0].images.original.url)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const CatsFact = () => {
        axios.get("https://catfact.ninja/fact")
            .then((res) => {
                setIsLoaded(true)
                setCatsFact(res.data.fact)
                GifItem(res.data.fact.split(" ").slice(0, 3).join(' '))
            })
            .catch(error => {
                setError(error)
            })
    }



    useEffect(CatsFact, [])

    return (
        <>
            <div className='component_container'>
                <h3>
                    {catsFact}
                </h3>
            </div>
            <div className='component_container'>
                <img src={catsGif} alt="gif" />
            </div>
        </>
    )
}

export default Cats