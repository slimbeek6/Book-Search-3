import React, { createContext, useReducer, useContext } from "react";
import {
    UPDATE_BOOKS,
    ADD_BOOK,
    REMOVE_BOOK,
    SET_CURRENT_BOOK,
    SEARCH_BOOK,
    LOADING,
    ADD_SAVED,
    REMOVE_SAVED,
    UPDATE_SAVED
} from "./actions";

const BookContext = createContext();
const { Provider } = BookContext;

const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_BOOKS:
            return {
                ...state,
                books: [...action.books],
                loading: false
            };
        default:
            return state;
    }
};

const BookProvider = ({ value =[], ...props}) => {
    const [state, dispatch] = useReducer(reducer, {
        books:[],
        currentBook: {
            _id: 0,
            title: "",
            author: "",
            synopsis: ""
        },
        saved: [],
        loading: false
    });

    return <Provider value={[state, dispatch]}{...props} />;
};

const useBookContext = () => {
    return useContext(BookContext);
}

export { BookProvider, useBookContext };