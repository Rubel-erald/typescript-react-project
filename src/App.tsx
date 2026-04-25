// In typescript everthing is same creating a components using function and class
// but creating a variables is different let see

// function way creating a variable
// function App (){
//   let name : string = "rubel";
//   let age : number = 23;
//   let place : string = "coimbatore"
//   return <>
//   <h1>hello {name} you are {age} years old and you are from {place}</h1>
//   </>
// }
// export default App;

// class way creating a variables
// import React from "react";
// class App extends React.Component {
//   render() {
//
//     return (
//       <>
//         <h1>
//           hello {name} you are {age} years old and you are from {place}
//         </h1>
//       </>
//     );
//   }
// }
// export default App;

// let see about using varibale from one components to another components
// function components
// import Header from "./components";
// function App() {
//   let name: string = "rubel";
//   let age: number = 23;
//   let place: string = "coimbatore";

//   return (
//     <>
//       <Header a={name} b={age} c={place} />
//     </>
//   );
// }
// export default App;

// lets see in class components
import Header from "./components";
import React from "react";

class App extends React.Component {
  render() {
    let name: string = "rubel";
    let age: number = 23;
    let place: string = "coimbatore";
    return (
      <>
        <Header a={name} b={age} c={place} />
      </>
    );
  }
}
export default App;
