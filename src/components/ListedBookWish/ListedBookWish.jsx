
import Tag from '../../components/Tag/Tag.jsx'
import { CiLocationOn } from "react-icons/ci";
import { MdPeopleAlt ,MdOutlineInsertPageBreak} from "react-icons/md";

const Book = ({wish}) => {
    const {bookName,author,image,tags,rating,category,publisher,totalPages,yearOfPublishing} = wish;
    return (
        <div className=''>
            <div className="card bg-base-100 shadow-xl border grid grid-cols-1 md:grid-cols-3 my-5">
                <figure className="px-5 col-span-1 md:col-span-1">
                    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl m-3" />
                </figure>
                <div className="card-body col-span-1 md:col-span-2">
                    <h1 className="text-xl font-bold text-center md:text-left">{bookName}</h1>
                    <p className="border-b border-dashed pb-3 text-center md:text-left">By : {author}</p>
                    <div className="flex flex-col md:flex-row items-center gap-10">
                        <div className="flex flex-col md:flex-row items-center gap-2">
                            <strong>tags : </strong>
                            <div className='flex gap-1 items-center'>
                                {
                                    tags.map((tag,i) => <Tag key={i} tag={tag}/>)
                                }
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>
                                <CiLocationOn />
                            </span>
                            <p className="">{yearOfPublishing}</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-10">
                        <div className="flex flex-col md:flex-row items-center gap-3">
                            <p className="flex items-center gap-1"><MdPeopleAlt />Publisher :</p>
                            <p className=""> {publisher}</p>
                        </div>
                        <div className="flex items-center gap-5">
                            <div className="flex items-center gap-1">
                                <MdOutlineInsertPageBreak />
                                <p className="">Pages</p>
                            </div>
                            <p className="">{totalPages}</p>
                        </div>
                    </div>
                    <hr className="my-5" />
                    <div className=" flex flex-col md:flex-row items-center gap-4">
                        <button className='btn btn-sm text-sm rounded-2xl bg-blue-300 text-blue-800'>category : {category}</button>
                        <button className='btn btn-sm text-sm rounded-2xl bg-red-300 text-red-800'>Rating : {rating}</button>
                        <button className='btn btn-success btn-md text-white text-sm rounded-2xl '>View Details</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Book