import React from "react";
import AppContext, { useGlobalContext } from "./component/AppContext";
import Home from "./component/Home";

function App() {
  const { name } = useGlobalContext();
  console.log(name);

  return (
    <div>
      <AppContext />
      <Home />
    </div>
  );
}

export default App;
