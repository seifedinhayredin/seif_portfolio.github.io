import Car from "./Car";
import Football from "./Football";
import GroceryLists from "./GroceryLists";
import DeptList from "./DeptList";
function Garage() {
  const cars = [
    { id: 1, brand: "Toyota" },
    { id: 2, brand: "BMW" },
    { id: 3, brand: "Volsewagen" },
  ];

  return (
    <>
      <h1>These are types of cars</h1>
      <ul>
        {cars.map((car) => (
          <Car key={car.id} brand={car.brand} />
        ))}
      </ul>
      <GroceryLists />
      <DeptList />
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
export default Garage;
