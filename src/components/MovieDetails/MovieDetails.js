import { useHistory } from "react-router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function MovieDetails() {
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        
    }, []);

    return (
            <div>
                <button onClick={() => {history.goBack()}}>Back to list</button>
            </div>
        );
    }

export default MovieDetails;