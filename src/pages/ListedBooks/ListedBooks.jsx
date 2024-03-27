import { useEffect, useState } from 'react';
import ListedBookRead from '../../components/ListedBookRead/ListedBookRead';
import ListedBookWish from '../../components/ListedBookWish/ListedBookWish';

const ListedBooks = () => {
  const [reads, setReads] = useState([]);
  const [wishes, setWishes] = useState([]);
  useEffect(() => {
    // Retrieve data from local storage for "readData" array
    const readData = JSON.parse(localStorage.getItem('readData')) || [];
    // Retrieve data from local storage for "wishData" array
    const wishData = JSON.parse(localStorage.getItem('wishData')) || [];

    setReads(readData);
    setWishes(wishData);
    // Alert the lengths of both arrays
    // alert(`Length of Read Data: ${readData.length}\nLength of Wish Data: ${wishData.length}`);
  }, []); // Empty dependency array ensures the effect runs only once when component mounts

  return (
    <div className='max-w-[1440px] mx-auto'>
      <div className="w-[90%] mx-auto">
        <div className="text-5xl">
          <h1 className="text-center bg-gray-100 p-10 rounded-xl">Books</h1>
        </div>
        <div className="text-center my-5 text-white">
          <select className="select select-success  bg-success p-5 w-[10%] max-w-xs">
            <option selected disabled>Sort By</option>
            <option>English</option>
            <option>Japanese</option>
            <option>Italian</option>
          </select>
        </div>
        <div className="">
          <div role="tablist" className="tabs tabs-lifted">
            <input type="radio" name="my_tabs_2" role="tab" className="tab " aria-label="Read" checked />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
              {
                reads.map(read => <ListedBookRead key={read.bookId} read={read} />)
              }
            </div>

            <input type="radio" name="my_tabs_2" role="tab" className="tab " aria-label="Wish" />
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
