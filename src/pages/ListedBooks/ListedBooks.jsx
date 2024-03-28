import { useEffect, useState } from 'react';
import ListedBookRead from '../../components/ListedBookRead/ListedBookRead';
import ListedBookWish from '../../components/ListedBookWish/ListedBookWish';

const ListedBooks = () => {
  const [reads, setReads] = useState([]);
  const [wishes, setWishes] = useState([]);
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    const readData = JSON.parse(localStorage.getItem('readData')) || [];
    const wishData = JSON.parse(localStorage.getItem('wishData')) || [];

    const sortedReads = sortBooks(readData, sortBy);
    const sortedWishes = sortBooks(wishData, sortBy);

    setReads(sortedReads);
    setWishes(sortedWishes);
  }, [sortBy]);

  const sortBooks = (books, sortBy) => {
    if (!sortBy) return books;

    return books.sort((a, b) => {
      if (sortBy == 'rating') {
        const ratingA = parseFloat(a[sortBy]);
        const ratingB = parseFloat(b[sortBy]);

        if (ratingA < ratingB) return -1;
        if (ratingA > ratingB) return 1;
        return 0;
      } else {
        if (a[sortBy] < b[sortBy]) return -1;
        if (a[sortBy] > b[sortBy]) return 1;
        return 0;
      }
    });
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div className='max-w-[1440px] mx-auto'>
      <div className="w-[90%] mx-auto">
        <div className="text-5xl">
          <h1 className="text-center bg-gray-100 p-10 rounded-xl">Books</h1>
        </div>
        <div className="text-center my-5 text-white">
          <select className=" bg-success rounded-lg w-[20%] px-10 py-5  text-white" onChange={handleSortChange}>
            <option selected disabled>Sort By</option>
            <option value="rating">Rating</option>
            <option value="numPages">Number of Pages</option>
            <option value="publishedYear">Published Year</option>
          </select>
        </div>
        <div className="">
          <div role="tablist" className="tabs tabs-lifted">
            <input type="radio" name="my_tabs_2" role="tab" className="tab text-xl " aria-label="ReadList" checked />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
              {reads.map(read => <ListedBookRead key={read.bookId} read={read} />)}
            </div>

            <input type="radio" name="my_tabs_2" role="tab" className="tab text-xl" aria-label="WishList" />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
              {wishes.map(wish => <ListedBookWish key={wish.bookId} wish={wish} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
