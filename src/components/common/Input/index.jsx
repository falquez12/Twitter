import { StyledInput } from "./inputelements";

const Input = (props) => {
  const { type, id, name, title, ...rest } = props;
  return (
    <div>
      <label id={id}>{title}</label>
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
