/*
    1. register a list container (ul) in the constructor
    2. create a render method to render a new 'li' to the container
        -- accepts arguments: invoice or payment, and heading, a position
        -- create the html template (li, h4, p)
        -- and the 'li' template to the start/end of the list
*/

import { HasFormatter } from "../interfaces/HasFormatter.js";

export class ListTemplate {
  constructor(private container: HTMLUListElement) {}
  render(item: HasFormatter, heading: string, position: "start" | "end") {
    //   here 'position' could be of 'start' or 'end' type string not any other type or any other string type as well
    const li = document.createElement("li");
    const h4 = document.createElement("h4");
    h4.innerText = heading;
    li.append(h4);

    const p = document.createElement("p");
    p.innerText = item.format();
    li.append(p);
    if (position === "start") {
      this.container.prepend(li);
    } else {
      this.container.append(li);
    }
  }
}
