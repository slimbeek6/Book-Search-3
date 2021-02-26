import React from "react";

function Header () {
    return (
        <div
          style={{ height: 560, clear: "both", paddingTop: 120, textAlign: "center"}}
          className="jumbotron border border-success"
        >
          <h1 className="text-center display-4">(React) Google Books Search</h1>
          <h3 className="text-center">Search for and Save Books of Interest</h3>
        </div>
      );
}

export default Header;