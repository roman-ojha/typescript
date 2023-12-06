// the most part when we work with the dubbing typescript it is the same as when we work with the Dom in Javascript we can still use the same query methods and event listeners etc, we can still access all of the same properties on the Dom element But there are a few key differences to be aware of

const anchor = document.querySelector("a");
// here now we can get any dom element that we want

// console.log(anchor.href);
// but when we want to access its property and function at that time it will throw and error and that is Object is possibly 'null'
// so it means that there could be or couldn't be any anchor tag inside the dom element if there isn't any anchor tag at that time anchor tag will be 'null'
// in that case we can solve this error by:
// method 1
if (anchor) {
  console.log(anchor.href);
}
// method 2
const anchor1 = document.querySelector("a")!;
// if we are confident that dom contain of 'anchor'tag that we can use '!' mark which will solve that problem
// here we are saying that anchor tag could not be null
console.log(anchor1.href);

// and the another thing is that typescript contain all DOM element type like:
// 'anchor' tag is of type 'HTMLAnchorElement'

const formTag = document.getElementsByClassName("new-item-form")[0]!;
// now in this case the variable 'formTag' could be of any type, and typescript says ot type 'Element'
// so in that case to make the element some type we have to use 'Type Casting'

const formTag2 = document.getElementsByClassName(
  "new-item-form"
)[0] as HTMLFormElement;
// now this 'formTag2' is of type 'HTMLFormElement'

let formTag3: HTMLFormElement;
// we can also declare variable as some kind of DOM Type which is not give all all the property and method to access on that particular variable

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#toFrom") as HTMLInputElement;
const detail = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

formTag.addEventListener("submit", (e: Event) => {
  // now 'e' is an of type event
  e.preventDefault();
  console.log(type.value, toFrom.value, detail.value, amount.valueAsNumber);
  //   now in 'amount.value' we are getting number as string but we want it as number in that case we can use 'amount.valueAsNumber' to get value as number
});
