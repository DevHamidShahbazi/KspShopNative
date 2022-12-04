import React from 'react';
import {View,Text} from 'react-native';

export function DetailProduct ({item}) {
    return (
        <React.Fragment>
            <View style={{flexDirection:'row-reverse'}}>
                {Item(item.size ? 'سایز'+' : ' : '')}
                {Value(item.size ? item.size : '')}
            </View>
            <View style={{flexDirection:'row-reverse'}}>
                {Item(item.diameter ? item.diameterName + ' : ' :null)}
                {Value(item.diameter ? item.diameter + ' mm ' : '')}
            </View>

            <View style={{flexDirection:'row-reverse'}}>
                {Item(item.lengthName ? item.lengthName + ' : ' :null)}
                {Value(item.length ? item.length : '')}
            </View>

            <View style={{flexDirection:'row-reverse'}}>
                {Item(item.width ? item.widthName + ' : ' :null)}
                {Value(item.width ? item.width + ' mm ' : '')}
            </View>

            <View style={{flexDirection:'row-reverse'}}>
                {Item(item.height ? item.heightName + ' : ' :null)}
                {Value(item.height ? item.height + ' mm ' :null)}
            </View>
        </React.Fragment>
    );
}

export const NameDetailProduct = ({item,name,prefix}) => {
     return (
         <View style={{flexDirection:'row-reverse'}}>
             <Text style={{color:'#000',fontFamily:'Vazir'}}>{name}
             <Text style={{color:'#000',fontFamily:'iranyekanbold(fanum)'}}>{item}</Text>
                 <Text style={{color:'#000',fontFamily:'Vazir',fontSize:12}}>{prefix}</Text>
             </Text>
         </View>
     )
};

const Item = (text) => {
     return <Text style={{display:text?'flex':'none',color:'#000',fontFamily:'Vazir'}}>{text}</Text>;
};
const Value = (text) => {
    return <Text style={{display:text?'flex':'none',color:'#000',fontFamily:'Vazir-Bold'}}>{text}</Text>;
};



export const FinalPriceDetailProduct = ({discount,price,percent}) => {
    return (
        <React.Fragment>
            <View style={{flexDirection:'row-reverse'}}>
                <Text style={{color:discount?'red':'black',fontFamily:'Vazir'}}>
                    {discount ? 'تخفیف : ' : 'قیمت نهایی : '}
                </Text>
                <Text style={{color:discount?'red':'black',fontFamily:'iranyekanbold(fanum)'}}>
                    {discount ?
                        <Text style={{color:'red',fontFamily:'iranyekanbold(fanum)',fontSize:12}}>{` (%${percent}) `}</Text>
                        : null}
                    {price}
                    <Text style={{color:discount?'red':'black',fontFamily:'Vazir',fontSize:12}}>{' تومان'}</Text>
                </Text>
            </View>
        </React.Fragment>
    );
};
