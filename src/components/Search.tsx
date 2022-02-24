import React, { FC, useEffect, useState } from "react";
import "./styles/Search.css"
import Data from "./Data";

type FilmAPI = {
    title: string,
    episode_id: number,
    opening_crawl: string,
    director: string,
    producer: string,
    release_date: string,
}

const Search: FC = () => {

    const [films, setFilms] = useState<FilmAPI[]>([]);
    const getFilms = async (texto: string) => {
        const response = await fetch(`https://swapi.dev/api/films/?search=${texto}&format=json`)
        const data = await response.json();
        setFilms(data.results);
    }

    const [valor, setValor] = useState<string>("Write to search film")

    return (
        <div className="Search">
            <img className="logo" src={require('../images/logo.png')} />
            <div className="bar">
                <input type="text" value={valor}
                    onChange={
                        (e) => setValor(e.target.value)}
                    onClick={() => {
                        setValor("");
                    }}
                ></input>
                <button onClick={() => {
                    getFilms(valor);
                }}>Use the force Luke</button>
            </div>
            <Data data={films}></Data>
        </div>
    )
}

export default Search;