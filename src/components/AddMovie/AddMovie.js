import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";

function AddMovie() {
    // Declare dispatch and history
    const history = useHistory();
    const dispatch = useDispatch();

    // Bring in our movieForm reducer
    const movieForm = useSelector((store) => store.movieForm);

    // Declare local states to store input values
    let [name, setName] = useState('');
    let [url, setUrl] = useState('');
    let [description, setDescription] = useState('');
    let [genre, setGenre] = useState(1);

    // Functions to handle input values being changed
        // Changes input value to whatever the user is typing
    const handleNameChange = (event) => {
        setName(event);
    }
    
    const handleUrlChange = (event) => {
        setUrl(event);
    }

    const handleDescriptionChange = (event) => {
        setDescription(event);
    }

    // Handles form being submitted
        // Save values for all inputs into a reducer
        // Clear input forms
        // Return back to movie list

    // TODO: submit genre response
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'NEW_FORM',
            payload: {title: name, poster: url, description: description, genre_id: genre}
        })
        setName('');
        setUrl('');
        setDescription('');
        history.goBack();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input placeholder="Name" value={name}
                    onChange={(event) => {handleNameChange(event.target.value)}}/>
                <input placeholder="Image url" value={url}
                    onChange={(event) => {handleUrlChange(event.target.value)}} />
                <textarea name="descriptionInput" rows="6" cols="25" value={description} placeholder="Enter a description"
                    onChange={(event) => {handleDescriptionChange(event.target.value)}} ></textarea>
                <div>
                    <label htmlFor="genres">Choose a genre</label>
                    <select name="genres">
                        <option></option>
                        <option>Adventure</option>
                        <option>Animated</option>
                        <option>Biographical</option>
                        <option>Comedy</option>
                        <option>Disaster</option>
                        <option>Drama</option>
                        <option>Epic</option>
                        <option>Fantasy</option>
                        <option>Musical</option>
                        <option>Romantic</option>
                        <option>Science Fiction</option>
                        <option>Space-Opera</option>
                        <option>Superhero</option>
                    </select>
                </div>
                <div>
                    <button onClick={() => {history.goBack()}}>Cancel</button>
                    <button type="submit">Save</button>
                </div>
            </form>
        </>
    );
}

export default AddMovie;