import { useEffect } from "react";

const Lists = ({ setTitle }) => {
  useEffect(() => {
    setTitle("Bookmarks");
  });
  return (
    <>
      <p>hola mundo </p>
    </>
  );
};

export default Lists;
