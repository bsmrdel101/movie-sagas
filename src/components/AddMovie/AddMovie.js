import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

function AddMovie() {
    const history = useHistory();
    const dispatch = useDispatch();

    return (
        <>
            <div>
                <button onClick={() => {history.goBack()}}>Back to list</button>
            </div>
            <form>
                <input placeholder="Name" />
                <input placeholder="Image url" type="url" />
                <label htmlFor="descriptionInput">Enter a description</label>
                <textarea name="descriptionInput"></textarea>
                <label htmlFor="genres">Choose a genre</label>
                <select name="genres">
                    <option></option>
                    <option value="Adventure">Adventure</option>
                    <option value="Animated">Animated</option>
                    <option value="Biographical">Biographical</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Disaster">Disaster</option>
                    <option value="Drama">Drama</option>
                    <option value="Epic">Epic</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Musical">Musical</option>
                    <option value="Romantic">Romantic</option>
                    <option value="Science Fiction">Science Fiction</option>
                    <option value="Space-Opera">Space-Opera</option>
                    <option value="Superhero">Superhero</option>
                </select>
            </form>
        </>
    );
}

export default AddMovie;