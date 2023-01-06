import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AvailableProducts from '../AvailableProducts/AvailableProducts';
import css from './Allcategories.css'

const Allcategories = () => {
    const getCategories = useLoaderData();
    console.log(getCategories)
    const { categories_product, categories_name } = getCategories;
    return (
        <div>
            <div className='categories-Banner flex justify-center items-center'>
                <div className='text-center font-bold' style={{ color: '#F1F6F9' }}>
                    <p className='sm:text-9xl max-sm:text-7xl'>{categories_name}</p>
                    <p className='text-4xl'>Zone</p>
                </div>
            </div>


            <div className='available-categories '>
                <div className='grid grid-cols-1 w-full sm:grid-cols-2 max-sm:pl-40 sm:pl-32 md:pl-40 lg:pl-52 py-20 gap-y-10 '>
                    {
                        categories_product.map(allcollection => <AvailableProducts key={allcollection._id} allcollection={allcollection}></AvailableProducts>)
                    }

                </div>
            </div>

        </div>
    );
};

export default Allcategories;