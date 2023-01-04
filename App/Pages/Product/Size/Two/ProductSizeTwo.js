import {
    React,
    useEffect,
    useState,
    TextBold,
    FlatList,
    TextRegular,
    ScrollView,
    Text,
    View,
    CategoriesBanner,
} from '../../../../Global/Import/Imports';
import LeftColumn from '../components/LeftColumn';
import LengthList from '../components/LengthList';
import {ProductSizeStyles} from '../components/ProductSizeStyle';
import {ShowPriceTableTwo} from '../components/ShowPrice';
import CellPrice from '../components/CellPrice';

export default function ProductSizeTwo ({Data}) {
    console.log(Data)
    const [UniqueLength,setUniqueLength] = useState([]);
    const {UniqueSortLength,UniqueSortDiameter,sizes} = Data;
    useEffect(()=>{
        setUniqueLength([...new Set(Data.sizes.map(item => item.length))])
    },[]);

    return (
        <React.Fragment>
                <View style={ProductSizeStyles.container}>
                    <LeftColumn type={Data.TypeSize} fontSize={18.4} data={UniqueSortDiameter} name={'D / L'}/>
                    <View style={{flex: 1, backgroundColor: 'white'}}>
                        <ScrollView horizontal={true}>
                            <View>
                                <LengthList Lengths={UniqueSortLength}/>

                                <View style={{flexDirection: 'row'}}>
                                    {UniqueSortLength.map((ItemLength,index) =>
                                        <View key={index}>
                                            {UniqueSortDiameter.map((ItemDiameter,index) => <CellPrice sizes={sizes}  ItemLength={ItemLength} ItemDiameter={ItemDiameter} key={index}/>)}
                                        </View>
                                    )}
                                </View>

                            </View>


                        </ScrollView>
                    </View>



                </View>
        </React.Fragment>
    );
}
