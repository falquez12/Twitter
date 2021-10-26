import SelectIcon from "../../../lib/ui/icons/icons";
import { useEffect } from "react";
import { Div } from "../Alert/alertelement";

const AlertLogin = ({ handleClick }) => {
  useEffect(() => {
    // Good!
    setTimeout(handleClick, 7000); // Side-effect!
  }, []);

  return (
    <Div>
      <p>Contrasena Errada</p>
      <div onClick={handleClick}>
        <SelectIcon name="Close"></SelectIcon>
      </div>
    </Div>
  );
};

const AlertSingUp = ({ handleClick }) => {
  useEffect(() => {
    // Good!
    setTimeout(handleClick, 7000); // Side-effect!
  }, []);

  return (
    <Div>
      <p>Error creando usuario! Intenta nuevamente</p>
      <div onClick={handleClick}>
        <SelectIcon name="Close"></SelectIcon>
      </div>
    </Div>
  );
};

export { AlertLogin, AlertSingUp };
