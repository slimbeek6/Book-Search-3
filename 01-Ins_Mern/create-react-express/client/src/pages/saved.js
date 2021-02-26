import React from "react";
import SavedBooksList from "../components/SavedBooksList";

const Saved = () => {
  return (
    <div className="container p-2">
      <h1>Saved Books</h1>
      <SavedBooksList />
    </div>
  )
};

export default Saved;