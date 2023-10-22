import './App.css';
import Banner from './components/Banner';
import Category from './components/Category';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
         <Navbar/>
         <Banner/>
         <Category/>
    </div>
  );
}

export default App;
