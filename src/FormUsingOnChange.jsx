import React, { useState } from "react";

const FormUsingOnChange = () => {
  const [name, setName] = useState("");
  function handelChange(e) {
    console.log(e.target.value);
    setName;
  }
  return (
    <div>
      <form>
        <input
          type="text"
          name="name"
          className="border-2"
          onChange={handelChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormUsingOnChange;
