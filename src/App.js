import './App.css';
import { Router, Route, Routes} from 'react-router-dom'
import Booklist from './components/Booklist';
import Bookdetails from './components/Bookdetails';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Favourites from './components/Favourites';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Booklist />}/>
        <Route path='/book/:id' element={<Bookdetails />}/>
        <Route path='/favourites' element={<Favourites />}/>


      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;
