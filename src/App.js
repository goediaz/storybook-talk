import { useContext } from "react";
import { ThemeContext } from "./wrappers/ThemeProvider";
import logo from './messi.png';
import './App.css';
import { Button } from './components/Button';
import Form from 'react-bootstrap/Form';

function App() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const currentTheme = theme === 'light' ? 'dark' : 'light';

  return (
    <div className="App">
      <img src={logo} className="messi-logo" alt="logo" />
      <Button label="Messi?" onClick={() => alert('Messi!')} variant={currentTheme} />
        <Form.Switch 
          id="theme-switch"
          onClick={toggleTheme}
        />
    </div>
  );
}

export default App;
