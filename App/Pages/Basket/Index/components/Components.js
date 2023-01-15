import {
    React,
    View, TouchableOpacity,
    axios,useState,
    FinalPriceDetailProduct,
    number_format,
    OfferProduct,ActivityIndicator,
    CheckTypeDetailProduct,Text,
    NameValueDetailProduct, TextBold, Icon,
} from '../../../../Global/Import/Imports';
import Styles from './Styles';


export const priceFinalForProduct = (item,product)=>{
    const {offer,priceInt,discountInt,percent} =product;
    const {quantity} =item;
    return offer !== null ?
        quantity <= offer.countDown ?
            (priceInt * quantity)-(offer.percentDown*0.01)*(priceInt * quantity)
            :
            (priceInt * quantity)-(offer.percentUp*0.01)*(priceInt * quantity)
        :percent ?
            priceInt*quantity-(priceInt-discountInt)*quantity
            :
            priceInt*quantity
}




export const ProductDetailBasket = ({item,product}) => {
    const {priceInt,price} =product;
    const {quantity} =item;
     return (
        <React.Fragment>
            <CheckTypeDetailProduct product={product}/>
            <NameValueDetailProduct name={'تعداد : '} item={quantity} prefix={' عدد '}/>
            <NameValueDetailProduct name={'قیمت واحد : '} item={price} prefix={' تومان '}/>
            <NameValueDetailProduct name={'قیمت کل : '} item={number_format(priceInt * quantity)} prefix={' تومان '}/>
        </React.Fragment>
     );
};

export const OfferAndDiscount = ({item,product}) => {
    const {offer,priceInt,discountInt} =product;
    const {quantity} =item;
     return (
        <React.Fragment>
            { offer !== null ?
                <React.Fragment>
                    {
                        quantity <= offer.countDown ?
                            <FinalPriceDetailProduct percent={offer.percentDown}
                                                     discount={true}
                                                     price={number_format((offer.percentDown*0.01)*(priceInt * quantity))} />
                            :
                            <FinalPriceDetailProduct percent={offer.percentUp}
                                                     discount={true}
                                                     price={number_format((offer.percentUp*0.01)*(priceInt * quantity))} />
                    }
                    <View style={{height:120}}>
                        <OfferProduct offer={offer}/>
                    </View>
                </React.Fragment>
                :
                product.percent ? <FinalPriceDetailProduct percent={product.percent}
                                                           discount={true}
                                                           price={number_format(priceInt-discountInt)} /> :null
            }
        </React.Fragment>
     );
};


export const PricesTopBox = ({Basket}) => {
     return (
        <React.Fragment>
            <NameValueDetailProduct name={`مبلغ محصولات ( ${Basket.count} کالا ) : `} item={Basket.PriceAll} prefix={' تومان '}/>
            <NameValueDetailProduct name={'هزینه ارسال : '} item={number_format(parseInt(Basket.PriceSend))} prefix={' تومان '}/>

            <View style={{flexDirection:'row-reverse'}}>
                <TextBold>{'مبلغ قابل پرداخت : '}
                    <Text style={Styles.textPriceFinal}>{Basket.PriceFinal}</Text>
                    <Text style={Styles.textRed}>{' تومان '}</Text>
                </TextBold>
            </View>
        </React.Fragment>
     );
};

export const ActiveSelectBox = () => (<View style={Styles.ActiveSelectBox}><Icon name={'check'} color={'#fff'} size={10} /></View>);

export const TextFactor = ({PriceNotFactor,tax}) => (
    <Text style={Styles.textFactor}>
        در صورت انتخاب صدور فاکتور رسمی ، به قیمت سبد خرید شما
        <Text style={Styles.textRed2}>
            {' '+PriceNotFactor+' تومان '+'('+tax+'%) '}
        </Text>
        مالیات بر ارزش افزوده اضافه میشود
    </Text>
);

export function BoxFactor ({Basket,Factor,setFactor,Render,setRender}) {
    const [Loading,setLoading] = useState(false);
    return (
        <React.Fragment>
            <View style={Styles.boxFactor}>
                <ActivityIndicator style={{display:Loading?'flex':'none'}} animating={Loading} size="small" color="#213854" />
                <TouchableOpacity onPress={() => updateFactor(setFactor,Factor,setRender,Render,setLoading)}
                                  style={[Styles.touch,{display:!Loading?'flex':'none'}]}
                                  activeOpacity={.6}>
                    <View style={Styles.selectBoxFactor}>{Factor ? <ActiveSelectBox/> :null}</View>
                    <TextBold style={{textAlign:'center'}}>صدور فاکتور رسمی</TextBold>
                </TouchableOpacity>
                <TextFactor PriceNotFactor={Basket.PriceNotFactor} tax={Basket.tax}/>
            </View>
        </React.Fragment>
    );
}

export const updateFactor = (setFactor,Factor,setRender,Render,setLoading) => {
    setLoading(true)
    axios.post('v_1_0/basket/update-factor',{
        factor : Factor?false:true
    })
        .then(function (response) {
            const {data} = response;
            if (typeof data == 'string'){
                setRender(Render+1)
            }else{
                if (data.status == 'success'){
                    setFactor(data.factor == '1'?true:false)
                    setLoading(false)
                }
            }
        })
        .catch(function (error) {
            console.log(error);
        });
};
