import { useHistory } from "react-router";

function MovieDetails() {
const history = useHistory();

return (
        <div>
            <button onClick={() => {history.goBack()}}>Back</button>
            <p>hi</p>
        </div>
    );
}

export default MovieDetails;