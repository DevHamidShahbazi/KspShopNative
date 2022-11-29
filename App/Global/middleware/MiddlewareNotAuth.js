import React,{useContext} from 'react';
import LoadingScreen from '../../Pages/Loading/LoadingScreen';
import {AuthContext} from '../Context/CustomContext';

export default function MiddlewareNotAuth ({children}) {
    const {Auth,setAuth} = useContext(AuthContext);
    if (Auth != null){
        if (Auth==false){
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
