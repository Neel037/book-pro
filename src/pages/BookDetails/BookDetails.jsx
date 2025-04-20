import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToDB, addToWishDB } from '../../utility/addToDB';

const BookDetails = () => {
    const {id} = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookId);
    const { bookName, author, review, image, totalPages, yearOfPublishing, publisher, rating, category, tags} = singleBook || {};

    const handleMarkAsRead = id => {
        addToDB(id);
    }

    const handleWishList = id => {
        addToWishDB(id);
    }

    return (
        <div>
            
            <div className='container mx-auto my-10'>

                <div className="flex flex-col md:flex-row gap-10 items-center">
                    <figure className='md:w-1/2 bg-gray-100 py-25 rounded-lg'>
                        <img className='w-[60%] md:w-[40%] mx-auto rounded-lg'
                            src={image}
                            alt="Album" />
                    </figure>
                    <div className="md:w-1/2 p-4">
                        <h2 className="text-4xl text-bold">{bookName}</h2>
                        <p className='text-lg'>By : {author}</p>
                        <p className='text-lg border-y-1 py-2 my-2'>Category : {category}</p>
                        <p><strong>Review: </strong>{review}</p>
                        <p className='my-2 border-b-1 pb-3'><strong>Tag: </strong>{
                            tags.map((tag, index) => <span key={index} className="badge badge-outline mx-2">{tag}</span>)
                        }</p>
                        <p>No. of Pages: <strong>{totalPages}</strong></p>
                        <p>Publisher: <strong>{publisher}</strong></p>
                        <p>Year of Publishings: <strong>{yearOfPublishing}</strong></p>
                        <p>Rating: <strong>{rating}</strong></p>
                        <div className="card-actions mt-3">
                            <button onClick={()=>handleMarkAsRead(id)} className="btn">Mark as Read</button>
                            <button onClick={()=>handleWishList(id)} className="btn btn-primary">Add to WhiteList</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BookDetails;