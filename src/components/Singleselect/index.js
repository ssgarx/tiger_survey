import React, { useState } from "react";
import SingleselectOptions from "../SingleselectOptions";

const Singleselect = (props) => {
  const [options, setOptions] = useState([]);
  const [id, setId] = useState(0);

  const moreOptions = () => {
    if (options.length < 2) {
      const updatedOptions = [...options, id];
      setOptions(updatedOptions);
      setId(id + 1);
      console.log(updatedOptions);
    }
  };
  let optionValue = "";

  const updateAnswers = (e) => {
    optionValue = optionValue + e.target.value;
    props.addAnswers(optionValue, e.target.id);
  };

  const addOptions =
    options.length > 1
      ? options.map((e, index) => (
          <SingleselectOptions
            moreOptions={moreOptions}
            id={options[index]}
            updateAnswers={updateAnswers}
          />
        ))
      : moreOptions();

  const addQuestionAnswers = () => {
    props.addQuestionAnswers();
    setOptions([]);
  };
  return (
    <>
      <textarea onChange={props.updateQuestion}></textarea>
      <p>Options</p>
      {addOptions}
      {options.length === 2 ? (
        <>
          <button onClick={addQuestionAnswers}>Add Question</button>
          <button onClick={props.publish}>Publish</button>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Singleselect;
