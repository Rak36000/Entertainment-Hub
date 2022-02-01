//import logo from './logo.svg';
import './App.css';
import {Header} from './Mycomponents/Header/Header.js'
import SimpleBottomNavigation from './Mycomponents/Nav.js';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Container} from '@mui/material';
import Trending from './Pages/Trending/Trending';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import Search from './Pages/Search/Search';

function App() {
  return (
    <BrowserRouter>
    <Header></Header>
    <div className="App">
      <Container>
        <Routes>
          <Route path="/" element={<Trending/>} exact/>
          <Route path="/movies" element={<Movies/>} />
          <Route path="/series" element={<Series/>} />
          <Route path="/search" element={<Search/>} />
        </Routes>
      </Container>
    </div>
    <SimpleBottomNavigation/>
    </BrowserRouter>
  );
}

export default App;
