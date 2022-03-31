import React, { useState } from "react";
import { IState as Props } from "../App";
// now here rather then again defining as interface again an again we will export that interface and import it and use it easily

// now here we will create the interface because we want to have access to 'people' and 'setPeople' state from '../App.tsx' component because we want to add another people through 'setPeople'
interface IProps {
  people: Props["people"];
  // now here we are defining the type of people that we are getting from 'IState'
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
  // and here we are defining the type of 'setPeople' function/dispatch function so that we can be able to use inside this component
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  // now here we are accepting props of type "React.FC<IProps>"
  const [input, setInput] = useState({
    name: "",
    age: "",
    note: "",
    img: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    // here we have to defining the 'e' parameter type
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault();
    if (!input.name || !input.age || !input.img) {
      return;
    }
    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        // because every value that we will get from input filed will be of type string we have to parse it to int if we want to use as number
        url: input.img,
        note: input.note,
      },
    ]);
    setInput({
      name: "",
      age: "",
      note: "",
      img: "",
    });
  };

  return (
    <>
      <div className="AddToList">
        <input
          type="text"
          placeholder="Name"
          className="AddToList-input"
          value={input.name}
          name="name"
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Age"
          className="AddToList-input"
          value={input.age}
          name="age"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Image Url"
          className="AddToList-input"
          value={input.img}
          name="img"
          onChange={handleChange}
        />
        <textarea
          placeholder="Note"
          className="AddToList-input"
          value={input.note}
          name="note"
          onChange={handleChange}
        />
        <button className="AddToList-btn" onClick={handleClick}>
          Add to List
        </button>
      </div>
    </>
  );
};

export default AddToList;
