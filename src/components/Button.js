import BSButton from 'react-bootstrap/Button';
import { useContext } from "react";
import { ThemeContext } from "../wrappers/ThemeProvider";

export const Button = ({label, variant, disabled, onClick}) => {
  const { theme } = useContext(ThemeContext);
  const buttonDefaultColor = theme === 'light' ? 'dark' : 'light';
  return (
    <BSButton disabled={disabled} variant={variant || buttonDefaultColor} onClick={onClick}>{label}</BSButton>
  );
}