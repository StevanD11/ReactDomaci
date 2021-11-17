import { useState, useEffect } from 'react';


const ListaFilmova = () => {

    const [filmovi, setFilmovi] = useState([
        { naziv: 'Shawshank redemption', reditelj: 'Frank Darabont', ocena: 9.3, slika: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg', imdb: 'https://www.imdb.com/title/tt0111161/', id: 1 },
        { naziv: 'The Dark Knight', reditelj: 'Christopher Nolan', ocena: 9.0, slika: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg', imdb: 'https://www.imdb.com/title/tt0468569/', id: 2 },
        { naziv: 'Inglourious Basterds', reditelj: 'Quentin Tarantino', ocena: 8.3, slika: 'https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_FMjpg_UX1000_.jpg', imdb: 'https://www.imdb.com/title/tt0361748/', id: 3 },
    ]);


    const handleDelete = (id) => {
        const noviFilmovi = filmovi.filter((film) => film.id !== id);
        setFilmovi(noviFilmovi);
    }


    return (
        <div className="lista-filmova">
            {
                filmovi.map((film) => (
                    <div className="film" key={film.id}>
                        <h2>{film.naziv}</h2>
                        <a href={film.imdb}><img src={film.slika}></img></a>
                        <h3>Ocena: {film.ocena}</h3>
                        <h3>Reditelj: {film.reditelj}</h3>
                        <button onClick={() => handleDelete(film.id)}>Obrisi</button>
                    </div>
                ))
            }
        </div>

    );


}

export default ListaFilmova;