import React,{useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import StylesPanel,{NavigationSetOptionsPanel} from './components/PanelStyles';
import Register from '../../Auth/Register/Register';
import Login from '../../Auth/Login/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Profile from './Profile';
import {Text} from 'react-native';

const PanelStack = createStackNavigator();
export default function Panel ({navigation ,Route}) {

    useEffect(()=>{
        NavigationSetOptionsPanel(navigation)
    },[]);
    return (
        <React.Fragment>
            <PanelStack.Navigator>
                {
                    true ?
                        <React.Fragment>
                            <PanelStack.Screen name="Profile" component={Profile} />
                        </React.Fragment>
                        :
                        <React.Fragment>
                            <PanelStack.Screen name="Register" component={Register} />
                            <PanelStack.Screen name="Login" component={Login}  />
                        </React.Fragment>
                }
            </PanelStack.Navigator>
        </React.Fragment>
    );
}
