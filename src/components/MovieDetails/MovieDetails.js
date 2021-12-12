import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Button } from "@material-ui/core";

function MovieDetails() {
    const history = useHistory();
    const dispatch = useDispatch();

    return (
            <div>
                <Button variant="contained" onClick={() => {history.goBack()}}>Back to list</Button>
            </div>
        );
    }

export default MovieDetails;