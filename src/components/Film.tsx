import React, { FC } from "react"
import "./styles/Film.css"

type FilmProps = {
    title: string,
    episode_id: number,
    opening_crawl: string,
    director: string,
    producer: string,
    release_date: string,
}

const Film: FC<FilmProps> = ({ title,episode_id,opening_crawl,director,producer,release_date }) => {
    return (
        <div>
            <div>Title: {title}</div><br></br>
            <div>Director: {director}</div><br></br>
            <div>Producer: {producer}</div><br></br>
            <div>Release date: {release_date}</div><br></br><br></br>
            <div>Opening introduction:<br></br><br></br>{opening_crawl}</div><br></br>
        </div>
    )
}

export default Film;