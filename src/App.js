import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = 'Plans';
  });
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
