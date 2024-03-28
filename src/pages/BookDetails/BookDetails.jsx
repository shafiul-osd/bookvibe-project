import React, { useState, useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetails = ({handleRead,handleWish}) => {
  const [exactData, setExactData] = useState(null);
  const { id } = useParams();
  const books = useLoaderData();

  useEffect(() => {
    const foundBook = books.find(book => book.bookId == id);
    if (foundBook) {
      setExactData(foundBook);
    }
  }, [id, books]);

  if (!exactData) {
    return <div>Loading...</div>;
  }

  return (
    <div className='max-w-[1440px] mx-auto'>
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 my-20">
        <div className="bg-gray-100 flex justify-center items-center rounded-xl">
          <img className='w-[70%] h-[80%]' src={exactData.image} alt="" />
        </div>
        <div className="">
          <h1 className="text-3xl">{exactData.bookName}</h1>
          <p className="mb-5 text-lg my-5">By :{exactData.author}</p>
          <hr />
          <p className="my-5 text-xl">{exactData.category}</p>
          <hr />
          <div className="my-5">
            <p className="">
              <strong>Review :</strong> {exactData.review}
            </p>
            <div className="flex items-center gap-2 my-5">
              <strong>Tags : </strong>
              {
                exactData.tags.map((tag,i)=> <p className='bg-green-300 px-2 py-1 rounded-xl text-green-900' key={i}> #{tag}</p>)
              }
              
            </div>
            <hr className='my-5' />
            <div className=''>
              <table width="70%">
                <thead></thead>
                <tbody>
                  <tr>
                    <td>Number of Pages:</td>
                    <td><strong>{exactData.totalPages}</strong></td>
                  </tr>
                  <tr>
                    <td>Publisher:</td>
                    <td><strong>{exactData.publisher}</strong></td>
                  </tr>
                  <tr>
                    <td>Year of Publishing:</td>
                    <td><strong>{exactData.yearOfPublishing}</strong></td>
                  </tr>
                  <tr>
                    <td>Rating:</td>
                    <td><strong>{exactData.rating}</strong></td>
                  </tr>
                </tbody>
                <tfoot></tfoot>
              </table>
            </div>
            <div className="mt-10 flex items-center gap-3">
              <button onClick={()=> handleRead(exactData)} className='btn btn-success btn-outline px-8 text-lg '>Read</button>
              <button onClick={()=> handleWish(exactData)} className='btn btn-info px-8 text-lg'>Wish list</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
