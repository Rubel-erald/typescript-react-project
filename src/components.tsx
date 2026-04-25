// interface person {
//     a:string;
//     b:number;
//     c:string;
// }
// function Header(props:person) {
//   return (
//     <>
//       <h1>
//         hello {props.a} you are {props.b} old and you are from {props.c}
//       </h1>
//     </>
//   );
// }
// export default Header;

import React from "react";
interface person {
  a: string;
  b: number;
  c: string;
}
class Header extends React.Component<person> {
  render() {
    return (
      <>
        <h1>
          hello {this.props.a} you are {this.props.b} and you are from{" "}
          {this.props.c}{" "}
        </h1>
      </>
    );
  }
}
export default Header;
