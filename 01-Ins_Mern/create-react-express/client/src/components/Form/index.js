import React, { useRef } from "react";
import { UPDATE_BOOKS } from "../../utils/actions";
import API from "../../utils/API";
import { useBookContext } from "../../utils/GlobalState";

function Form () {
    const inputRef = useRef();
    const [_, dispatch] = useBookContext();

    const getBooks = (event) => {
        event.preventDefault();
        API.getBooks(inputRef.current.value)
        .then(results => {
            dispatch({
                type: UPDATE_BOOKS,
                books: results.data
            });
        })
        .catch(err => console.error(err));
    }

    return (
        <div className="card">
            <form className="form-group">
                <input className="input-group" placeholder="Search for a Title" ref={useRef}></input>
                <button className="btn" onClick={getBooks}>Search</button>
            </form>
        </div>
    )
}

export default Form;