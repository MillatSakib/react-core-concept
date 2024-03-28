import React from "react";

const FormUsingOnsubmit = () => {
  function handelSubmit(e) {
    e.preventDefault(); //here i write preventDefault for prevent default behavior like load on submit

    console.log(e.target.name.value);
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
    </div>
  );
};

export default FormUsingOnsubmit;
