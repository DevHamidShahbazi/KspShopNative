import {
    React, Text, TextInput, View, MaterialCommunityIcons, GlobalStyles, axios,RFValue
} from '../Import/Imports';

export function TextRegular ({children,style}) {
    return (
        <React.Fragment>
            <Text adjustsFontSizeToFit={true} style={[style,{color:'#000',fontFamily:'Vazir'}]}>
                {children}
            </Text>
        </React.Fragment>
    );
}

export function TextBold ({children,style}) {
    return (
        <React.Fragment>
            <Text adjustsFontSizeToFit={true} style={[style,{color:'#000',fontFamily:'Vazir-Bold'}]}>
                {children}
            </Text>
        </React.Fragment>
    );
}
const LabelTextInput = ({Label,require}) => {
     return (
         <View style={[!require?{marginTop:"5%"}:null,{marginVertical:'2%',flexDirection:'row',justifyContent:'flex-end'}]}>
             {require?<Text style={{color:'red'}}>*</Text>:null}
             <Text style={{fontFamily:'Vazir',color:'#000',marginLeft:5}}>
                 {Label}
             </Text>
         </View>
     );
};

export const CustomTextInput = ({multiline=false,handleSubmit=null,name,value,type,placeholder,autoFocus,handleChange,styleInput,styleContainer,Eye,Label,disable,require}) => {
    return (
        <View style={styleContainer}>
            {Label?<LabelTextInput Label={Label} require={require}/>:null}
            <TextInput
                multiline={multiline}
                autoFocus={autoFocus?autoFocus:null}
                value={value}
                editable={disable?false:true}
                secureTextEntry={Eye?true:false}
                keyboardType={type}
                onChangeText={val => handleChange(val,name)}
                placeholderTextColor="rgba(0,0,0,0.55)"
                style={[GlobalStyles.Input,disable?{backgroundColor:'#d5d5d5'}:null,styleInput]}
                placeholder={placeholder}
                onSubmitEditing={() => handleSubmit!=null?handleSubmit():console.log('submit')}
            />
        </View>
    )
};

export function TabScreenOptions (label,Icon,tabBarBadge=null) {
    return {
        tabBarActiveTintColor:'#213854',
        headerShown: false,
        tabBarLabelStyle:{fontFamily:'Vazir'},
        tabBarLabel: label,
        tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name={Icon} color={color} size={size} />,
        tabBarBadge:tabBarBadge,
        tabBarBadgeStyle:{padding:1,fontSize:RFValue(13),fontFamily:'iranyekanbold(fanum)'},
    }
}
export const CustomBadge = (style) => <View style={{backgroundColor:'red',borderRadius:25,width:12,height:12,marginRight:5,marginLeft:5,style}}/>

export const TextTypeStatus = (Status) => {
     if (Status === 'unpaid') {
         return 'پرداخت نشده'
     }else if (Status === 'paid'){
         return 'پرداخت شده'
     }else if (Status === 'posted'){
         return 'پست شده'
     }else if (Status === 'prepare'){
         return 'درحال ارسال'
     }else if (Status === 'received'){
         return 'تحویل داده شده'
     }else {
         return  null
     }
};

export const ColorTypeStatus = (Status) => {
    if (Status === 'unpaid') {
        return '#dc2626'
    }else if (Status === 'paid'){
        return '#2563eb'
    }else if (Status === 'posted'){
        return '#c084fc'
    }else if (Status === 'prepare'){
        return '#38bdf8'
    }else if (Status === 'received'){
        return '#059669'
    }else {
        return  null
    }
};
export const number_format = (number) => (number).toLocaleString();


export function CheckBasket (setBasketCount) {
    axios.post('v_1_0/basket-count')
        .then(function (response) {
            const {data} = response;
            setBasketCount(data.count)
        })
        .catch(function (error) {
            console.log(error);
        });
}
