import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup";
import "./App.css";

import { IoCalendar } from "react-icons/io5";
import Like from "./components/Like";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  const items = ["New York", "Los Angeles", "Chicago"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <Like onClick={() => console.log("clicked")}></Like>
      {/* <Button onClick={function (): void {}}>MY BUTTON</Button> */}

      {/* <IoCalendar color="blue" size="40" /> */}

      {/* <ListGroup
        heading="City"
        items={items}
        onSelectItem={handleSelectItem}
      ></ListGroup>

      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
      )}
      */}
    </>
  );
}
export default App;
