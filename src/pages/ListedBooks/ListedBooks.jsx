import { useEffect, useState } from 'react';
import ListedBookRead from '../../components/ListedBookRead/ListedBookRead';
import ListedBookWish from '../../components/ListedBookWish/ListedBookWish';

const ListedBooks = () => {
  const [reads, setReads] = useState([]);
  const [wishes, setWishes] = useState([]);
  const [sortBy, setSortBy] = useState(''); // State to hold the selected sorting option

  useEffect(() => {
    // Retrieve data from local storage for "readData" array
    const readData = JSON.parse(localStorage.getItem('readData')) || [];
    // Retrieve data from local storage for "wishData" array
    const wishData = JSON.parse(localStorage.getItem('wishData')) || [];

    // Sort reads based on the selected field
    const sortedReads = sortBooks(readData, sortBy);
    // Sort wishes based on the selected field
    const sortedWishes = sortBooks(wishData, sortBy);

    setReads(sortedReads);
    setWishes(sortedWishes);
  }, [sortBy]); // Re-run effect when sortBy changes

  // Function to sort books based on the selected field
  const sortBooks = (books, sortBy) => {
    if (!sortBy) return books; // If sortBy is empty, return books as it is

    // Sort books based on the selected field
    return books.sort((a, b) => {
      if (sortBy === 'rating') {
        // Convert rating to numbers before comparison
        const ratingA = parseFloat(a[sortBy]);
        const ratingB = parseFloat(b[sortBy]);

        // Compare ratings
        if (ratingA < ratingB) return -1; // Sorting in descending order
        if (ratingA > ratingB) return 1;
        return 0;
      } else {
        // For other fields, compare directly
        if (a[sortBy] < b[sortBy]) return 1; // Sorting in descending order
        if (a[sortBy] > b[sortBy]) return -1;
        return 0;
      }
    });
  };

  // Function to handle change in the sorting drop-down
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
            <input type="radio" name="my_tabs_2" role="tab" className="tab text-xl " aria-label="Read" checked />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
              {
                reads.map(read => <ListedBookRead key={read.bookId} read={read} />)
              }
            </div>

            <input type="radio" name="my_tabs_2" role="tab" className="tab text-xl" aria-label="Wish" />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
              {
                wishes.map(wish => <ListedBookWish key={wish.bookId} wish={wish} />)
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
