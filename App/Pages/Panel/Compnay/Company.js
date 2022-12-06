import React, {useContext, useEffect, useState} from 'react';
import {NavigationSetOptionsPanel} from '../Index/components/PanelStyles';
import {Text,ScrollView,View,TouchableOpacity} from 'react-native';
import {CompanyStyles} from './components/CompanyStyles';
import GlobalStyles from '../../../Global/Styles/GlobalStyles';
import {
    CompanyAlertStatus,
    CompanyHeader,
    CompanyInputs,
    handleSubmitCompanyWithText,
} from './components/CompanyFunction';
import {DisplayTabBarContext} from '../../../Global/Context/CustomContext';
import { useFocusEffect } from '@react-navigation/native';
import {UseSetFields} from '../../../Global/Hooks/CustomHooks';
import {Error, Success} from '../../../Global/Alerts/GlobalAlert';

export default function Company ({navigation,route}) {
    const {company}=route.params.order;
    const {order}=route.params;
    const {DisplayTabBar,setDisplayTabBar} = useContext(DisplayTabBarContext);
    const [Errors,setErrors] = useState('');
    const [Successes,setSuccesses] = useState('');
    const {Fields,handleChange} = UseSetFields({
        name_company: company ? company.name_company:null,
        code_company: company ? company.code_company:null,
        name: company ? company.name:null,
        code_melli: company ? company.code_melli:null,
        code_post: company ? company.code_post:null,
        address: company ? company.address:null,
        status: company ? company.status:null,
        image: company ? company.image:null,
    });
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
                <View style={[GlobalStyles.Card]}>
                    <CompanyHeader>
                        جهت صدور فاکتور رسمی فرم زیر را تکمیل کنید
                    </CompanyHeader>
                    <View style={{flex:1,paddingRight:'5%',paddingLeft:'5%'}}>
                        <CompanyAlertStatus status={Fields.status}/>
                        <Error message={Errors}/>
                        <Success message={Successes}/>
                        <CompanyInputs Fields={Fields} handleChange={handleChange}/>
                        <TouchableOpacity onPress={() => handleSubmitCompanyWithText(Fields,order,setSuccesses,setErrors)} style={[GlobalStyles.Btn_Primary,GlobalStyles.Shadow_lg,{marginTop:'10%',marginBottom:'5%'}]} activeOpacity={.7}>
                            <Text style={[GlobalStyles.Text_Btn_white]}>
                                ثبت اطلاعات
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </React.Fragment>
    );
}
