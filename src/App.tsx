import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";

function App() {
  // const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  // const [game, setGame] = useState({
  //   id: 1,
  //   player: {
  //     name: "John",
  //   },
  // });

  // const [pizza, setPizza] = useState({
  //   name: "Spicy Peperoni",
  //   toppings: ["Mushroom"],
  // });

  // const [cart, setCart] = useState({
  //   discount: 0.1,
  //   items: [
  //     { id: 1, name: "Product 1", quantity: 1 },
  //     { id: 2, name: "Product 2", quantity: 1 },
  //   ],
  // });

  const handleClick = () => {
    // setGame({ ...game, player: { ...game.player, name: "Bob" } });
    // setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
    // setCart({
    //   ...cart,
    //   items: cart.items.map((item) =>
    //     item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
    //   ),
    // });
  };
  //   cities.map((city) => (city.id === 1 ? { ...city, visited: true } : city))

  // handleClick();

  /* <ul>
    {cart.items.map((item) => (
      <li key={item.id}>
        {item.name} {item.quantity}
      </li>
    ))}
  </ul> */

  return (
    <div>
      <ExpandableText maxChars={20}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta iusto
        temporibus corrupti sit, esse consequatur officia id est similique quis
        tempore eius vitae voluptates officiis quibusdam, adipisci possimus
        nesciunt placeat pariatur fugiat doloribus incidunt eaque magnam
        quaerat? Temporibus, vitae ex inventore ea dolor nihil ipsum veniam eius
        obcaecati ad placeat facilis accusantium officiis qui beatae esse soluta
        quidem aliquam officia! Cumque veritatis ipsam quia quaerat sunt officia
        provident, et accusantium voluptas accusamus? Velit fugit iure dolorum
        tenetur voluptatibus eaque culpa, architecto facilis ipsam laudantium
        nemo facere blanditiis molestias perspiciatis ut suscipit nostrum
        tempora ex. Quas nihil tempora tenetur repellat voluptatibus!
      </ExpandableText>
    </div>
  );

  // const [isVisible, setVisibility] = useState(false); // Can only be used at top level of a component

  // const [drink, setDrink] = useState({
  //   title: "Americano",
  //   price: 5,
  // });

  // const [tags, setTags] = useState(["tag1", "tag2", "tag3"]);

  // const [customer, setCustomer] = useState({
  //   name: "John",
  //   address: {
  //     city: "San Francisco",
  //     zipCode: 94100,
  //   },
  // });

  // const [cities, setCities] = useState([
  //   { id: 1, title: "New York", visited: false },
  //   { id: 2, title: "Los Angeles", visited: false },
  //   { id: 3, title: "Chicago", visited: false },
  // ]);

  // const handleClick = () => {
  //   setCities(
  //     produce((draft) => {
  //       const city = draft.find((city) => city.id === 1);
  //       if (city) city.visited = true;
  //     })
  //   );

  // setCities(
  //   cities.map((city) => (city.id === 1 ? { ...city, visited: true } : city))
  // );

  // setDrink({ ...drink, price: 6 });
  // setCustomer({
  //   ...customer,
  //   address: { ...customer.address, zipCode: 94101 },
  // });
  // tags.push("tag4");
  // setTags([...tags, "tag4"]);
  // setTags(tags.filter((tag) => tag !== "tag1"));
  // setTags(tags.map((tag) => (tag === "tag1" ? "tag1-updated" : tag)));
  // };

  // return (
  //   <>

  /* {cities.map((city) => (
        <p key={city.id}>
          {city.title} {city.visited ? "visited" : "not been"}
        </p>
      ))}
      <Button onClick={handleClick}>Click Me</Button> */

  /* <Like onClick={() => console.log("clicked")}></Like> */

  /* <IoCalendar color="blue" size="40" /> */

  /* <ListGroup
        heading="City"
        items={items}
        onSelectItem={handleSelectItem}
      ></ListGroup>

      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
      )}
      */

  /* </>
  ); */
}

export default App;
