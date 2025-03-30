let count = 0;

const Message = () => {
  console.log("Message called", count);

  // const name = "Apple";
  count++;

  // if (name) return <h1>Hello {name}</h1>;
  // else return <h1>Hello Guest</h1>;
  return <div>Message: {count}</div>;
};

export default Message;
