import React,{useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import StylesPanel,{NavigationSetOptionsPanel} from './components/PanelStyles';
import Register from '../../Auth/Register/Register';
import Login from '../../Auth/Login/Login';

const PanelStack = createStackNavigator();
export default function Panel ({navigation ,Route}) {
    useEffect(()=>{
        NavigationSetOptionsPanel(navigation)
    },[]);
    return (
        <React.Fragment>
            <PanelStack.Navigator >
                <PanelStack.Screen name="Register" component={Register} />
                <PanelStack.Screen name="Login" component={Login}  />
            </PanelStack.Navigator>
        </React.Fragment>
    );
}
