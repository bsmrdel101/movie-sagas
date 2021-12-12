import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import './MovieList.css'
import { Button } from '@material-ui/core';

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
            <Button variant="contained" onClick ={e => history.push('/add')}>Add a Movie</Button>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} onClick={e => seeDetails(movie)}>
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;