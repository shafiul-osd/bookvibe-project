import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import Book from '../Book/Book.jsx'
const Books = () => {
	const [books,setBooks] = useState([])
	useEffect(()=>{
		fetch("booksData.json")
		.then(res => res.json())
		.then(data => setBooks(data))
	},[])
	
  return (
    <div className="max-w-[1440px] mx-auto">
   	<div className="w-[90%] mx-auto">
   		<h1 className="text-3xl md:text-4xl text-center my-10">Books</h1>
   		<div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-3 ">
   			{
   				books.map(book => <Link to="/bookdetails"> <Book book={book}/></Link>)
   			}
   		</div>
   	</div>
    </div>
  )
}

export default Books