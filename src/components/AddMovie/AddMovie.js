import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Button, TextField, MenuItem } from "@material-ui/core";
import './AddMovie.css'

function AddMovie() {
    // Declare dispatch and history
    const history = useHistory();
    const dispatch = useDispatch();

    // Declare local states to store input values
    let [name, setName] = useState('');
    let [url, setUrl] = useState('');
    let [description, setDescription] = useState('');
    let [genre, setGenre] = useState(0);

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

    // Array of genres for the dropdown menu
    const genres = [
        {value: '0',label: ''},
        {value: '1',label: 'Adventure'},
        {value: '2',label: 'Animated'},
        {value: '3',label: 'Biographical'},
        {value: '4',label: 'Comedy'},
        {value: '5',label: 'Disaster'},
        {value: '6',label: 'Drama'},
        {value: '7',label: 'Epic'},
        {value: '8',label: 'Fantasy'},
        {value: '9',label: 'Musical'},
        {value: '10',label: 'Romantic'},
        {value: '11',label: 'Science Fiction'},
        {value: '12',label: 'Space-Opera'},
        {value: '13',label: 'Superhero'},
    ];

    // Handles form being submitted
        // Save values for all inputs into a reducer
        // Clear input forms
        // Return back to movie list
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
            <section>
                <form onSubmit={handleSubmit}>
                    <TextField label="Name" variant="standard" value={name}
                    onChange={(event) => {handleNameChange(event.target.value)}} />
                    <TextField label="Image url" variant="standard" value={url}
                    onChange={(event) => {handleUrlChange(event.target.value)}} />
                    <div>
                        <TextField
                            label="Description"
                            multiline
                            rows={6}
                            value={description}
                            onChange={(event) => {handleDescriptionChange(event.target.value)}}
                            variant="filled" 
                        />
                    </div>
                    <div>
                        <label htmlFor="genres">Choose a genre: </label>
                        <select name="genres" onChange={handleGenreChange}>
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
                    <div className="form-buttons">
                        <Button variant="contained" onClick={() => {history.goBack()}}>Cancel</Button>
                        <Button variant="contained" type="submit" onClick={() => {history.goBack()}}>Save</Button>
                    </div>
                </form>
            </section>
        </>
    );
}

export default AddMovie;