import React from "react";
import { IState as IProps } from "../App";
// now here rather then again defining as interface again an again we will export that interface and import it and use it easily

const List: React.FC<IProps> = ({ people }) => {
  // const List = ({ people }: IProps) => {
  // const List = (props: IProps) => {
  // now here we are defining that props that we would going to get would going to be of type "IProps"
  //   or we can also be able to define the function 'List:React.FC<IProps>' this would do the same thing as another way

  const renderList = (): JSX.Element[] => {
    //   when it comes to function we always want to define what we want to return
    // and here what we want to return is and array of JSX element
    return people.map((person, index) => {
      return (
        <li className="List" key={index}>
          <div className="List-header">
            <img className="List-img" src={person.url} alt="img" />
            <h2>{person.name}</h2>
          </div>
          <p>{person.age} Year old</p>
          <p className="List-note">{person.note}</p>
        </li>
      );
    });
  };

  return (
    <>
      <ul>{renderList()}</ul>
    </>
  );
};

export default List;
