import { useState } from "react";
import viteLogo from "/vite.svg";
import FormUsingOnsubmit from "./FormUsingOnsubmit";
import FormUsingOnChange from "./FormUsingOnChange";
import FormUsingUseref from "./FormUsingUseref";
import ContextApiPrivider from "./ContextApiPrivider";
import ContextApiProvider from "./ContextApiProvider";
import FormOfCustomHook from "./FormOfCustomHook";

function App() {
  return (
    <div>
      <div className="flex h-screen items-center justify-center">
        <FormUsingOnsubmit></FormUsingOnsubmit>
      </div>
      <div className="flex h-screen items-center justify-center">
        <FormUsingOnChange></FormUsingOnChange>
      </div>
      <div className="flex h-screen items-center justify-center">
        <FormUsingUseref></FormUsingUseref>
      </div>
      <ContextApiProvider></ContextApiProvider>
      <FormOfCustomHook></FormOfCustomHook>
    </div>
  );
}

export default App;
