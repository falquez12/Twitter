import { StyledInput, StyledLabel } from "./inputelements";

const Input = (props) => {
  const { type, id, name, title, ...rest } = props;
  return (
    <div>
      <StyledLabel id={id}>{title}</StyledLabel>
      <br />
      <StyledInput
        type={type}
        id={id}
        name={name}
        placeholder={title}
        {...rest}
      />
    </div>
  );
};

export default Input;
