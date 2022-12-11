import {React,useContext,LoadingScreen,AuthContext, UserContext} from '../Import/Imports';
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
