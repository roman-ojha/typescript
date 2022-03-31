import { useState } from "react";
// import List from "./react-components/List";
import AddToList from "./react-components/AddToList";
import "./App.css";

export interface IState {
  // this interface would define certain type
  people: {
    // we are defining type 'people'
    name: string;
    age: number;
    url: string;
    note?: string;
    // optional
  }[];
}

function App() {
  return <div className="App"></div>;
}

export default App;
