import '../common/template/dependecies'
import React from "react";

import Header from '../common/template/header';
import Sidebar from '../common/template/Sidebar';
import Footer from '../common/template/Footer';
import Routes from './routes';

export default props => (
    <div className="wrapper">
        <Header />
        <Sidebar />
        <div className='content-wrapper'>
           <Routes />
        </div>
        <Footer />
    </div>
)