import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "@material-ui/core";

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

    const handleGenreChange = (event) => {
        setGenre(event);
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
                    <select name="genres" onChange={(event) => {handleGenreChange(event.target.value)}}>
                        <option></option>
                        <option value="1">Adventure</option>
                        <option value="2">Animated</option>
                        <option value="3">Biographical</option>
                        <option value="4">Comedy</option>
                        <option value="5">Disaster</option>
                        <option value="6">Drama</option>
                        <option value="7">Epic</option>
                        <option value="8">Fantasy</option>
                        <option value="9">Musical</option>
                        <option value="10">Romantic</option>
                        <option value="11">Science Fiction</option>
                        <option value="12">Space-Opera</option>
                        <option value="13">Superhero</option>
                    </select>
                </div>
                <div>
                    <Button variant="contained" onClick={() => {history.goBack()}}>Cancel</Button>
                    <Button variant="contained" type="submit" onClick={() => {history.goBack()}}>Save</Button>
                </div>
            </form>
        </>
    );
}

export default AddMovie;