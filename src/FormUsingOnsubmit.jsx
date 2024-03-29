import React, { useState } from "react";

const FormUsingOnsubmit = () => {
  const [name, setName] = useState("");
  function handelSubmit(e) {
    e.preventDefault(); //here i write preventDefault for prevent default behavior like load on submit
    setName(e.target.name.value);
    // console.log(e.target.name.value);
  }
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          placeholder="Inter any dumby text"
          className="border-2"
          name="name"
        />
        <button type="submit">Submit</button>
      </form>
      Hi, {name}
    </div>
  );
};

export default FormUsingOnsubmit;
