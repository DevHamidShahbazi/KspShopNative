import {React,useContext,LoadingScreen, UserContext} from '../Import/Imports';
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
