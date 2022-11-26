import React,{useContext,useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GlobalStyles from '../../Global/components/Styles/GlobalStyles';
import {AuthContext,UserContext,NameContext} from '../../Global/components/Context/CustomContext';


export default function Profile ({navigation,route}) {
    const getAuthContext = useContext(AuthContext);
    const getUserContext = useContext(UserContext);
    // const [Name,setName] = useState({
    //     'Text' : 'Hamid 2',
    //     'setText' : fd
    // });
    return (
        <NameContext.Consumer>
            {({name,setName}) => (
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontFamily:'Vazir',color:'#000',fontSize:15}}>
                        {name}
                    </Text>
                    <TouchableOpacity onPress={() => setName('Hamid change')} activeOpacity={.7} style={[GlobalStyles.Btn_Royal,GlobalStyles.Shadow_lg,{marginTop:'5%'}]}>
                        <Text style={GlobalStyles.Text_Btn_Royal}>
                            تغییر
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
        </NameContext.Consumer>
    );
}
