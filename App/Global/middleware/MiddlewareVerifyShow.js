import React,{useContext} from 'react';
import LoadingScreen from '../../Pages/Loading/LoadingScreen';
import {UserContext} from '../Context/CustomContext';

export default function MiddlewareVerifyShow ({children}) {
    const {User,setUser} = useContext(UserContext);
    if (User != null){
        if (User.verify == '0' && User.phone != null){
            return (
                <React.Fragment>
                    {children}
                </React.Fragment>
            )
        }else {
            return (
                <React.Fragment>

                </React.Fragment>
            )
        }
    }else {
        <LoadingScreen/>
    }
}