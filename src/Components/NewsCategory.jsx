import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllNews from './AllNews';

const NewsCategory = () => {
    const categoryNews=useLoaderData();
    
    return (
        <div className='flex flex-col gap-5'>
            {
                categoryNews.map(news=><AllNews key={news._id} news={news}/>)
            } 
            
        </div>
    );
};

export default NewsCategory;