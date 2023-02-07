import {React,useEffect,useState,StatusBar} from './Global/Import/Imports';
import SplashScreen from './Pages/SplashScreen/SplashScreen';
import App from './App';
export default function Application() {
    const [Render,setRender] = useState('splash');
    useEffect(()=>{
        setTimeout(() => {
            if (true){
                setRender('app')
            }else {
                setRender('dontConnect')
            }
        },2500)
    },[Render]);
    return (
        <React.Fragment>
            <StatusBar backgroundColor="#213854" barStyle="light-content"/>
            {Render=='splash'?<SplashScreen/>:<App/>}
        </React.Fragment>
    );
}
