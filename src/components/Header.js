import React from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Header = () => {
  return (
    <div expand="lg" className="bg-dark text-white top_head">
      <>
        <h1 className="header_h1 ">Product Comparison</h1>

        <p className="header_p">
          Find and select products to see the differences and similarities
          between them.
        </p>
      </>
    </div>
  );
};
