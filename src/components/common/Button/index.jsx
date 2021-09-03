import { StyledButton } from "./buttonelement";

const Button = ({ text, className = "button button__primary", ...rest }) => (
  <div>
    <StyledButton {...rest}>{text}</StyledButton>
  </div>
);

export default Button;
