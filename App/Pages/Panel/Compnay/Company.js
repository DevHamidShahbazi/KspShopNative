import React, {useContext, useEffect, useState} from 'react';
import {NavigationSetOptionsPanel} from '../Index/components/PanelStyles';
import {Text,ScrollView,View,TouchableOpacity} from 'react-native';
import {CompanyStyles} from './components/CompanyStyles';
import GlobalStyles from '../../../Global/Styles/GlobalStyles';
import {CompanyAlertStatus, CompanySection, CompanyInputs, handleSubmitCompanyWithText, CompanyObjectStates,} from './components/CompanyFunction';
import {DisplayTabBarContext} from '../../../Global/Context/CustomContext';
import { useFocusEffect } from '@react-navigation/native';
import {UseSetFields} from '../../../Global/Hooks/CustomHooks';
import {Error} from '../../../Global/Alerts/GlobalAlert';
export default function Company ({navigation,route}) {
    const {company}=route.params.order;
    const {order}=route.params;
    const {setDisplayTabBar} = useContext(DisplayTabBarContext);
    const [Errors,setErrors] = useState('');
    const {Fields,handleChange} = UseSetFields(CompanyObjectStates(company));
    useFocusEffect(
        React.useCallback(() => {
            setDisplayTabBar(false)
        }, [])
    );
    useEffect(()=>{
        NavigationSetOptionsPanel(navigation,'صدور فاکتور رسمی');
    },[]);
    return (
        <React.Fragment>
            <ScrollView style={[CompanyStyles.Container]} showsVerticalScrollIndicator={false}>
                <CompanySection title={'جهت صدور فاکتور رسمی فرم زیر را تکمیل کنید'}>
                    <CompanyAlertStatus status={Fields.status}/>
                    <Error message={Errors}/>
                    <CompanyInputs Fields={Fields} handleChange={handleChange}/>
                    <TouchableOpacity onPress={() => handleSubmitCompanyWithText(Fields,order,setErrors,handleChange)} style={[GlobalStyles.Btn_Primary,GlobalStyles.Shadow_lg,{marginTop:'10%',marginBottom:'5%'}]} activeOpacity={.7}>
                        <Text style={[GlobalStyles.Text_Btn_white]}>ثبت اطلاعات</Text>
                    </TouchableOpacity>
                </CompanySection>
            </ScrollView>
        </React.Fragment>
    );
}












/*<CompanySection style={{marginTop:'5%',marginBottom:'8%'}}
                title={'درصورتی که تمایل به پر کردن فرم بالا ندارید میتوانید تصویر مشخصات شرکت را ارسال کنید'}>
    <Error message={ImageErrors}/>

    <Text style={{fontFamily:'iranyekanbold(fanum)',fontSize:12,color:'red',marginTop:'3%',marginBottom:'5%'}}>
        حجم عکس باید از 10 مگابایت کمتر باشد
    </Text>

    <TouchableOpacity onPress={() => handleChooseImage} activeOpacity={.7} style={[CompanyStyles.ChooseImage]}>
        <TextRegular style={{padding:3}}>
            تصویر خود را انتخاب کنید
        </TextRegular>
        <MaterialCommunityIcons style={{textAlign:'right',marginLeft:5}} name={'folder-upload-outline'} color={'#000'} size={30} />
    </TouchableOpacity>

    <TouchableOpacity onPress={() => handleSubmitCompanyWithImage(Fields,order,setImageErrors)}
                      style={[GlobalStyles.Btn_Primary,GlobalStyles.Shadow_lg,{marginTop:'10%',marginBottom:'10%'}]}
                      activeOpacity={.7}>
        <Text style={[GlobalStyles.Text_Btn_white]}>
            ارسال تصویر
        </Text>
    </TouchableOpacity>

</CompanySection>*/



