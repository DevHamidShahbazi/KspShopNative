import React, {useContext, useEffect, useState} from 'react';
import {Text, View, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import PanelStyles, {NavigationSetOptionsPanel} from '../Index/components/PanelStyles';
import GlobalStyles from '../../../Global/Styles/GlobalStyles';
import {CustomTextInput} from '../../../Global/Components/Components';
import {UseSetFields} from '../../../Global/Hooks/CustomHooks';
import {UserContext} from '../../../Global/Context/CustomContext';
import {Error, Success} from '../../../Global/Alerts/GlobalAlert';
import {handleEditProfile, TextWarningPhoneMustNotNull} from './components/EditProfileFunction';

export default function EditProfile ({navigation,route}) {
    const {User,setUser} = useContext(UserContext)
    const [Errors,setErrors] = useState('');
    const [Successes,setSuccesses] = useState('');
    const {Fields,handleChange} = UseSetFields({
        name: User.name,
        phone: User.phone,
    });
    useEffect(()=>{
        NavigationSetOptionsPanel(navigation,'')
    },[]);
    return (
        <React.Fragment>
            <ScrollView contentContainerStyle={{flex:1,justifyContent:'center',backgroundColor:'#fff'}}>
                <View style={PanelStyles.Header_Panel}>
                    <View style={[PanelStyles.Box_Header_Panel,GlobalStyles.Shadow_lg]}>
                        <Text style={PanelStyles.Text_Box_Header_Panel}>
                            ویرایش اطلاعات
                        </Text>
                    </View>
                </View>
                <View style={{padding:15,flex:5}}>
                    <TextWarningPhoneMustNotNull phone={User.phone}/>
                    <Error message={Errors}/>
                    <Success message={Successes}/>
                    <CustomTextInput value={Fields.name} name={'name'} handleChange={handleChange} placeholder={'نام و نام خانوادگی'} type={'default'} Label={'نام و نام خانوادگی'} require={true} />
                    <CustomTextInput value={Fields.phone} name={'phone'} styleInput={User.phone==null?{borderColor:'red'}:null} handleChange={handleChange} placeholder={'شماره موبایل'} type={'numeric'} Label={'شماره موبایل'} require={true} />
                    <CustomTextInput value={User.email} disable={true} name={'email'} handleChange={() => {console.log('log')} } placeholder={'پست الکترونیک'} type={'email'} Label={'پست الکترونیک'} />
                    <TouchableOpacity onPress={() => handleEditProfile(navigation ,Fields,setErrors,setUser,setSuccesses,User)} activeOpacity={.7} style={[GlobalStyles.Btn_Royal,GlobalStyles.Shadow,{marginTop:'15%'}]}>
                        <Text style={GlobalStyles.Text_Btn_Royal}>ویرایش</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </React.Fragment>
    );
}
