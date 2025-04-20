



import React from 'react';
import { CiStar } from 'react-icons/ci';
import { Link } from 'react-router';


    const CardList = ({book}) => {
    const {bookId, bookName, author,totalPages, image, rating, category, tags, yearOfPublishing} = book;
    return (
        <div>
            <Link to={`/bookDetails/${bookId}`}>
            <div className="flex  shadow-sm p-4">
                <div className=' rounded-lg'>
                <img    className="w-50 rounded-lg mx-auto m-4"
                        src={image}
                        />
                </div>
                
                <div className="card-body">
                    <h2 className="card-title">
                        {bookName}
                    </h2>
                    <div className="card-actions my-2">
                    {
                        tags.map((tag, index) => <div key={index} className="badge badge-outline">{tag}</div>)
                    }

                    </div>
                    <p>By: {author}</p>

                    <p>Total Pages: {totalPages}</p>
                    <p>Published Year: {yearOfPublishing}</p>

                    <div className="border-b border-dashed border-gray-250"></div>

                    <div className='flex justify-between my-2'>
                      <p>Category: {category}</p>
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

export default CardList;