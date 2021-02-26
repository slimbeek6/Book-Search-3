import React, { useEffect } from 'react';
import { ListItem, List } from '../List';
import API from '../../utils/API';
import { useBookContext } from "../../utils/GlobalState";
import { Link } from "react-router-dom";
import { REMOVE_SAVED, UPDATE_SAVED } from "../../utils/actions";

const SavedBooksList = (props) => {
  const [state, dispatch] = useBookContext();

  const getBooks = () => {
    API.getBooks()
      .then(results => {
        dispatch({
          type: UPDATE_SAVED,
          books: results.data
        });
      })
      .catch(err => console.error(err))
  }

  useEffect(() => {
    getBooks();
  }, [])

  return (
    <div className="container border">
      <h2>All Books</h2>
      <List>
        {state.books.map(book => (
          <ListItem key={book._id}>
            <Link to={"/books"}>
              <div className="row">
                <div className="col-12">
                  <h4>{book.title}</h4>
                  <h6>{book.author}</h6>
                  <div className="row">
                    <image className="col-3 img-fluid" src={book.image} alt={book.title} />
                    <p className="col-9">{book.synopsis}</p>
                  </div>
                </div>
              </div>
            </Link>
            {/* <DeleteBtn onClick={() => removePost(post._id)} /> */}
          </ListItem>
      ))}
      </List>
    </div>
  )
}

export default SavedBooksList;