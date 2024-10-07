import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface ListGroupProps {
  initItems: string[];
  heading: string;
  initialActiveItem?: string;
  clickSideEffect?: (name: string) => void;
}

function ListGroup({ initItems, heading, initialActiveItem, clickSideEffect }: ListGroupProps) {
  const [items, setItems] = useState(initItems.map((elem) => ({ name: elem, id: uuidv4() })));

  const getItemIdByName = (items: { name: string; id: string }[], name?: string) => {
    if (!name) {
      return "";
    }
    return items.find((item) => item.name === name)?.id || "";
  };

  const [activeItemKey, setActiveItemKey] = useState(getItemIdByName(items, initialActiveItem));

  interface ListItemProps {
    item: string;
    id: string;
  }

  function ListItem({ item, id }: ListItemProps) {
    return (
      <li
        className={`list-group-item ${id === activeItemKey ? "active" : ""}`}
        onClick={() => {
          console.log(id);
          setActiveItemKey(id);
          clickSideEffect?.(item);
        }}
      >
        {item}
      </li>
    );
  }

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map(({ name, id }) => (
          <ListItem key={id} item={name} id={id} />
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
