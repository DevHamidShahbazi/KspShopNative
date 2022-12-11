import {React,useContext,LoadingScreen, UserContext} from '../Import/Imports';
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
