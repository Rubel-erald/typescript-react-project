type person = {
    a:string;
    b:number;
    c:string;
}
function Header(props:person) {
  return (
    <>
      <h1>
        hello {props.a} you are {props.b} old and you are from {props.c}
      </h1>
    </>
  );
}
export default Header;