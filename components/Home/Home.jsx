import React from 'react';
import Footer from '../Common/Footer/Footer';
import Banner from '../Common/Header/Banner';
import CommonBanner from '../Common/Header/CommonBanner';
import Navbar from '../Common/Header/Navbar';
import HomeProduct from '../Products/HomeProduct';

const Home = () => {
    return (
        <div>
            <div>
                <Banner/>
                <HomeProduct/>
            </div>
        </div>
    );
};

export default Home;