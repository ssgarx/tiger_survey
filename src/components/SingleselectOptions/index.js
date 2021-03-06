import React from "react";

const SingleselectOptions = (props) => {
  const getId = () => {
    return "Single_" + props.id;
  };

  return (
    <>
      <textarea onChange={props.updateAnswers} id={getId()}></textarea>
      <span onClick={props.moreOptions}>+</span>
      <span id={props.id} onClick={props.deleteOptions}>
        -
      </span>
      <br></br>
    </>
  );
};

export default SingleselectOptions;
