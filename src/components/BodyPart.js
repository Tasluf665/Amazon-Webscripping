import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const BodyPart = ({ allData }) => {
  return (
    <Card className="mx-2 align-content-center d-flex">
      {allData ? (
        <>
          <Card.Img
            variant="top"
            src={allData.img}
            style={{
              width: "300px",
              height: "350px",
              margin: "auto",
              marginTop: "30px",
            }}
          />
          <Card.Body>
            <Card.Title>{allData.title}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              <span style={{ fontWeight: "bold" }}>Price</span> {allData.price}
            </ListGroupItem>
            <ListGroupItem>
              {" "}
              <span style={{ fontWeight: "bold" }}>Rating</span>{" "}
              {allData.rating}
            </ListGroupItem>
            <ListGroupItem>
              {" "}
              <span style={{ fontWeight: "bold" }}>Shipping Fee </span>{" "}
              {allData.shippingFee}
            </ListGroupItem>
            {allData.stockLeft.length > 0 ? (
              <ListGroupItem>
                {" "}
                <span style={{ fontWeight: "bold" }}>Stock Left</span>{" "}
                {allData.stockLeft}
              </ListGroupItem>
            ) : null}
            <ListGroupItem>
              <Card.Title style={{ textAlign: "center" }}>Reviews</Card.Title>
            </ListGroupItem>
            {allData.ALLREVIEWS.map((item) => {
              return (
                <ListGroupItem key={item.reviewTitle + item.reviewrName}>
                  <span style={{ fontWeight: "bold" }}>Title: </span>{" "}
                  {item.reviewTitle}
                  <br />
                  <span style={{ fontWeight: "bold" }}>Name:</span>{" "}
                  {item.reviewrName}
                  <br />
                  <span style={{ fontWeight: "bold" }}>Rating:</span>{" "}
                  {item.reviewrRating}
                </ListGroupItem>
              );
            })}
          </ListGroup>
        </>
      ) : (
        <Card.Body
          style={{
            minHeight: "200px",
          }}
          className="d-flex flex-column min-vh-70 justify-content-center align-items-center"
        >
          <Card.Title>Add a Product</Card.Title>
        </Card.Body>
      )}
    </Card>
  );
};
