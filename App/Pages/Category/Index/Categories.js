import {
    React, useEffect, useState, View,
    SearchBarTouchNavigationSetOptions, LoadingScreen, FlatList, Icon,
} from '../../../Global/Import/Imports';
import {CategoriesBanner, FlatListCategoryItem, GetCategories} from './components/CategoriesFunctions';
export default function Categories ({navigation,route}) {
    const [Loading,setLoading] = useState(true);
    const [Categories,setCategories] = useState([]);
    useEffect(()=>{
        navigation.setOptions({headerShown:false})
        GetCategories(setCategories,setLoading)
    },[]);
    return (
        <React.Fragment>
            <SearchBarTouchNavigationSetOptions navigation={navigation} route={route}/>
            <LoadingScreen Loading={Loading}/>
            {
                Loading?null:
                    <FlatList
                    data={Categories}
                    contentContainerStyle={{backgroundColor:'#e5e7eb'}}
                    renderItem={({item}) => <FlatListCategoryItem category={item}/>}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    ListFooterComponent={() => Categories.map((item,index) => item.child==0 || item.id == 1 || item.id == 9 || item.id == 16?<CategoriesBanner key={index} item={item}/>:null)}
                />
            }

        </React.Fragment>
    );
}
