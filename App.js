/*

<div id="parent">
    <div id="child">
        <h1> I am h1 tag</h1>
        <h2> I am h2 tag</h2>      // we can pass one or if we have pass two or more then we have to convert into array... 
    </div> 
    <div id="child">
        <h1> I am h1 tag</h1>
        <h2> I am h2 tag</h2>      
    </div> 
</div>

ReactElement(Object) ==> HTML(Browser Understands)..

*/

const parent = React.createElement(
  // it create an react objects
  "div",
  { id: "parent" },
  [
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "I am h1 tag"),
      React.createElement("h2", {}, "I am h2 tag"),
    ]),
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "I am h1 tag"),
      React.createElement("h2", {}, "I am h2 tag"),
    ]),
  ]
);

const heading = React.createElement(
  "h1",
  { id: "heading", abc: "column" },
  "Hello World from React!"
);

console.log(parent); // return object not h1;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); // while render, it converts into html and puts its up into DOM
