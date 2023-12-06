import { useState } from "react";
import List from "./react-components/List";
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
  const [number, setNumber] = useState<number | boolean>(5);
  // to set our new state as some specific type then we have to use <<type_name>>
  // now this number is of type 'number' or 'boolean'
  const changeNumber = () => {
    // setNumber("10");
    // so here we can't be able to assign 'string' type on to 'number'
  };

  // const [people, setPeople] = useState([
  //   {
  //     name: "LeBron James",
  //     url: "",
  //     age: 36,
  //     note: "",
  //   },
  //   {
  //     name:"Kobe Bryant",
  //     url:"",
  //     age:36,
  //   }
  // ]);

  // const [people, setPeople] = useState<{
  //   // we can easily initialize type like this but we would not do that rather we would use 'interface'
  //   age: number;
  //   note: string;
  //   name: string;
  //   url: string;
  // }>();

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Lebron Jamse",
      url: "https://media.gettyimages.com/photos/lebron-james-of-the-los-angeles-lakers-poses-for-a-portrait-during-picture-id1172287886?s=612x612",
      age: 36,
      note: "Allegeric: to staying on the same team",
    },
  ]);

  return (
    <div className="App">
      <h1>People Invited to our Party</h1>
      <List people={people} />
      {/* here we are trying to pass state as an prop but if we will pass just like 'js' the we will get the error because 'List' component is not expecting to get props but we are passing it to solve the problem we can define that we are expecting props inside the 'List' component*/}
      <AddToList people={people} setPeople={setPeople} />
      {/* we want to add list throught 'AddToList' component because of that we have to pass 'people' and 'setPeople' as an props so that 'AddToList' can access to these variables and functions */}
    </div>
  );
}

export default App;
