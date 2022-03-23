import React from "react";
import { ListOfProduct } from "./components/ListOfProduct";
import { CardGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const CardItem = () => {
  return (
    <CardGroup>
      <ListOfProduct />
      <ListOfProduct />
      <ListOfProduct />
    </CardGroup>
  );
};
