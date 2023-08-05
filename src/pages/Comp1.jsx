import React from "react";
import { useState, useContext, createContext } from "react";
const x = createContext();
function Comp1() {
  const [user, setUser] = useState("seifedin");
  return (
    <>
      <x.Provider value={user}>
        <h1>Hello {user}</h1>
        <Comp2 />
      </x.Provider>
    </>
  );
}
function Comp2() {
  return (
    <>
      <h1>Component 2</h1>
      <Comp3 />
    </>
  );
}
function Comp3() {
  const user = useContext(x);
  return (
    <>
      <h1>Component 3</h1>
      <h1>Hello {user} again</h1>
    </>
  );
}
export default Comp1;
