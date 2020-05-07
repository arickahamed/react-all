import React from "react";

// function Greet() {
//   return <h1>Hello Ali</h1>;
// }

const Greet = (props) => {
  console.log(props);
  return (
    <div>
      <h1>
        {props.name} is likes to play {props.play}
      </h1>
      {props.children}
    </div>
  );
};

export default Greet;
