
import Tag from '../../components/Tag/Tag.jsx'
import { FaStar } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { MdPeopleAlt ,MdOutlineInsertPageBreak} from "react-icons/md";

const Book = () => {

    return (
        <div className=''>
            <div className="card bg-base-100 shadow-xl border grid grid-cols-3 my-5">
                <figure className="px-5 col-span-1">
                    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl m-3" />
                </figure>
                <div className="card-body col-span-2">
                    <h1 className="text-xl font-bold">Book Name</h1>
                    <p className="border-b border-dashed pb-3">By : Author</p>
                    <div className="flex items-center gap-10">
                        <div className="flex items-center gap-2">
                            <strong>tags : </strong>
                            <div>
                                Tags
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>
                                <CiLocationOn />
                            </span>
                            <p className="">Location</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-10">
                        <div className="flex items-center gap-3">
                            <p className="flex items-center gap-1"><MdPeopleAlt />Publisher :</p>
                            <p className=""> Publisher</p>
                        </div>
                        <div className="flex items-center gap-5">
                            <div className="flex items-center gap-1">
                                <MdOutlineInsertPageBreak />
                                <p className="">Pages</p>
                            </div>
                            <p className="">122</p>
                        </div>
                    </div>
                    <hr className="my-5" />
                    <div className=" flex items-center gap-4">
                        <button className='btn btn-sm text-sm rounded-2xl bg-blue-300 text-blue-800'>category : Classic</button>
                        <button className='btn btn-sm text-sm rounded-2xl bg-red-300 text-red-800'>Rating : 4.8</button>
                        <button className='btn btn-success text-white btn-sm text-sm rounded-2xl '>View Details</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Book