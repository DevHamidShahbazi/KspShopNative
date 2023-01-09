import {React, collect, ScrollView, View,useState, TextBold, TextRegular} from '../../../../Global/Import/Imports';
import {ProductSizeStyles} from '../components/ProductSizeStyle';
import LeftColumn from '../components/LeftColumn';
import LengthList from '../components/LengthList';
import CellPrice from '../components/CellPrice';
import ProductDetailGlobal from '../../components/ProductDetailGlobal';
import {BtnAddToCartSize} from '../../components/BtnAddToCart';
import TopTable from '../components/TopTable';

export default function ProductSizeFour ({Data}) {
    const [ActiveSize,setActiveSize] = useState(null);
    const {UniqueSortLength,sizes} = Data;
    let ids=[];
    const Items = sizes.filter((val)=>{
        const checkUnique = collect(sizes)
            .where('id','!=',val.id)
            .where('length','!=',val.length)
            .where('diameter',val.diameter)
            .where('width',val.width)
            .where('height',val.height)
            .pluck('id').toArray();
        if (ids.includes(val.id)){
            return false
        }else {
            ids.push(...checkUnique);
            return true;
        }
    })
    return (
        <React.Fragment>
            <ProductDetailGlobal Data={Data}>
                <TopTable size={sizes[0]} TypeSize={Data.TypeSize} />
                <View style={ProductSizeStyles.container}>
                <LeftColumn type={Data.TypeSize} data={Items} name={'D1×D2×D3/L'}/>
                <View style={{flex: 1}}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View>
                            <LengthList Lengths={UniqueSortLength}/>
                            <View>
                                {Items.map((Item,index) => (
                                    <View  style={{flexDirection: 'row'}} key={index} >
                                        {UniqueSortLength.map((ItemLength,indexLength) =>(
                                            <View key={indexLength}>
                                                <CellPrice
                                                    type={Data.TypeSize}
                                                    setActiveSize={setActiveSize}
                                                    ActiveSize={ActiveSize}
                                                    sizes={sizes}
                                                    Item={Item}
                                                    ItemLength={ItemLength}
                                                />
                                            </View>
                                        ))}
                                    </View>
                                ))}
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
