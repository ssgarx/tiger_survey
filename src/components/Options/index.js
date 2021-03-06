import React from "react";

const Options = (props) => {
  const call = () => {
    alert(props.value);
  };
  return <option onClick={call}>{props.value}</option>;
};

export default Options;
