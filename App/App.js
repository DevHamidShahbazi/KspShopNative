import React from 'react';
import Register from './Auth/Register/Register.js';
import Login from './Auth/Login/Login';
import SplashScreen from './SplashScreen/SplashScreen';
import axios from 'axios';
// axios.defaults.baseURL = 'https://ksp-shop.com/';
axios.defaults.baseURL = 'http://192.168.100.15:8000/api/v_1_0/';
export default App = () => {
    return (
        <React.Fragment>
            {/*<Login/>*/}
            <Register/>
            {/*<SplashScreen/>*/}
        </React.Fragment>
    );
};


