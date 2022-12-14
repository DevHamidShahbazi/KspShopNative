import {
    React, Text, TextInput, View, MaterialCommunityIcons, GlobalStyles
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
         <View style={[!require?{marginTop:"5%"}:null,{marginBottom:'2%',justifyContent:'flex-end',flexWrap:'wrap-reverse'}]}>
             {require?<Text style={{color:'red',marginRight:5}}>*</Text>:null}
             <Text style={{fontFamily:'Vazir',color:'#000'}}>
                 {Label}
             </Text>
         </View>
     );
};

export const CustomTextInput = ({name,value,type,placeholder,autoFocus,handleChange,styleInput,styleContainer,Eye,Label,disable,require}) => {
    return (
        <View style={styleContainer}>
            {Label?<LabelTextInput Label={Label} force={require}/>:null}
            <TextInput
                autoFocus={autoFocus?autoFocus:null}
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

export const TextTypeStatus = (Status) => {
     if (Status === 'unpaid') {
         return '???????????? ????????'
     }else if (Status === 'paid'){
         return '???????????? ??????'
     }else if (Status === 'posted'){
         return '?????? ??????'
     }else if (Status === 'prepare'){
         return '?????????? ??????????'
     }else if (Status === 'received'){
         return '?????????? ???????? ??????'
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
