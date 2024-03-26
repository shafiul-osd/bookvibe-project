import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className="max-w-[1440px] mx-auto my-10">
   	<div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-5 py-0 md:px-16 bg-gray-100 rounded-xl">
   		 <div className="order-last md:order-first">
   			 <p className="py-6 text-2xl md:text-5xl font-bold">Books to Freshen Up Your Bookself</p>
   			 <Link to="/pagestoread"><button className="btn md:btn-lg btn-success text-white">View The List</button></Link>
   		 </div>
   		<img src="https://img.freepik.com/free-photo/red-hardcover-book-front-cover_1101-833.jpg" className="order-first md:order-last w-full rounded-xl shadow-2xl h-[70%]" />
   	</div>
    </div>
  )
}

export default Banner
