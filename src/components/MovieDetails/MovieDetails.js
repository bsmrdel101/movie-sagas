import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import './MovieDetails.css';
import { useState } from "react";

function MovieDetails() {
    const history = useHistory();
    const dispatch = useDispatch();

    const movies = useSelector((store) => store.movies);

    console.log(movies);

    return (
            <div>
                <img src={movies[0].poster} />
                <h2>{movies[0].title}</h2>
                <p>{movies[0].description}</p>
                {movies.map((movie) => {
                    return (
                        <div key={movie.id}>
                            <p>{movie.name}</p>
                        </div>
                    );
                })}
                <Button variant="contained" onClick={() => {history.goBack()}}>Back to list</Button>
            </div>
        );
    }

export default MovieDetails;