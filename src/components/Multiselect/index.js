import React, { useState } from "react";
import MultiselectOptions from "../MultiselectOptions";

import "./index.css";
const Multiselect = (props) => {
  const [options, setOptions] = useState([]);
  const [id, setId] = useState(0);

  console.log(props.answers);

  const moreOptions = () => {
    if (options.length < 4) {
      const updatedOptions = [...options, { id: id, value: "" }];
      setOptions(updatedOptions);
      setId(id + 1);
      // console.log(updatedOptions);
    }
  };

  const deleteLocalOptions = (clickedOption) => {
    const newOptions = options.filter((option) => {
      // console.log(option,clickedOption.target.id,option != clickedOption.target.id)
      return option != clickedOption.target.id;
    });
    setOptions(newOptions);
    // console.log("newOptions are after deleting: ",newOptions);
    props.deleteOptions(clickedOption);
  };

  const addQuestionAnswers = () => {
    if (props.answers.length === 4) {
      props.addQuestionAnswers();
    } else {
      alert("All options are mandatory");
    }
  };
  const updateAnswers = (e) => {
    props.addAnswers(e.target.value, e.target.id);
  };

  const addOptions =
    options.length > 0
      ? options.map((e, index) => (
          <MultiselectOptions
            moreOptions={moreOptions}
            id={e.id}
            deleteOptions={deleteLocalOptions}
            updateAnswers={updateAnswers}
            answers={props.answers.filter((ans) => ans.id === "Multi_" + e.id)}
          />
        ))
      : moreOptions();
  return (
    <>
      <textarea
        onChange={props.updateQuestion}
        value={props.question}
      ></textarea>
      <p>Options</p>
      {addOptions}
      {options.length === 4 ? (
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

export default Multiselect;
