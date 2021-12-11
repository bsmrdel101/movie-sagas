import { useHistory } from "react-router";
import { useEffect } from "react";

function MovieDetails() {
    const history = useHistory();

    useEffect(() => {
        
    }, [])

    return (
            <div>
                <button onClick={() => {history.goBack()}}>Back</button>
                <p></p>
            </div>
        );
    }

export default MovieDetails;