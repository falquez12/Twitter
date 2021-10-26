import { StyledInput, StyledLabel } from "./inputelements";

const Input = (props) => {
  const { type, id, name, title, setState, state, ...rest } = props;
  return (
    <div>
      <StyledLabel id={id}>{title}</StyledLabel>
      <br />
      <StyledInput
        type={type}
        id={id}
        name={name}
        placeholder={title}
        value={state}
        onChange={(event) => setState(event.target.value)}
        {...rest}
      />
    </div>
  );
};

export default Input;
