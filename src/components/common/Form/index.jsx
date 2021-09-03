import Fieldset from "./../../../lib/ui/Fieldset";

const Form = ({ children, ...rest }) => (
  <Fieldset {...rest}>{children}</Fieldset>
);

export default Form;
