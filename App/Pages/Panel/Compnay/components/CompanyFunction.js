import React from 'react';
import {Text, View} from 'react-native';
import {CustomTextInput} from '../../../../Global/Components/Components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export function handleSubmitCompanyWithText (Fields,order,setSuccesses,setErrors) {
    AsyncStorage.getItem('api_token',(error, result) => {
        if (result){
            axios.post('v_1_0/update/company', {
                code:order.code,
                name_company: Fields.name_company,
                code_company: Fields.code_company,
                name: Fields.name,
                code_melli: Fields.code_melli,
                code_post: Fields.code_post,
                address: Fields.address,
                image: Fields.image,
            },{
                headers:{
                    api_token:result
                }
            })
                .then(function (response) {
                    const {data} = response;
                    if (data.status == 'success'){
                        setSuccesses(data.message)
                    }else {
                        setErrors(data.message)
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }else {
            console.log('توکن نامعتبر')
        }

    })
}



export function CompanyHeader ({children}) {
    return (
        <React.Fragment>
            <View style={{backgroundColor:'#213854',padding:10,borderTopRightRadius: 15,borderTopLeftRadius: 15}}>
                <Text style={{fontFamily:'Vazir',fontSize:15,color:'#fff',textAlign:'center'}}>
                    {children}
                </Text>
            </View>
        </React.Fragment>
    );
}
export function CompanyInputs ({Fields,handleChange}) {
    console.log(Fields.code_company)
    return (
        <React.Fragment>
            <CustomTextInput
                handleChange={handleChange}
                value={Fields.name_company}
                name={'name_company'}
                type={'default'}
                Label={'نام کامل شرکت'}
                placeholder={'نام شرکت خود را به طور کامل وارد کنید'}
            />
            <CustomTextInput
                handleChange={handleChange}
                value={Fields.code_company}
                name={'code_company'}
                type={'numeric'}
                Label={'کد اقتصادی شرکت'}
                placeholder={'کد اقتصادی شرکت را وارد کنید'}
            />
            <CustomTextInput
                handleChange={handleChange}
                value={Fields.name}
                name={'name'}
                type={'default'}
                Label={'نام مدیر عامل شرکت'}
                placeholder={'نام مدیر عامل شرکت را وارد کنید'}
            />
            <CustomTextInput
                handleChange={handleChange}
                value={Fields.code_melli}
                name={'code_melli'}
                type={'numeric'}
                Label={'کدملی مدیرعامل شرکت'}
                placeholder={'کدملی مدیرعامل شرکت را وارد کنید'}
            />
            <CustomTextInput
                handleChange={handleChange}
                value={Fields.code_post}
                name={'code_post'}
                type={'numeric'}
                Label={'کدپستی شرکت'}
                placeholder={'کدپستی شرکت را وارد کنید'}
            />

            <CustomTextInput
                handleChange={handleChange}
                value={Fields.address}
                name={'address'}
                type={'default'}
                Label={'آدرس شرکت'}
                placeholder={'آدرس دقیق شرکت را وارد کنید'}
            />
        </React.Fragment>
    );
}
