import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import './MovieList.css'
import { Button, Card, CardActionArea, CardMedia, Typography, CardContent } from '@material-ui/core';

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
            <Button id="add-movie" variant="contained" onClick ={e => history.push('/add')}>Add a Movie</Button>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <Card className="card-list" key={movie.id} onClick={e => seeDetails(movie)} sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="230"
                                image={movie.poster}
                                alt={movie.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {movie.title}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;