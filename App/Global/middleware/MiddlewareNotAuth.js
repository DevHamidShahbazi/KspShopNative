import {React,useContext,LoadingScreen,AuthContext} from '../Import/Imports';

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
