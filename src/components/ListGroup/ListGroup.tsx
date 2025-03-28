import { useState } from "react";
import "./ListGroup.css";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 15px 0;
  background: ${(props) => (props.active ? "blue" : "none")};
`;

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // items = [];
  // let selectedIndex = 0;

  // State Hook
  const [selectedIndex, setSelectedIndex] = useState(0);
  // arr[0] = selectedIndex; // variable
  // arr[1] = setSelectedIndex ; // updater function

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <List>
        {items.map((item, index) => (
          <ListItem
            style={{ backgroundColor: "yellow" }}
            active={index === selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
