import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout/Layout.jsx';
import ErrorPage from '../pages/ErrorPage/ErrorPage.jsx';
import Home from '../pages/Home/Home.jsx';
import ListedBooks from '../pages/ListedBooks/ListedBooks.jsx';
import PagesToRead from '../pages/PagesToRead/PagesToRead.jsx';
import BookDetails from '../pages/BookDetails/BookDetails.jsx';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

// Define BookDetailsWrapper component outside of the router declaration
const BookDetailsWrapper = () => {
  const { id } = useParams();

  const handleRead = (data) => {
    let existingReadData = JSON.parse(localStorage.getItem('readData')) || [];
    let existingWishData = JSON.parse(localStorage.getItem('wishData')) || [];

    // If data is an object, stringify it for comparison
    const stringifiedData = JSON.stringify(data);

    if (!existingReadData.some(item => JSON.stringify(item) === stringifiedData)) {
      existingReadData.push(data);
      localStorage.setItem('readData', JSON.stringify(existingReadData));
      toast.success("Item successfully added to Read List!");
      // Check if the item exists in the Wishlist and remove it
      const index = existingWishData.findIndex(item => JSON.stringify(item) === stringifiedData);
      if (index !== -1) {
        existingWishData.splice(index, 1);
        localStorage.setItem('wishData', JSON.stringify(existingWishData));
      }
    } else {
      toast.error("The Item Already Exists in the Read List!!!");
    }
  };

  const handleWish = (data) => {
    let existingReadData = JSON.parse(localStorage.getItem('readData')) || [];
    let existingWishData = JSON.parse(localStorage.getItem('wishData')) || [];

    // If data is an object, stringify it for comparison
    const stringifiedData = JSON.stringify(data);

    // Check if the item already exists in the Read List
    if (existingReadData.some(item => JSON.stringify(item) === stringifiedData)) {
      toast.error('The Item Already Exists in the Read List!!!')
    } else {
      // Check if the item already exists in the Wishlist
      if (!existingWishData.some(item => JSON.stringify(item) === stringifiedData)) {
        existingWishData.push(data);
        localStorage.setItem('wishData', JSON.stringify(existingWishData));
        toast.success("Wish saved to local storage.");
      } else {
        toast.error("This item already exist in wish list!!!");
      }
    }
  };

  return <BookDetails handleRead={handleRead} handleWish={handleWish} />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/listedbooks",
        element: <ListedBooks />
      },
      {
        path: "/pagestoread",
        element: <PagesToRead />
      },
      {
        path: "/anotherpage",
        element: <div>Another Page</div>
      },
      {
        path: "/newpage",
        element: <div>New Page</div>
      },
      {
        path: "/bookdetails/:id",
        loader: () => fetch("booksData.json"),
        element: <BookDetailsWrapper /> // Use BookDetailsWrapper here
      }
    ],
  }
]);

export default router;
