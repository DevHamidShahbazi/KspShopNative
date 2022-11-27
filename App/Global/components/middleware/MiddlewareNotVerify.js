import React,{useContext} from 'react';
import LoadingScreen from '../../../Pages/Loading/LoadingScreen';
import {UserContext} from '../Context/CustomContext';
export default function MiddlewareNotVerify ({children}) {
    const {User,setUser} = useContext(UserContext);
    if (User != null){
        if (User.verify == '0'){
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
