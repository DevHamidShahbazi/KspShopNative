import {React,collect,ScrollView, View} from '../../../../Global/Import/Imports';
import {ProductSizeStyles} from '../components/ProductSizeStyle';
import LeftColumn from '../components/LeftColumn';
import LengthList from '../components/LengthList';
import CellPrice from '../components/CellPrice';
import {ShowPriceTableFour} from '../components/ShowPrice';

export default function ProductSizeFour ({Data}) {
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
            <View style={ProductSizeStyles.container}>
                <LeftColumn type={Data.TypeSize} fontSize={17} data={Items} name={'D1×D2×D3/L'}/>
                <View style={{flex: 1}}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View>
                            <LengthList Lengths={UniqueSortLength}/>
                            <View>
                                {Items.map((Item,index) => (
                                    <View  style={{flexDirection: 'row'}} key={index} >
                                        {UniqueSortLength.map((ItemLength,indexLength) =>(
                                            <CellPrice key={indexLength} fontSize={15.7}>
                                                <ShowPriceTableFour sizes={sizes} Item={Item} ItemLength={ItemLength}/>
                                            </CellPrice>
                                        ))}
                                    </View>
                                ))}
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </React.Fragment>
    );
}
