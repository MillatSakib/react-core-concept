import React, { useRef, useState } from "react";

const FormUsingUseref = () => {
  const nameRef = useRef("");
  const mailRef = useRef("");
  const passRef = useRef("");
  const [print, setPrint] = useState([]);

  function handelSubmit(e) {
    e.preventDefault();
    let name = nameRef.current.value;
    const mail = mailRef.current.value;
    const pass = passRef.current.value;
    const str = name.split(" ");
    name = str[str.length - 1];
    const pushArr = [name, mail, pass];
    setPrint(pushArr);
    nameRef.current.foucus;

    // console.log(e.target.name.value);
  }
  console.log(print);
  return (
    <div>
      <form onSubmit={handelSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Enter your name"
          className="border-2"
          name="name"
          ref={nameRef}
          required
        />

        <input
          type="email"
          placeholder="Enter your email"
          className="border-2"
          name="email"
          ref={mailRef}
          required
        />

        <input
          type="password"
          placeholder="Enter your Password"
          className="border-2"
          name="password"
          ref={passRef}
          required
        />

        <button type="submit">Submit</button>
      </form>
      {JSON.stringify(print) === "[]" ? "" : <Exposed print={print}></Exposed>}
    </div>
  );
};

function Exposed({ print }) {
  return (
    <div>
      Hi, {print[0]}. You are exposed.
      <div>Your email {print[1]}</div>
      <div>Your password {print[2]}</div>
    </div>
  );
}

export default FormUsingUseref;
