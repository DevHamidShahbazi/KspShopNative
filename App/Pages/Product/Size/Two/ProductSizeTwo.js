import {React, useEffect, useState, TextBold, TextRegular, ScrollView, View,} from '../../../../Global/Import/Imports';
import LeftColumn from '../components/LeftColumn';
import LengthList from '../components/LengthList';
import {ProductSizeStyles} from '../components/ProductSizeStyle';
import CellPrice from '../components/CellPrice';
import ProductDetailGlobal from '../../components/ProductDetailGlobal';
import {BtnAddToCartSize} from '../../components/BtnAddToCart';
import TopTable from '../components/TopTable';

export default function ProductSizeTwo ({Data}) {
    const [ActiveSize,setActiveSize] = useState(null);
    const [UniqueLength,setUniqueLength] = useState([]);
    const {UniqueSortLength,UniqueSortDiameter,sizes} = Data;
    useEffect(()=>{
        setUniqueLength([...new Set(sizes.map(item => item.length))])
    },[]);
    return (
        <React.Fragment>
            <ProductDetailGlobal Data={Data}>
                <TopTable size={sizes[0]} TypeSize={Data.TypeSize} />
                <View style={ProductSizeStyles.container}>
                        <LeftColumn type={Data.TypeSize} data={UniqueSortDiameter} name={'D / L'}/>
                        <View style={{flex: 1}}>
                            <ScrollView
                                    horizontal={true} showsHorizontalScrollIndicator={false}>
                                    <View>
                                        <LengthList Lengths={UniqueSortLength}/>
                                        <View style={{flexDirection: 'row'}}>
                                            {UniqueSortLength.map((ItemLength,index) =>
                                                <View key={index}>
                                                    {UniqueSortDiameter.map((ItemDiameter,index) =>(
                                                        <View key={index}>
                                                            <CellPrice type={Data.TypeSize}
                                                                       setActiveSize={setActiveSize}
                                                                       ActiveSize={ActiveSize}
                                                                       sizes={sizes}
                                                                       ItemLength={ItemLength}
                                                                       ItemDiameter={ItemDiameter}/>
                                                        </View>
                                                    ))}
                                                </View>
                                            )}
                                        </View>
                                    </View>
                                </ScrollView>
                        </View>
                    </View>
            </ProductDetailGlobal>
            {ActiveSize != null && ActiveSize.status != "0"?<BtnAddToCartSize product={ActiveSize}/>:null}
        </React.Fragment>
    );
}
{/*<CellPrice*/}
{/*    key={index}*/}
{/*    type={Data.TypeSize}*/}
{/*    setActiveSize={setActiveSize}*/}
{/*    ActiveSize={ActiveSize}*/}
{/*    sizes={sizes}*/}
{/*    ItemLength={ItemLength}*/}
{/*    ItemDiameter={ItemDiameter}/>*/}

{/*
<FlatList
    overScrollMode={'never'}
    horizontal={true}
    ListHeaderComponent={() => (
        <View>
            <LengthList Lengths={UniqueSortLength}/>
            <View style={{flexDirection: 'row'}}>
                {UniqueSortLength.map((ItemLength,index) =>
                    <View key={index}>
                        {UniqueSortDiameter.map((ItemDiameter,index) =>{
                            const item = collect(sizes).where('length',ItemLength.length).where('diameter',ItemDiameter.diameter).first()??null;
                            if (item){
                                return (
                                    <TouchableOpacity
                                        key={index}
                                        activeOpacity={.85}
                                        style={[ProductSizeStyles.ItemPrice,ActiveSize.id == item.id?ProductSizeStyles.ActiveItem:{}]}
                                        onPress={() => ActiveSize != null && ActiveSize.id == item.id ? setActiveSize({}) : setActiveSize(item)}>
                                        <Text style={[ProductSizeStyles.CellPrice,{fontSize:15},ActiveSize.id == item.id?{color:'#fff'}:{color:'#000'}]}>
                                            {item.price}
                                        </Text>
                                    </TouchableOpacity>
                                )
                            }else {
                                return (
                                    <View key={index} style={ProductSizeStyles.ItemPrice}>
                                        <Text style={[ProductSizeStyles.CellPrice]}>
                                            {'___'}
                                        </Text>
                                    </View>
                                )
                            }

                        })}
                    </View>
                )}
            </View>
        </View>
    )}
    renderItem={(item) => (null)}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    showsHorizontalScrollIndicator={false}
/>*/}
