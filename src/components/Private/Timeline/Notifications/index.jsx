import { useEffect } from "react";

const Notifications = ({ setTitle }) => {
  useEffect(() => {
    setTitle("Notifications");
  });
  return (
    <>
      <p>hola mundo </p>
    </>
  );
};

export default Notifications;
