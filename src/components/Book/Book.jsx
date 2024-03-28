import { Link } from 'react-router-dom';
import Tag from '../../components/Tag/Tag.jsx'
import { FaStar } from "react-icons/fa";
const Book = ({ book }) => {
  const { bookId, tags, image, bookName, category, publisher, rating, author } = book;
  return (
    <Link to={`/bookdetails/${bookId}`}>
      <div>
        <div className="card bg-base-100 shadow-xl border">
          <figure className="px-5 pt-5">
            <img className="w-fit h-96" src={image} />
          </figure>
          <div className="card-body">
            <div className="flex gap-1">
              {
                tags.map((tag,i) => <Tag key={i} tag={tag} />)
              }
            </div>
            <h1 className="text-xl font-bold">{bookName}</h1>
            <p className="border-b border-dashed pb-3">By : {author}</p>
            <div className="flex justify-between items-center mt-5">
              <p>{category}</p>
              <div className="flex items-center gap-1">
                <p>{rating}</p>
                <FaStar className="text-yellow-500 text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Book