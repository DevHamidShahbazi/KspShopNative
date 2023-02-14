import {React,useEffect,useState,StatusBar} from './Global/Import/Imports';
import SplashScreen from './Pages/SplashScreen/SplashScreen';
import App from './App';
import NetInfo from '@react-native-community/netinfo';
export default function Application() {
    const [Render,setRender] = useState('splash');
    const [Loading,setLoading] = useState(false);
    const [Connection,setConnection] = useState(null);
    useEffect(()=>{
        NetInfo.fetch().then(state => {setConnection(state.isConnected)});
        setTimeout(() => {
            if (Connection){
                setRender('app')
            }else {
                setRender('dontConnect')
            }
        },2500)
    },[Render,Connection,Loading]);
    return (
        <React.Fragment>
            <StatusBar backgroundColor="#213854" barStyle="light-content"/>
            {
                Connection ?
                    Render=='splash'?<SplashScreen setConnection={setConnection}
                                                   setLoading={setLoading}
                                                   Connection={Connection}
                                                   Loading={Loading}/>:<App/>:
                    <SplashScreen setConnection={setConnection}
                                  setLoading={setLoading}
                                  Connection={Connection}
                                  Loading={Loading}/>
            }
        </React.Fragment>
    );
}
