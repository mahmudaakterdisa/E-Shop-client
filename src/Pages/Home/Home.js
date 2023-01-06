import React from 'react';
import Banner from '../Banner/Banner';
import Giftvoucher from '../HomeSubsection/Giftvoucher/Giftvoucher';
import NewCatalog from '../HomeSubsection/NewCatalog/NewCatalog';
import css from './Home.css';

const Home = () => {
    return (
        <div className='home-container'>
            <Banner></Banner>
            <NewCatalog></NewCatalog>
            <Giftvoucher></Giftvoucher>
        </div>
    );
};

export default Home;