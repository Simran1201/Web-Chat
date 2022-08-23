import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      { /* Nav Bar Component */ }
      <Navbar />
      
      <div className = "container">

        { /* Main Component */ }
        <Main />
      </div>
    </>
  );
}

export default App;
