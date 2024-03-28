import React from 'react';

const About = () => {
    return (
        <div className='max-w-[1440px] mx-auto my-5'>
            <div className="w-[90%] mx-auto">
                <div className="text-center w-[70%] mx-auto">
                    <h1 className='text-center text-2xl font-bold'>About Us</h1>
                    <p className="text-base">Welcome to bookVibe, your ultimate destination for all things literature! At bookVibe, we're passionate about connecting readers with their next great read and fostering a vibrant community of book lover</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-16">
                    <div className="md:col-span-1">
                        <img src="https://img.freepik.com/premium-photo/book-stack-library-room-blurred-bookshelf-background_42691-514.jpg" alt="" className="rounded-2xl" />
                    </div>
                    <div className="md:col-span-2">
                        <h1 className="text-2xl font-bold space-y-8">Our Mission</h1>
                        <p className="">Our mission is simple: to inspire, inform, and delight readers of all ages and backgrounds. We believe in the transformative power of books and strive to make the world of literature more accessible and enjoyable for everyone.</p>
                        <p className="">
Certainly! Here's an additional paragraph about your mission to add to your contact page:

Our Mission
At bookVibe, our mission goes beyond just recommending books; we're dedicated to fostering a deep and enduring love for literature. We believe that books have the power to inspire, educate, and unite people from all walks of life.</p>
                    </div>
                </div>
                <div>
                    <div className="md:col-span-2 my-10">
                        <h1 className="text-2xl font-bold">What we Offer</h1>
                    </div>
                    <ul className="list-disc space-y-5">
                        <li><strong>Curated Recommendations: </strong><span>Our team of avid readers carefully selects and curates book recommendations across various genres, ensuring that there's something for everyone.</span></li>
                        <li><strong>Community Engagement: </strong><span> Join our thriving community of book enthusiasts to discuss your favorite reads, discover new authors, and connect with fellow bibliophiles from around the globe.</span></li>
                        <li><strong>Author Spotlights:</strong><span> Get to know the voices behind the stories with our exclusive author spotlights, interviews, and behind-the-scenes peeks into the creative process..</span></li>
                        <li><strong>Book Reviews: </strong><span>Whether you're seeking in-depth critiques or quick summaries, our collection of book reviews provides valuable insights to help you make informed reading choices.</span></li>
                    </ul>
                </div>
                <div className="my-10">
                    <h1 className="text-center text-2xl font-bold my-10">Meet Our Founder</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="md:col-span-2">
                            <h1 className="text-xl font-bold">Rosie Langello</h1>
                            <p className="text-base italic my-2">Founder</p>
                            <p className="my-3">Rosie Langello has always been keen and passionate about reading books from different genres. Since her teenage years, she found tranquility and peace of mind reading these books which eventually led her to get an English Literature degree from Rutgers University. Afterward, books were indispensable to recharging her and giving her life more meaning.</p>
                            <p className="my-3">The journey of Book Vibe was paved by her, starting in 2005, with enthusiastic readers just like Rosie. She along with her team has precisely read, analyzed, and reviewed a variety of books to bring forth you the best selections. And with this strategic book discovery, leading media like the Guardian, and Forbes has featured Book Vibe several times.</p>
                            <button className='btn btn-info my-3'>Know more</button>
                        </div>
                        <div className="md:col-span-1 overflow-hidden">
                            <img className='w-full rounded-full' src="https://bookvibe.com/wp-content/uploads/2023/12/Rosie-Langello-BookVibe-Founder.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;