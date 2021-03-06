import React from "react";

const DisplayAnswer = (props) => {
  return (
    <>
      {props.option.id.includes("Multi") ? (
        <>
          <input type="checkbox" value={props.option.ans} />
          {props.option.ans}
          <br />
        </>
      ) : (
        <>
          <input type="radio" name="select" value={props.option.ans} />
          {props.option.ans}
          <br />
        </>
      )}
      {/*  */}
    </>
  );
};

export default DisplayAnswer;
