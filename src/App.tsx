import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  // let cities = [
  //   "New York",
  //   "Los Angeles",
  //   "Chicago",
  //   "Houston",
  //   "Phoenix",
  //   "Philadelphia",
  // ];

  // const handleSelectCity = (item: string) => {
  //   console.log("City " + item + " selected!");
  // };

  // let colours = ["Red", "Green", "Blue", "Yellow", "Black", "White"];

  // const handleSelectColour = (item: string) => {
  //   console.log("Colour " + item + " selected!");
  // };

  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <>
      <Button style="secondary" onClick={handleClick}>
        Click me pls!
      </Button>
      {/* <Alert>hello</Alert> */}
    </>
  );
}
export default App;
