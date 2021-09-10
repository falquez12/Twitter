import { useEffect } from "react";

const Bookmarks = ({ setTitle }) => {
  useEffect(() => {
    setTitle("Bookmarks");
  });
  return (
    <>
      <p>hola mundo </p>
    </>
  );
};

export default Bookmarks;
