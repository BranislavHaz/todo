import React from "react";
import { useSelector } from "react-redux";

const CategoryListItem = () => {
  const { categoryListItems } = useSelector((state) => state.category);

  return (
    <>
      <div>
        {categoryListItems
          ?.slice()
          .sort((a, b) => (a > b ? 1 : -1))
          .map((el, id) => {
            return <div key={id}>{el.name}</div>;
          })}
      </div>
    </>
  );
};

export default CategoryListItem;
