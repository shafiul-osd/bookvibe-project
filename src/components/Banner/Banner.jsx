import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className="max-w-[1440px] mx-auto my-10">
   	<div className="w-[90%] min-h-[80v] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center px-5 py-0 md:px-16 bg-gray-100 rounded-xl">
   		 <div className="order-last md:order-first md:col-span-2">
   			 <p className="py-6 text-2xl md:text-5xl font-bold">Books to Freshen Up Your Bookself</p>
   			 <Link to="/listedbooks"><button className="btn md:btn-lg btn-success text-white">View The List</button></Link>
   		 </div>
   		<img src="https://emcastellan.files.wordpress.com/2012/09/the-hunger-games-book-cover.jpg" className="order-first md:order-last md:col-span-1 w-full rounded-xl shadow-2xl h-[80%]" />
   	</div>
    </div>
  )
}

export default Banner
