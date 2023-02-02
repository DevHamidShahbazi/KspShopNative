import React,{useState,useEffect} from 'react';
import {NavigationSetOptionsPanel} from '../../Index/components/PanelStyles';
import {FlatList, RefreshControl, Text, View} from 'react-native';
import {PurchasedProductGetProducts, PurchasedProductItems} from './components/PurchasedProductsFunctions';
import ListIsEmpty from '../../../../Global/Components/IsEmpty';

export default function PurchasedProducts ({navigation,route}) {
    const [Loading,setLoading] = useState(true);
    const [IsEmpty,setIsEmpty] = useState(false);
    const [Products,setProducts] = useState(null);
    useEffect(()=>{
        PurchasedProductGetProducts(setProducts,setLoading,setIsEmpty)
        NavigationSetOptionsPanel(navigation,'محصولات خریداری شده')
    },[]);
    return (
        <React.Fragment>
            <ListIsEmpty IsEmpty={IsEmpty} Loading={Loading}/>
            <View style={{display:Loading || IsEmpty?'none':'flex',flex:1,justifyContent:'center',backgroundColor:'#e5e7eb'}}>
                <FlatList
                    refreshControl={
                        <RefreshControl refreshing={false}
                            onRefresh={() => PurchasedProductGetProducts(setProducts,setLoading,setIsEmpty)}/>
                    }
                    data={Products}
                    renderItem={({item}) => <PurchasedProductItems  product={item}/>}
                    keyExtractor={(item,index) => index}
                    contentContainerStyle={{padding:10,display:Loading?'none':'flex'}}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </React.Fragment>
    );
}
