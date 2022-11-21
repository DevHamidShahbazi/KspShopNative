import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GlobalStyles from '../../Global/components/Styles/GlobalStyles';


export default function Profile (props) {
    const {User}=props;
    function setStorage() {
        console.log('test')
    }
    return (
        <React.Fragment>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontFamily:'Vazir',color:'#000',fontSize:15}}>
                    {User.name}
                </Text>
                <TouchableOpacity onPress={() => setStorage()} activeOpacity={.7} style={[GlobalStyles.Btn_Royal,GlobalStyles.Shadow_lg,{marginTop:'5%'}]}>
                    <Text style={GlobalStyles.Text_Btn_Royal}>
                        اجرا
                    </Text>
                </TouchableOpacity>
            </View>
        </React.Fragment>
    );
}
