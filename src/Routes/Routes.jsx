import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout/Layout.jsx';
import ErrorPage from '../pages/ErrorPage/ErrorPage.jsx';
import Home from '../pages/Home/Home.jsx';
import ListedBooks from '../pages/ListedBooks/ListedBooks.jsx';
import PagesToRead from '../pages/PagesToRead/PagesToRead.jsx';
import BookDetails from '../pages/BookDetails/BookDetails.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/listedbooks",
        element: <ListedBooks/>
      },
      {
        path: "/pagestoread",
        element: <PagesToRead/>
      },
      {
        path: "/anotherpage",
        element: <div>Another Page</div> // Set new element as div
      },
      {
        path: "/newpage",
        element: <div>New Page</div> // Set new element as div
      },
      {
      	path: "/bookdetails",
      	loader: ()=> fetch("booksData.json"),
      	element: <BookDetails/>
      }
    ],
  }
]);

export default router;
