import { useEffect, useState } from 'react';
import { CanceledError } from './services/api-client';
import userService, { User } from './services/user-service';

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const { request, cancel } = userService.getAll<User>();
    request
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => cancel();
  }, []);

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    userService.delete(user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: 'Apple' };
    setUsers([newUser, ...users]);

    userService
      .create(newUser)
      .then(({ data: savedUser }) => {
        setUsers([savedUser, ...users]);
      })
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + '!' };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    userService.update(updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  return (
    <>
      {error && <p className="text-danger">{error} </p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;

// const connect = () => console.log('connected');
// const disconnect = () => console.log('disconnected');

// function App() {
//   const [category, setCategory] = useState('');

//   useEffect(() => {
//     console.log('App mounted');
//     connect();

//     return () => {
//       console.log('App unmounted');
//       disconnect();
//     };
//   }, []);
//   return (
//     <div>
//       <select
//         id=""
//         className="form-select"
//         onChange={(e) => setCategory(e.target.value)}
//       >
//         <option value=""></option>
//         <option value="Clothing">Clothing</option>
//         <option value="Household">Household</option>
//       </select>
//       <ProductList category={category}></ProductList>
//     </div>
//   );
// }

// export default App;

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

// const handleClick = () => {
// setGame({ ...game, player: { ...game.player, name: "Bob" } });
// setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
// setCart({
//   ...cart,
//   items: cart.items.map((item) =>
//     item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
//   ),
// });
// };
//   cities.map((city) => (city.id === 1 ? { ...city, visited: true } : city))

// handleClick();

/* <ul>
    {cart.items.map((item) => (
      <li key={item.id}>
        {item.name} {item.quantity}
      </li>
    ))}
  </ul> */

// const [selectedCategory, setSelectedCategory] = useState('');

// const [expenses, setExpenses] = useState([
//   { id: 1, description: 'aaa', amount: 10, category: 'Utilities' },
//   { id: 2, description: 'bbb', amount: 10, category: 'Utilities' },
//   { id: 3, description: 'ccc', amount: 10, category: 'Utilities' },
//   { id: 4, description: 'ddd', amount: 10, category: 'Entertainment' },
// ]);

// const handleDelete = (id: number) => {
//   setExpenses(expenses.filter((expense) => expense.id !== id));
// };

// const visibleExpenses = selectedCategory
//   ? expenses.filter((e) => e.category === selectedCategory)
//   : expenses;

// const handleAddExpense = (expense: any) => {
//   setExpenses([...expenses, { ...expense, id: expenses.length + 1 }]);
// };

// useEffect(() => {
//   document.title = 'Expense Tracker';
// });

// return (
//   <div>
//     <div className="mb-5">
//       <ExpenseForm onSubmit={handleAddExpense}></ExpenseForm>
//     </div>
//     <div className="mb-3">
//       <ExpenseFilter
//         onSelectCategory={(category) => setSelectedCategory(category)}
//       ></ExpenseFilter>
//     </div>
//     <ExpenseList expenses={visibleExpenses} onDelete={handleDelete} />
//   </div>
// );

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
