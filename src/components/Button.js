import BSButton from 'react-bootstrap/Button';

export const Button = ({label, variant, disabled, onClick}) => {
  return (
    <BSButton disabled={disabled} variant={variant || 'light'} onClick={onClick}>{label}</BSButton>
  );
}