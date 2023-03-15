import './App.css';
import { BrowserRouter as Router , Route, Routes} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from "./components/pages/Home/Home"
import MovieList from './components/MovieList/MovieList';
import Movie from './components/MovieDetails/Movie';

function App() {
  return (
   <>
  <Router>
     <Header />
    <Routes>
      <Route index element={<Home/>} ></Route>
      <Route path="movie/:id" element={<Movie/>}></Route>
      <Route path="movies/:type" element={<MovieList/>}></Route>
      <Route path="/*" element={<h1>Error Page</h1>}></Route>
    </Routes>
  </Router>
   </>
  );
}

export default App;
