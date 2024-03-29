import React from "react";
import useInputState from "./Hooks/useInputState";

const CustomHook = () => {
  const [name, handleNameChange] = useInputState("");
  const handelSubmit = (e) => {
    console.log("form data", name);
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          name="name"
        />
        <br />
        <input type="email" name="email" />
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
};

export default CustomHook;
