import { Fieldset } from "./formelements";

const Form = ({ children, ...rest }) => (
  <Fieldset {...rest}>{children}</Fieldset>
);

export default Form;
