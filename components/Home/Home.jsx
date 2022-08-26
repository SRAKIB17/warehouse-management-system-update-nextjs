import React from 'react';
import Footer from '../Common/Footer/Footer';
import Navbar from '../Common/Header/Navbar';
import HomeProduct from '../Products/HomeProduct';

const Home = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <HomeProduct/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export default Home;