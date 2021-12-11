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
            type: 'SET_FORM',
            payload: {title: name, poster: Image, description: description}
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