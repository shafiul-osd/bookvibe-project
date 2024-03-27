import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout/Layout.jsx';
import ErrorPage from '../pages/ErrorPage/ErrorPage.jsx';
import Home from '../pages/Home/Home.jsx';
import ListedBooks from '../pages/ListedBooks/ListedBooks.jsx';
import PagesToRead from '../pages/PagesToRead/PagesToRead.jsx';
import BookDetails from '../pages/BookDetails/BookDetails.jsx';
import { useParams } from 'react-router-dom';

// Define BookDetailsWrapper component outside of the router declaration
const BookDetailsWrapper = () => {
  const { id } = useParams();

  const handleRead = (data) => {
    // Retrieve existing data from local storage or initialize an empty array
    let existingData = JSON.parse(localStorage.getItem('readData')) || [];
    
    // Check if the data already exists in the array
    if (!existingData.includes(data)) {
      // Append new data to existing array
      existingData.push(data);

      // Save updated array back to local storage
      localStorage.setItem('readData', JSON.stringify(existingData));

      // Optionally, you can also perform other actions here
      alert('Data saved to local storage.');
    } else {
      alert('Data already exists in local storage.');
    }
  };

  const handleWish = (data) => {
    // Retrieve existing data from local storage or initialize an empty array
    let existingData = JSON.parse(localStorage.getItem('wishData')) || [];
    
    // Check if the data already exists in the array
    if (!existingData.includes(data)) {
      // Append new data to existing array
      existingData.push(data);

      // Save updated array back to local storage
      localStorage.setItem('wishData', JSON.stringify(existingData));

      // Optionally, you can also perform other actions here
      alert('Wish saved to local storage.');
    } else {
      alert('Wish already exists in local storage.');
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
