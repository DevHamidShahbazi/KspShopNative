import {React, useEffect, useState, FlatList, Image, View, GlobalStyles, ProductItem, CategoryItem,} from '../../Global/Import/Imports';
import {SearchNavigation} from './components/SearchNavigation';
import {Dimensions} from 'react-native';
import getData from './components/GetData';
const ScreenWidth = Dimensions.get('window').width;
export default function Search ({navigation,route}) {
    const [Search,setSearch] = useState(null);
    const [Data,setData] = useState({});
    useEffect(()=>{
        navigation.setOptions({headerShown:false});
        getData(Search,setData)
    },[Search]);
    return (
        <React.Fragment>
            <SearchNavigation navigation={navigation} setSearch={setSearch}/>
            {
                Search?
                        <View style={{flex:1,backgroundColor:'#e5e7eb'}}>
                            <FlatList
                                numColumns={2}
                                columnWrapperStyle={{justifyContent:'space-around', }}
                                data={Data.Categories}
                                renderItem={({item,index}) => <CategoryItem key={index} category={item}/>}
                                keyExtractor={item => item.id}
                                showsVerticalScrollIndicator={false}
                                showsHorizontalScrollIndicator={false}
                                ListFooterComponentStyle={GlobalStyles.ListGrid}
                                ListFooterComponent={() => Data.Products?Data.Products.map((product,index) => (<ProductItem key={index} product={product}/>) ):null}
                            />
                        </View>
                    :
                    <View style={{flex:1,backgroundColor:'#fff',justifyContent:'center',alignItems:'center'}}>
                        <Image style={{width:ScreenWidth-30,height:ScreenWidth/1.3}} source={require('../../Global/Images/search.jpg')} />
                    </View>
            }
        </React.Fragment>
    );
}
