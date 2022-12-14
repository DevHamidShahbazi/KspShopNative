import {
    React, useEffect,
    View, ScrollView, useState, TextBold,
    SearchBarTouchNavigationSetOptions,
    ShowSliders, getSliders, GlobalStyles, ProductItem,
    CarouselProducts, LoadingScreen,
} from '../../../Global/Import/Imports';
import {getDetailChildCategory} from './components/ChildCategoryFunction';

export default function ChildCategory ({navigation,route}) {
    const [Loading,setLoading] = useState(true);
    const [Sliders,setSliders] = useState(null);
    const [Data,setData] = useState({});
    const category_id = route.params;

    useEffect(()=>{
        navigation.setOptions({headerShown:false});
        getSliders(category_id,setSliders,1)
        getDetailChildCategory(category_id,setData,setLoading)
    },[category_id]);
    return (
        <React.Fragment>
            <SearchBarTouchNavigationSetOptions navigation={navigation} route={route}/>
            <LoadingScreen Loading={Loading}/>
            {
                Loading?null:
                    <ScrollView contentContainerStyle={{justifyContent:'center'}}>
                        <ShowSliders sliders={Sliders}/>
                        <View style={{flex:1,padding:10}}>
                            <TextBold style={{fontSize:23,textAlign:'center'}}>{Data.h1}</TextBold>
                        </View>
                        <View style={GlobalStyles.ListGrid}>
                            {Data.Products?Data.Products.map((product,index) => (<ProductItem key={index} product={product}/>)):null}
                        </View>
                        <CarouselProducts
                            data={Data.ProductsHighlight}
                            title={' پرفروش های '+Data.name}
                            image={require('../../../Global/Images/bg-category.png')}
                        />
                    </ScrollView>
            }
        </React.Fragment>
    );
}
