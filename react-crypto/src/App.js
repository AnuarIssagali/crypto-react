import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import {Layout, Typography, Space} from 'antd';
import router from './router'
import {Navbar} from './components';
import './App.css';

const App = () => (
    <div className="app">
        <div className="navbar">
            <Navbar/>
        </div>
        <div className="main">
            <div className="main__content">
                <Layout>
                    <div className="routes">
                        <Routes>
                            {
                                router.map(({path, component}, index) => {
                                    return (
                                        <Route key={index} path={path} element={component}/>
                                    )
                                })
                            }
                        </Routes>
                    </div>
                </Layout>
            </div>
            <div className="footer">
                <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>Copyright © 2023
                    <Link to="/">
                        Crypto Universe Inc.
                    </Link> <br/>
                    Anuar's crypto website
                </Typography.Title>
                <Space>
                    <Link to="/">Home</Link>
                    <Link to="/news">News</Link>
                    <Link to="/about">About</Link>
                </Space>
            </div>
        </div>
    </div>
);

export default App;