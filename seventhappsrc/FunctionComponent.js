import { useState } from "react";

export default () => {
  // const stateArr = useState(0);
  //const [value,setValue]=stateArr;
  const [value, setValue] = useState(0); //same as above 2 line
  const [newValue, setNewValue] = useState(0);
  const onClickHandler = () => {
    setValue(value + 1);
  };

  const onUpdateNewClickHandler = () => {
    setNewValue(newValue + 1);
  };
  return (
    <>
      <h1>Value: {value}</h1>
      <h1>New Value: {newValue}</h1>
      <button onClick={onClickHandler}>Update</button>
      <button onClick={onUpdateNewClickHandler}>Update New Value State</button>
    </>
  );
};
