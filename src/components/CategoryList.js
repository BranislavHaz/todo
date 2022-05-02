import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodoCategory } from "../redux/todoSlice";

import {
  Navigation,
  List,
  ListItem,
  DeleteItem,
  Title,
} from "./CategoryList.styled";

import delteIcon from "../img/delete-category.png";

const CategoryList = () => {
  const { categoriesList } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    dispatch(deleteTodoCategory(e.target.id));
  };

  return (
    <Navigation>
      <Title>Kategórie</Title>
      <List>
        {categoriesList
          ?.slice()
          .sort((a, b) => (a > b ? 1 : -1))
          .map((el, id) => {
            return (
              <ListItem key={id}>
                <DeleteItem src={delteIcon} onClick={handleDelete} id={el.id} />
                <Link to={`/todolist/${el.id}`}>{el.name}</Link>
              </ListItem>
            );
          })}
      </List>
    </Navigation>
  );
};

export default CategoryList;
