import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./SearchBar";
import { BodyPart } from "./BodyPart";

export const ListOfProduct = () => {
  const [allLinks, setAllLinks] = useState([]);
  const [showAllLink, setShowAllLink] = useState(false);
  const [itemClick, setItemClick] = useState();

  const [allData, setAllData] = React.useState();

  const searchOptionHandel = async (item) => {
    const res = await fetch(`http://localhost:3000/searchPage?search=${item}`);
    const data = await res.json();
    setAllLinks(data.allData);
    setShowAllLink(true);
  };

  const handleItemClick = async (item) => {
    const res = await fetch(`http://localhost:3000/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ link: item }),
    });
    const data = await res.json();
    setAllData(data.allData);

    setShowAllLink(false);
  };
  return (
    <Card className="border-0" style={{ marginRight: "2%" }}>
      <SearchBar searchOptionHandel={searchOptionHandel} />
      {showAllLink ? (
        <Card.Body>
          {allLinks.map((item) => {
            return (
              <Card key={item.linkAddress}>
                <Card.Body onClick={() => handleItemClick(item.linkAddress)}>
                  {item.linkTitle}
                </Card.Body>
              </Card>
            );
          })}
        </Card.Body>
      ) : (
        <BodyPart allData={allData} />
      )}
    </Card>
  );
};
