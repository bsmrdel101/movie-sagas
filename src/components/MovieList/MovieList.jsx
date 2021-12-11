import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import './MovieList.css'

function MovieList() {
    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const seeDetails = (movie) => {
        history.push('/details');
        dispatch({
            type: 'FETCH_THIS_MOVIE',
            payload: movie.id
        })
    }

    return (
        <main>
            <h1>MovieList</h1>
            <button onClick ={e => history.push('/add')}>Add a Movie</button>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id}>
                            <h3>{movie.title}</h3>
                            <img onClick={e => seeDetails(movie)} src={movie.poster} alt={movie.title}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;