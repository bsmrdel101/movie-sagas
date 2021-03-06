import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
// Import components
import MovieList from '../MovieList/MovieList'
import MovieDetails from '../MovieDetails/MovieDetails';
import AddMovie from '../AddMovie/AddMovie';

function App() {
  return (
    <div className="App">
      <header>
        <h1>The Movies Saga!</h1>
      </header>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        {/* Details page */}
        <Route path="/details" exact>
          <MovieDetails />
        </Route>
        {/* Add Movie page */}
        <Route path="/add" exact>
          <AddMovie />
        </Route>
      </Router>
    </div>
  );
}


export default App;
