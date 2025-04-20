import React from 'react';
import { CiStar } from 'react-icons/ci';
import { Link } from 'react-router';

const Book = ({book}) => {
    const {bookId, bookName, author, image, rating, category, tags} = book;
    return (
        <div>
            <Link to={`/bookDetails/${bookId}`}>
            <div className="card shadow-sm p-4">
                <div className='bg-gray-100 rounded-lg'>
                <img    className="h-60 rounded-lg mx-auto m-4"
                        src={image}
                        alt="Shoes" />
                </div>
                <div className="card-actions my-2">
                    {
                        tags.map((tag, index) => <div key={index} className="badge badge-outline">{tag}</div>)
                    }

                    </div>
                <div className="card-body">
                    <h2 className="card-title">
                        {bookName}
                    </h2>
                    <p>By: {author}</p>

                    <div className="border-b border-dashed border-gray-250"></div>

                    <div className='flex justify-between my-2'>
                      <p>{category}</p>
                      <div className='flex items-center'>
                      <p>{rating}</p> <CiStar/>
                      </div>
                    </div>

                    
                </div>
            </div>
            </Link>
            
        </div>
    );
};

export default Book;