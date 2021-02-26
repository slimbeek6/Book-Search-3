import React, { useEffect } from 'react';
import { ListItem, List } from '../List';
import API from '../../utils/API';
import { useStoreContext } from "../../utils/GlobalState";

const Book = (props) => {
  const [state, dispatch] = useStoreContext();

  const getBooks = () => {
    API.getBooks()
      .then(results => {
        dispatch({
          type: UPDATE_BOOKS,
          books: results.data
        });
      })
      .catch(err => console.error(err))
  }

  useEffect(() => {
    getBooks();
  }, [])

  return (
    <div>
      <h2>All Books</h2>
      <List>
        {state.books.map(book => (
          <ListItem key={book._id}>
            <Link to={"/books/" + book._id}>
              <strong>
                {book.title} by {book.author}
              </strong>
            </Link>
            <DeleteBtn onClick={() => removePost(post._id)} />
          </ListItem>
      ))}
      </List>
    </div>
  )
}

export default BooksList;