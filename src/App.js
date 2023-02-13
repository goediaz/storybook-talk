import logo from './messi.png';
import './App.css';
import { Button } from './components/Button';

function App() {
  return (
    <div className="App">
      <img src={logo} className="messi-logo" alt="logo" />
      <Button label="Messi?" onClick={() => alert('Messi!')} variant='primary' />
    </div>
  );
}

export default App;
