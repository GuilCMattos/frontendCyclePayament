import '../common/template/dependecies'
import React from "react";

import Header from '../common/template/header';
import Sidebar from '../common/template/Sidebar';
import Footer from '../common/template/Footer';

export default props => (
    <div className="wrapper">
        <Header />
        <Sidebar />
        <div className='content-wrapper'>
            <h1>Content</h1>
        </div>
        <Footer />
    </div>
)