import React, {useContext, useEffect, useState} from 'react';
import {NavigationSetOptionsPanel} from '../Index/components/PanelStyles';
import {Text,ScrollView,View,TouchableOpacity} from 'react-native';
import {CompanyStyles} from './components/CompanyStyles';
import GlobalStyles from '../../../Global/Styles/GlobalStyles';
import {CompanyHeader, CompanyInputs, GetCompany, handleSubmitCompanyWithText} from './components/CompanyFunction';
import {CustomTextInput} from '../../../Global/Components/Components';
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
        name_company: company.name_company,
        code_company: company.code_company,
        name: company.name,
        code_melli: company.code_melli,
        code_post: company.code_post,
        address: company.address,
        image: company.image,
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
