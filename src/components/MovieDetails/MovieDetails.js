import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

function MovieDetails() {
    const history = useHistory();
    const dispatch = useDispatch();

    return (
            <div>
                <button onClick={() => {history.goBack()}}>Back to list</button>
            </div>
        );
    }

export default MovieDetails;