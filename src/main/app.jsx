import '../common/template/dependecies'
import React from "react";

import Header from '../common/template/header';
import Sidebar from '../common/template/Sidebar';
import Footer from '../common/template/Footer';
import Routes from './routes';
import Messages from '../common/msg/messages'

export default props => (
    <div className="wrapper">
        <Header />
        <Sidebar />
        <div className='content-wrapper'>
           <Routes />
        </div>
        <Footer />
        <Messages/>
    </div>
)