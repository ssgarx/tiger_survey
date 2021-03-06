import React from "react";

const MultiselectOptions = (props) => {
  let optionValue = props.answers.length > 0 ? props.answers[0].ans : "";

  // console.log("here",props.answers,optionValue,props.answers[0].ans)
  const getId = () => {
    console.log("id is ", props.id);
    return "Multi_" + props.id;
  };

  return (
    <>
      <textarea
        onChange={props.updateAnswers}
        id={getId()}
        value={optionValue}
      ></textarea>
      <span onClick={props.moreOptions}>+</span>
      <span id={props.id} onClick={props.deleteOptions}>
        -
      </span>
      <br></br>
    </>
  );
};

export default MultiselectOptions;
