import { useEffect } from "react";

const Lists = ({ setTitle }) => {
  useEffect(() => {
    setTitle("Lists");
  });
  return (
    <>
      <p>hola mundo </p>
    </>
  );
};

export default Lists;
