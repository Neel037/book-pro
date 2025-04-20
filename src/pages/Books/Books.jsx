import React from 'react'
import Book from '../Book/Book';


const Books = ({data}) => {


    

    return (
        <div>
            <h1 id='allBooks' className='text-5xl text-center my-10'>Books</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                data.map((book)=><Book key={book.bookId} book={book}/>)
            }
            </div>
            
        </div>
    );
};

export default Books;