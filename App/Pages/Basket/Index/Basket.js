import {
    React, useEffect, View, TextBold, useState, ListIsEmpty,
    FlatList, RefreshControl, ContainerDetailProduct,collect,
} from '../../../Global/Import/Imports';
import getData from './components/getData';
import GlobalStyles from '../../../Global/Styles/GlobalStyles';
import {Image, Text} from 'react-native';
export default function Basket ({navigation ,Route}) {
    const [Loading,setLoading] = useState(true);
    const [Basket,setBasket] = useState(null);
    const [IsEmpty,setIsEmpty] = useState(false);
    useEffect(()=>{
        navigation.setOptions({headerShown:false})
        getData(setLoading,setBasket,setIsEmpty)

    },[]);
    // console.log({
        // Loading:Loading,
        // Basket:Basket.all,
        // IsEmpty:IsEmpty,
    // })

    return (
        <React.Fragment>
            <ListIsEmpty IsEmpty={IsEmpty} Loading={Loading}/>



            <View style={{display:Loading || IsEmpty?'none':'flex',flex:1,justifyContent:'center',backgroundColor:'#e5e7eb'}}>


                {Basket != null ? Object.entries(Basket.all).map((item,index) =>{
                    const product = item[1].product;
                    return (
                        <View key={index} style={[GlobalStyles.Card,GlobalStyles.Shadow,{padding:8,marginTop:"2%",borderRadius:5}]}>
                            <Text style={{color:'#155e75',fontFamily:'Vazir-Bold',textAlign:'center'}}>
                                {product.DefName}
                            </Text>

                            <View style={{justifyContent:'center',flexDirection:'row',marginBottom:5,marginTop:5,borderTopWidth:1,borderTopColor:'rgba(0,0,0,0.45)'}}>
                                <View style={{flex:8,justifyContent:'center',alignItems:'flex-end'}}>
                                    {/*<ContainerDetailProduct product={product}/>*/}
                                </View>
                                <View style={{flex:2,justifyContent:'center'}}>
                                    <Image  style={{width:80, height: 80}} source={{uri:product.DefImage}}/>
                                </View>
                            </View>

                        </View>
                    )
                }) :null}

                {/*<FlatList*/}
                {/*    renderItem={({item}) => <ContainerDetailProduct product={item[0].product}/>}*/}
                {/*    data={Basket != null ? Object.entries(Basket.all):null}*/}
                {/*    keyExtractor={item => item[0]}*/}
                {/*    refreshControl={*/}
                {/*        <RefreshControl*/}
                {/*            refreshing={false}*/}
                {/*            onRefresh={() => getData(setLoading,setBasket,setIsEmpty)}/>*/}
                {/*    }*/}
                {/*    showsVerticalScrollIndicator={false}*/}
                {/*    contentContainerStyle={{display:Loading?'none':'flex'}}*/}
                {/*/>*/}
            </View>
        </React.Fragment>
    );
}
