import React, {  } from 'react';
import Banner from '../../components/Banner/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();

    return (
        <div>
            <div className='container mx-auto my-10'>
            <Banner/>
            <Books data={data}/>
            </div>
            
        </div>
    );
};

export default Home;