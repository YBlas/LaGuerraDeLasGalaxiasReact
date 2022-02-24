import React, { FC, useEffect, useState } from "react";
import "./styles/Data.css"
import Film from "./Film"

type FilmAPI = {
    title: string,
    episode_id: number,
    opening_crawl: string,
    director: string,
    producer: string,
    release_date: string,
}

type DataProps = {
    data: FilmAPI[]
}

const Data: FC<DataProps> = ({ data }) => {

    const [Pelicula, setPelicula] = useState<FilmAPI>();

    useEffect(() => { setPelicula(data[0])
    }, [data]);

    return (
        <div className="Data">
            <div className="Info">
                <Film title={Pelicula?.title!}
                    episode_id={Pelicula?.episode_id!}
                    opening_crawl={Pelicula?.opening_crawl!}
                    director={Pelicula?.director!}
                    producer={Pelicula?.producer!}
                    release_date={Pelicula?.release_date!}>
                </Film>
            </div>
            <div className="List">
                <ol>
                    {data.map(elem => <li key={elem.episode_id} onClick={() => {
                        setPelicula(elem);
                    }}>{elem.title}</li>)}
                </ol>
            </div>
        </div>
    )
}

export default Data;