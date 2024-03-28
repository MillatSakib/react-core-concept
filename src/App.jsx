import { useState } from "react";
import viteLogo from "/vite.svg";
import FormUsingOnsubmit from "./FormUsingOnsubmit";
import FormUsingOnChange from "./FormUsingOnChange";

function App() {
  return (
    <div>
      <div className="flex h-screen items-center justify-center">
        <FormUsingOnsubmit></FormUsingOnsubmit>
      </div>
      <div className="flex h-screen items-center justify-center">
        <FormUsingOnChange></FormUsingOnChange>
      </div>
    </div>
  );
}

export default App;
