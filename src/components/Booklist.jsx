import React, {useState, useEffect} from 'react'
import '../App'
//import {API_URL} from '../API'
import axios from 'axios'


const Booklist = () => {



    const [searchTerm, setSearchTerm]= useState('')
    const [books, setBooks] = useState({ items: [] })
    const onInputChange = (e) => {
      setSearchTerm(e.target.value)
    }
  
    let API_URL = `https://www.googleapis.com/books/v1/volumes`
  
    const fetchBooks = async () => {
      //The call to API
      const result = await axios.get(`${API_URL}?q=${searchTerm}`)
      //
     // console.log(result.data)
     setBooks(result.data)
    }
  
    //The submit handler
  
    const onSubmitHandler = (e) => {
      e.preventDefault()
      //fetchbooks calls the google books API
      fetchBooks()
    }
  
    //Looking at the authors next
  
    const bookAuthors = authors => {
      if (authors.length <= 2) {
        authors = authors.join( ' and ')
      } else if (authors.length > 2) {
        let lastAuthor = ' and ' + authors.slice(-1)
        authors.pop()
        authors = authors.join(', ')
        authors += lastAuthor
      }
      return authors
    }
    return (
      <section>
        <form onSubmit={onSubmitHandler}>
          <label>
            <span>Search for a book</span>
            
            <input
              type="search"
              placeholder="microservice, restful design, etc,"
              //
              value={searchTerm}
              onChange={onInputChange}
            />
            <button type='submit'>Search</button>
          </label>
        </form>
  
        {/* UI for books search result */}
        <ul>
          {
            books.items.map((book, index) => {
              return (
                <li key={index}>
                  <div>
                    <img alt = {`${book.volumeInfo.title}book`} src={`http://books.goog;e.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`} />
                    <div>
                      <h3>{book.volumeInfo.title}</h3>
                      <p>{ bookAuthors(book.volumeInfo.authors)}</p>
                      <p>{book.volumeInfo.publishedDate}</p>
                    </div>
                  
                  </div>
                  <hr />
  
                </li>
              )
            })}
        </ul>
      </section>
    )
  }




















//     const [books, setBooks] = useState([])

//     useEffect(() => {
//         axios
//             .get(API_URL)
//             // .get(API_URL)
//             .then(res => {
//                 console.log(res.data)
//                 setBooks(res.data)
//             })
//             .catch (err=> console.log(err))
//     }, [])
        
//   return (
//     <div className='book-list'>
//         {books.map((book) => {
//             <div key={book.id}>
//                 <div>
//                     <h2>{book.title}</h2>
//                 </div>
               
//                 {/* <div>
//                     <button>Add to favorites</button>
//                 </div> */}
//             </div>
//         })}
//     </div>
//   )
// }
 
export default Booklist