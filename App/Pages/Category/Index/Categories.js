import {
    React,useEffect,useState,ScrollView,
    SearchBarTouchNavigationSetOptions,LoadingScreen,
} from '../../../Global/Import/Imports';
import {FlatListCategoryItem, GetCategories} from './components/CategoriesFunctions';
import {FlatList} from 'react-native';

export default function Categories ({navigation,route}) {
    const [Loading,setLoading] = useState(true);
    const [Categories,setCategories] = useState([]);
    useEffect(()=>{
        SearchBarTouchNavigationSetOptions(navigation,route);
        GetCategories(setCategories,setLoading)
    },[]);

    return (
        <React.Fragment>
            <LoadingScreen Loading={Loading}/>

            {/*<FlatList*/}
            {/*    inverted={-1}*/}
            {/*    horizontal={true}*/}
            {/*    data={Categories}*/}
            {/*    contentContainerStyle={{backgroundColor:'#e5e7eb'}}*/}
            {/*    renderItem={({item}) => <FlatListCategoryItem category={item}/>}*/}
            {/*    keyExtractor={item => item.id}*/}
            {/*    showsVerticalScrollIndicator={false}*/}
            {/*    showsHorizontalScrollIndicator={false}*/}
            {/*/>*/}

            <ScrollView contentContainerStyle={{backgroundColor:'#e5e7eb'}}
                        showsVerticalScrollIndicator={false}>
                <FlatListCategoryItem/>
                <FlatListCategoryItem/>
                <FlatListCategoryItem/>
                <FlatListCategoryItem/>
                <FlatListCategoryItem/>
            </ScrollView>
        </React.Fragment>
    );
}
