import { useEffect } from "react";

const Messages = ({ setTitle }) => {
  useEffect(() => {
    setTitle("Messages");
  });
  return (
    <>
      <p>hola mundo </p>
    </>
  );
};

export default Messages;
