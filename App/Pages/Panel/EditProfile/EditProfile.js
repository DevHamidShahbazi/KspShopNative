import {
    React,useContext, useEffect, useState,GlobalStyles,NavigationSetOptionsPanel,
    Text, View, ScrollView, TouchableOpacity,UserContext,CustomTextInput,UseSetFields,
    Error, Success,handleEditProfile, TextWarningPhoneMustNotNull
} from '../../../Global/Import/Imports';
export default function EditProfile ({navigation,route}) {
    const {User,setUser} = useContext(UserContext)
    const [Errors,setErrors] = useState('');
    const [Successes,setSuccesses] = useState('');
    const {Fields,handleChange} = UseSetFields({
        name: User.name,
        phone: User.phone,
    });
    useEffect(()=>{
        NavigationSetOptionsPanel(navigation,'ویرایش اطلاعات')
    },[]);
    return (
        <React.Fragment>
            <ScrollView contentContainerStyle={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#fff'}}>
                <View style={{padding:15,flex:1,width:"100%"}}>
                    <TextWarningPhoneMustNotNull phone={User.phone}/>
                    <Error message={Errors}/>
                    <Success message={Successes}/>
                    <CustomTextInput value={Fields.name} name={'name'} handleChange={handleChange} placeholder={'نام و نام خانوادگی'} type={'default'} Label={'نام و نام خانوادگی'} require={true} />
                    <CustomTextInput value={Fields.phone} name={'phone'} styleInput={User.phone==null?{borderColor:'red'}:null} handleChange={handleChange} placeholder={'شماره موبایل'} type={'numeric'} Label={'شماره موبایل'} require={true} />
                    <CustomTextInput value={User.email} disable={true} name={'email'} handleChange={() => {console.log('log')} } placeholder={'پست الکترونیک'} type={'email'} Label={'پست الکترونیک'} />
                </View>
                <TouchableOpacity onPress={() => handleEditProfile(navigation ,Fields,setErrors,setUser,setSuccesses,User)}
                                  activeOpacity={.7}
                                  style={[GlobalStyles.Btn_Royal,GlobalStyles.Shadow,{width:'95%',bottom:15}]}>
                    <Text style={GlobalStyles.Text_Btn_Royal}>ویرایش</Text>
                </TouchableOpacity>
            </ScrollView>
        </React.Fragment>
    );
}
