import React, { useState } from "react";
import { InputGroup, FormControl, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function SearchBar({ searchOptionHandel }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);

    let URL = `https://completion.amazon.com/api/2017/suggestions?limit=20&prefix=${searchWord}&suggestion-type=KEYWORD&page-type=Detail&alias=aps&site-variant=desktop&version=2&event=onKeyPress&wc=&lop=en_US&fb=1&session-id=144-8503021-1272102&request-id=EPCYYJ2H68QH4P71X16J&mid=ATVPDKIKX0DER&plain-mid=1&client-info=amazon-search-ui`;

    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        let suggestions = data.suggestions;

        const newFilter = suggestions.filter((suggestion) => {
          return suggestion.value
            .toLowerCase()
            .includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
          setFilteredData([]);
        } else {
          setFilteredData(newFilter);
        }
      });
  };
  return (
    <Dropdown className="mx-2 justify-content-center align-content-center d-flex">
      <Dropdown.Toggle
        id="dropdown-autoclose-true"
        variant="white"
        bsPrefix=".dropdown-toggle::after {
            content: none;
        }"
      >
        <InputGroup
          className="mb-2"
          onChange={handleFilter}
          value={wordEntered}
          style={{ minWidth: "390px" }}
        >
          <FormControl
            placeholder="Product"
            aria-label="Product"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </Dropdown.Toggle>
      {filteredData.length != 0 ? (
        <Dropdown.Menu hide="true">
          {filteredData.slice(0, 15).map((item, key) => {
            return (
              <Dropdown.Item
                key={item.value}
                onClick={() => searchOptionHandel(item.value)}
              >
                {item.value}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      ) : null}
    </Dropdown>
  );
}

export default SearchBar;
