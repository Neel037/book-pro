import React from 'react';
import BannerImage from '../../assets/books.jpg';

const Banner = () => {
    return (
        <div>
            <div className='flex flex-col-reverse md:flex-row items-center justify-between bg-gray-100 p-20 rounded-2xl'>
                <div>
                    <h1 className='text-5xl font-bold my-10'>Books to freshen up<br/>your bookshelf</h1>
                    <button className='btn btn-primary'><a href="#allBooks">View The List</a></button>
                </div>
                <img src={BannerImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;