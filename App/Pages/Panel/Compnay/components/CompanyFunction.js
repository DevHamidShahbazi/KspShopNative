import {
    React,Alert, Text, View, CustomTextInput,RFValue,
    AsyncStorage, axios, MaterialCommunityIcons, GlobalStyles, CompanyStyles,
} from '../../../../Global/Import/Imports';
export function handleSubmitCompanyWithText (Fields,order,setErrors,handleChange) {
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
                        handleChange('0','status')
                        Alert.alert('انجام شد',data.message)
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

export const CompanyObjectStates = (company) => {
     return {
         name_company: company ? company.name_company:null,
         code_company: company ? company.code_company:null,
         name: company ? company.name:null,
         code_melli: company ? company.code_melli:null,
         code_post: company ? company.code_post:null,
         address: company ? company.address:null,
         status: company ? company.status:null,
         image: company ? company.image:null,
     };
};
export function CompanySection ({children,title,style}) {
    return (
        <React.Fragment>
            <View style={[GlobalStyles.Card,style]}>
                <CompanyHeader>
                    {title}
                </CompanyHeader>
                <View style={{flex:1,paddingRight:'5%',paddingLeft:'5%'}}>
                    {children}
                </View>
            </View>
        </React.Fragment>
    );
}
export function CompanyHeader ({children}) {
    return (
        <React.Fragment>
            <View style={[CompanyStyles.CompanyHeader]}>
                <Text style={{fontFamily:'Vazir',fontSize:RFValue(16),color:'#fff',textAlign:'center'}}>
                    {children}
                </Text>
            </View>
        </React.Fragment>
    );
}

export function CompanyAlertStatus ({status}) {
    return (
        <React.Fragment>
            <View style={[CompanyStyles.AlertStatus,{display:status==null?'none':'flex',backgroundColor:status==0?'#bae6fd':'#f0fdf4'}]}>
                <Text style={[CompanyStyles.AlertStatusText]} >
                    {status==0?'اطلاعات شما در انتظار تایید می باشد':'اطلاعات شما مورد تایید قرار گرفته است'}
                </Text>
                <MaterialCommunityIcons style={{textAlign:'right'}} name={`shield-${status==0?'alert':'check'}-outline`} color={'#065f46'} size={30} />
            </View>
        </React.Fragment>
    );
}

export function CompanyInputs ({Fields,handleChange}) {
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
                name={'numeric'}
                type={'default'}
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
