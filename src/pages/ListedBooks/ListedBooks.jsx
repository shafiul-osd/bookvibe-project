import React from 'react'

const ListedBooks = () => {
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
            <input type="radio" name="my_tabs_2" role="tab" className="tab text-xl" aria-label="Read Books" />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6"></div>

            <input type="radio" name="my_tabs_2" role="tab" className="tab text-xl" aria-label="Wish List Books" checked />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListedBooks