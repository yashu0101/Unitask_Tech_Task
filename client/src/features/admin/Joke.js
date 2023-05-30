import React, { useEffect, useState } from "react";

const Joke = () => {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => setJoke(data.value))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h2 style={{ fontSize: "20px" }}>JOKE:- {joke}</h2>
    </>
  );
};

export default Joke;
