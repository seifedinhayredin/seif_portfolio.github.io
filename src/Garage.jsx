function Garage() {
  return (
    <>
      <h1>These are types of cars</h1>
    </>
  );
  /* const myCar = { name: "Toyota", color: "red" };
  let x = 5;
  //return x > 0 ? <Car brand={myCar} /> : <Football />;
  if (x > 0) {
    return <Car brand={myCar} />;
  }
  return (
    <>
      <h1>It is a gagrage</h1>

      <Football />
    </>
  );*/
}
const root = ReactDOM.createRoot(document.getElementById("seif"));
root.render(<Garage />);
export default Garage;
