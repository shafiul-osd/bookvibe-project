import React from 'react';
import { MdOutlineMailOutline } from "react-icons/md";
import { FaWhatsapp, FaTelegramPlane, FaLinkedin, FaGithub, FaFacebookSquare } from "react-icons/fa";
const Contacts = () => {
    return (
        <div className='max-w-[1440px] mx-auto my-20'>
            <div className="w-[90%] mx-auto">
                <h1 className="text-2xl font-bold text-center my-10">Contact Us</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="">
                        <h1 className="text-2xl p-3">Tell Me On</h1>
                        <div className="border rounded-2xl ">
                            <div className="flex items-center gap-3 p-3 bg-gray-100 border m-3 rounded-xl ">
                                <MdOutlineMailOutline className='text-3xl' />
                                <span>Email</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-gray-100 border m-3 rounded-xl ">
                                <FaWhatsapp className='text-3xl' />
                                <span>WhatsApp</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-gray-100 border m-3 rounded-xl ">
                                <FaTelegramPlane className='text-3xl' />
                                <span>Telegram</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-gray-100 border m-3 rounded-xl ">
                                <FaLinkedin className='text-3xl' />
                                <span>Linkedin</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-gray-100 border m-3 rounded-xl ">
                                <FaGithub className='text-3xl' />
                                <span>Git hub</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-gray-100 border m-3 rounded-xl ">
                                <FaFacebookSquare className='text-3xl' />
                                <span>Facebook</span>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <h1 className="text-2xl p-3">Get In Touch</h1>
                        <div className="border rounded-2xl p-3 ">
                            <div className="grid grid-cols-2 gap-3">
                                <label className="input input-bordered flex items-center gap-2">
                                    Name
                                    <input type="text" className="grow" />
                                </label>
                                <label className="input input-bordered flex items-center gap-2">
                                    Email
                                    <input type="text" className="grow" />
                                </label>
                                <label className="input input-bordered flex items-center gap-2">
                                    Phone
                                    <input type="text" className="grow" />
                                </label>
                                <label className="input input-bordered flex items-center gap-2">
                                    Subject
                                    <input type="text" className="grow" />
                                </label>
                            </div>
                            <textarea placeholder="Describe " className="textarea textarea-bordered textarea-sm w-full h-[30vh] my-2" ></textarea>
                            <div className="text-left my-5">
                                <button className='btn btn-info '>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;