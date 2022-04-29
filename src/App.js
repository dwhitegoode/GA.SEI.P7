import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.jsx';
import SpaceContents from './components/SpaceContents.jsx';

function App() {
  return (
    <div className='bkgrnd'>
      <Navbar />
      <div className='App'>
        <SpaceContents />
      </div>
    </div>
  );
}

export default App;
