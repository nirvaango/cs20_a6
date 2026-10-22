// Nirvaan Govind | CS20 Assignment 6: React | Problem 2

import './App.css';

// every square's color and the number it represents
const MyColors = [{number: 7, color: "#000000"}, {number: 8, color: "#1f4fa8"}, {number: 9, color: "#c0303f"},
                  {number: 4, color: "#c99a3b"}, {number: 5, color: "#000000"}, {number: 6, color: "#1f4fa8"},
                  {number: 1, color: "#c0303f" }, {number: 2, color: "#c99a3b"}, {number: 3, color: "#000000"}
                  ]

// one square
// background color comes from bgcolor prop
// number is in between the tags (props.children)
// if you click, the number gets alerted
function Block(props) {
    return (
        <div className="block" 
              style={{ backgroundColor: props.bgcolor}}
              onClick={() => alert(props.children)}>
            {props.children}
        </div>
    );
}

// builds the 3x3 grid by mapping each object in colorArray to a Block
function ColorGrid(props) {
    return (
        <div className="grid">
            {props.colorArray.map((item, i) =>
                <Block key={i} bgcolor={item.color}>{item.number}</Block>
            )}
        </div>
    );
}

// App: heading + grid; index.js renders this onto the page
function App() {
  return (
    <div>
        <h1>Grid</h1>
        <ColorGrid colorArray={MyColors} />
    </div>
  );
}

export default App;
