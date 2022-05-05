import { useState } from "react";

export const CategoriesSelect = ({ item, selectCat }) => {
  const [select, setSelect] = useState(false);

  return select === false ? (
    <button
      onClick={() => {
        selectCat(item._id);
        setSelect(true);
      }}
    >
      {item.title}
    </button>
  ) : (
    <button
      style={{ backgroundColor: "green" }}
      onClick={() => {
        //   selectCat(item._id);
        setSelect(false);
      }}
    >
      {item.title}
    </button>
  );
};
