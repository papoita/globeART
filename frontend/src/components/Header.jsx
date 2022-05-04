import React from "react";

const Header = (props) => {
  console.log("props", props);

  const projectDescription = (
    <p>
      Do you love travelling and art, but tired of collecting fridge magnets?
      This beautiful NFT artwork only obtainable when you visit the city, will
      remind you of the places that you have been and the memories that you
      have. The more you travel, the more you can collect.
    </p>
  );

  return (
    <>
      <h2>{props.message} </h2>
      <h3> Hello {props.name} </h3>
      {projectDescription}
    </>
  );
};

export default Header;
