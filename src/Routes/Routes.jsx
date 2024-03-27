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
    let existingData = JSON.parse(localStorage.getItem('readData')) || [];

    // If data is an object, stringify it for comparison
    const stringifiedData = JSON.stringify(data);

    if (!existingData.some(item => JSON.stringify(item) === stringifiedData)) {
      existingData.push(data);
      localStorage.setItem('readData', JSON.stringify(existingData));
      toast.success("Successfully Added to Read List");
    } else {
      toast.error('The Item Already Exists!!!');
    }
  };

  const handleWish = (data) => {
    let existingData = JSON.parse(localStorage.getItem('wishData')) || [];

    const stringifiedData = JSON.stringify(data);

    if (!existingData.some(item => JSON.stringify(item) === stringifiedData)) {
      existingData.push(data);
      localStorage.setItem('wishData', JSON.stringify(existingData));
      toast.success("Successfully Added to Wish List List");
    } else {
      toast.error('The Item Already Exists!!!');
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
