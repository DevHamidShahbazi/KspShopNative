import React from 'react';
import {Text, TextInput, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import GlobalStyles from '../Styles/GlobalStyles';

const LabelTextInput = ({Label,require}) => {
     return (
         <View style={[!require?{marginTop:"5%"}:null,{marginBottom:'2%',justifyContent:'flex-end',flexWrap:'wrap-reverse'}]}>
             {require?<Text style={{color:'red',marginRight:5}}>*</Text>:null}
             <Text style={{fontFamily:'Vazir',color:'#000'}}>
                 {Label}
             </Text>
         </View>
     );
};
export const CustomTextInput = ({name,value,type,placeholder,handleChange,styleInput,styleContainer,Eye,Label,disable,require}) => {
    return (
        <View style={styleContainer}>
            {Label?<LabelTextInput Label={Label} force={require}/>:null}
            <TextInput
                value={value}
                editable={disable?false:true}
                secureTextEntry={Eye?true:false}
                keyboardType={type}
                onChangeText={val => handleChange(val,name)}
                placeholderTextColor="rgba(0,0,0,0.55)"
                style={[GlobalStyles.Input,disable?{backgroundColor:'#d5d5d5'}:null,styleInput]}
                placeholder={placeholder}
            />
        </View>
    )
};

export function TabScreenOptions (label,Icon) {

    return {
        tabBarActiveTintColor:'#213854',
        headerShown: false,
        tabBarLabelStyle:{fontFamily:'Vazir'},
        tabBarLabel: label,
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name={Icon} color={color} size={size} />
        ),
    }
}
export const CustomBadge = (style) => <View style={{backgroundColor:'red',borderRadius:25,width:12,height:12,marginRight:5,marginLeft:5,style}}/>
