import React, { useEffect, useState } from 'react';
import css from './Women.css'

const Women = () => {

    return (
        <div className='women-container'>
            <div className='womenBanner flex justify-center items-center'>
                <div className='text-center font-bold' style={{ color: '#F1F6F9' }}>
                    <p className='text-5xl'>WOMEN/DAMEN</p>
                    <p className='text-2xl'>Zone</p>
                </div>
            </div>
            <div>
                {/* {
                    womenCollection.map(women => {
                        console.log(women.categories_name)
                    })
                } */}
            </div>

        </div>
    );
};

export default Women;