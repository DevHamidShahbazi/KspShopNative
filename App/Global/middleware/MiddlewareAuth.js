import React,{useContext} from 'react';
import LoadingScreen from '../../Pages/Loading/LoadingScreen';
import {AuthContext, UserContext} from '../Context/CustomContext';

export default function MiddlewareAuth ({children}) {
    const {Auth,setAuth} = useContext(AuthContext);
    const {User,setUser} = useContext(UserContext);
    if (Auth != null){
        if (Auth==true){
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
