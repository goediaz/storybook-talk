import BSButton from 'react-bootstrap/Button';

export const Button = ({label, variant, disabled, onClick}) => {
  return (
    <BSButton disabled={disabled} variant={variant} onClick={onClick}>{label}</BSButton>
  );
}