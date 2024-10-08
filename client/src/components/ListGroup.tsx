import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface ListGroupProps {
  initItems: string[];
  heading: string;
  initialActiveItem?: string;
  clickSideEffect?: (name: string) => void;
}

type listItem = { name: string; id: string };

const getItemIdByName = (items: listItem[], name?: string) => {
  if (!name) {
    return "";
  }
  return items.find((item) => item.name === name)?.id || "";
};

function ListGroup({ initItems, heading, initialActiveItem, clickSideEffect }: ListGroupProps) {
  const [items, setItems] = useState<listItem[]>([]);
  const [activeItemKey, setActiveItemKey] = useState(getItemIdByName(items, initialActiveItem));

  useEffect(() => {
    setItems(initItems.map((elem) => ({ name: elem, id: uuidv4() })));
  }, [initItems]);

  function ListItem({ item, id }: { item: string; id: string }) {
    return (
      <li
        className={`list-group-item ${id === activeItemKey ? "active" : ""}`}
        onClick={() => {
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
