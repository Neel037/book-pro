import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredBook, getStoredWishedBook } from '../../utility/addToDB';

import CardList from '../CardList/CardList';

const ReadList = () => {
    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);

    const [sort, setSort] = useState('');

    const data = useLoaderData();


    useEffect(() => {
        const storedBookDataSTR = getStoredBook();
        const storedBookData = storedBookDataSTR.map(id => parseInt(id))
        const storedBook = data.filter(book => storedBookData.includes(book.bookId));
        setReadList(storedBook);
        
    }, []);

    useEffect(() => {
        const storedBookDataSTR = getStoredWishedBook();
        const storedBookData = storedBookDataSTR.map(id => parseInt(id))
        const storedBook = data.filter(book => storedBookData.includes(book.bookId));
        setWishList(storedBook);
        
    }, []);

    const handleReadSort = (sortType) => {
        setSort(sortType);
        if (sortType === 'year') {
            const sortedData = [...readList].sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
            setReadList(sortedData);
        } else if (sortType === 'rating') {
            const sortedData = [...readList].sort((a, b) => a.rating - b.rating);
            setReadList(sortedData);
        }
    }

    const handleWishSort = (sortType) => {
        setSort(sortType);
        if (sortType === 'year') {
            const sortedData = [...wishList].sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
            setWishList(sortedData);
        } else if (sortType === 'rating') {
            const sortedData = [...wishList].sort((a, b) => a.rating - b.rating);
            setWishList(sortedData);
        }
    }

 
    return (
        <div>
            <div className='container mx-auto my-10'>
                {/* name of each tab group should be unique */}
                <div className="tabs tabs-lift">
                    <input type="radio" name="my_tabs_2" className="tab" aria-label="Read Book List" defaultChecked/>

                    <div className="tab-content bg-base-100 border-base-300 p-6">

                        <div className='flex justify-between items-center'>
                        <details className="dropdown mx-auto">
                            <summary className="btn m-1">Sory By: {sort?sort:""}</summary>
                            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li><a onClick={()=>handleReadSort("year")}>Year</a></li>
                                <li><a onClick={()=>handleReadSort("rating")}>Ratings</a></li>
                            </ul>
                        </details>
                        </div>
                    {
                        readList.map(book => <CardList key={book.bookId} book={book} />)    
                    }
                    </div>
                    

                    <input type="radio" name="my_tabs_2" className="tab" aria-label="My Wishlist"  />
                    <div className="tab-content bg-base-100 border-base-300 p-6">

                    <div className='flex justify-between items-center'>
                        <details className="dropdown mx-auto">
                            <summary className="btn m-1">Sory By: {sort?sort:""}</summary>
                            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li><a onClick={()=>handleWishSort("year")}>Year</a></li>
                                <li><a onClick={()=>handleWishSort("rating")}>Ratings</a></li>
                            </ul>
                        </details>
                        </div>
                    {
                        wishList.map(book => <CardList key={book.bookId} book={book} />)    
                    }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ReadList;