import React from 'react';
import {View,Text} from 'react-native';
import {TextBold, TextRegular} from '../Components';

export const ContainerDetailProduct = ({product}) => {
    return (
        <React.Fragment>
            <CheckTypeDetailProduct product={product}/>
            <NameValueDetailProduct name={'تعداد : '} item={product.quantity} prefix={' عدد '}/>
            <NameValueDetailProduct name={'قیمت واحد : '} item={product.price_one} prefix={' تومان '}/>
            {product.discount !== '0' ? <FinalPriceDetailProduct discount={true} price={product.some_discount} percent={product.percent} /> : null}
            <FinalPriceDetailProduct percent={product.percent} discount={false} price={product.discount !== '0'?product.discount:product.price} />
        </React.Fragment>
    );
};

export const CheckTypeDetailProduct = ({product}) => {
     return (
        <React.Fragment>
            {
                product.DefType === 'size' || product.DefType === 'attribute' ?
                    product.DefType === 'size' ?
                        <DetailProduct item={product}/>
                        :
                        <AttributeDetailProduct name={product.name} value={product.value}/>
                    :
                    <TextBold>{product.name}</TextBold>
            }
        </React.Fragment>
     );
};
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

export const AttributeDetailProduct = ({value,name}) => {
    return (
        <TextRegular>
            {name} :
            <TextBold>
                {value}
            </TextBold>
        </TextRegular>
    )
};

export const NameValueDetailProduct = ({item,name,prefix}) => {
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
    return <TextRegular style={{display:text?'flex':'none'}}>{text}</TextRegular>;
};
const Value = (text) => {
    return <TextBold style={{display:text?'flex':'none'}}>{text}</TextBold>;
};



export const FinalPriceDetailProduct = ({discount,price,percent}) => {
    return (
        <React.Fragment>
            <View style={{flexDirection:'row-reverse'}}>
                <TextRegular style={{color:discount?'red':'black'}}>
                    {discount ? 'تخفیف : ' : 'قیمت نهایی : '}
                </TextRegular>
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
