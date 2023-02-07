import {
    React, useEffect, ScrollView, View, useState, CategoryItem,
    TextBold, SearchBarTouchNavigationSetOptions, getSliders, ShowSliders,
    CategoriesBanner, GlobalStyles, LoadingScreen,RFValue
} from '../../../Global/Import/Imports';
import {getDetailParentCategory} from './components/ParentCategoryFunction';
import {ProductItem} from '../../../Global/Components/Items';


export default function ParentCategory ({navigation,route}) {
    const [Loading,setLoading] = useState(true);
    const [Sliders,setSliders] = useState(null);
    const [Data,setData] = useState({});
    const category_id = route.params;
    useEffect(()=>{
        navigation.setOptions({headerShown:false})
        getSliders(category_id,setSliders)
        getDetailParentCategory(category_id,setData,setLoading);
    },[category_id]);
    return (
        <React.Fragment>
            <SearchBarTouchNavigationSetOptions navigation={navigation} route={route}/>
            <LoadingScreen Loading={Loading}/>
            {
                Loading?null:
                <ScrollView  contentContainerStyle={{justifyContent:'center'}}>
                    <ShowSliders sliders={Sliders}/>
                    <View style={{flex:1,padding:10}}>
                        <TextBold style={{fontSize:RFValue(24),textAlign:'center'}}>{Data.h1}</TextBold>
                    </View>
                    <View style={GlobalStyles.ListGrid}>
                        {Data.ChildCategory?Data.ChildCategory.map((category,index) => (<CategoryItem key={index} category={category}/>)):null}
                        {Data.Products?Data.Products.map((product,index) => (<ProductItem key={index} product={product}/>)):null}
                    </View>
                    {Data.CustomBanner?Data.CustomBanner.map((item,index) => (<CategoriesBanner key={index} item={item}/>)):null}
                </ScrollView>
            }
        </React.Fragment>
    );
}
