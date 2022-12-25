import {
    React, getSliders, useState, useEffect, ImageBackground,
    SearchBarTouchNavigationSetOptions, Image, TextRegular,
    ShowSliders, TextBold, View, Text, GlobalStyles, ScrollView, CategoryItem,
} from '../../Global/Import/Imports';
import {getHighlight,HighlightSection} from './components/HomeFunction';
export default function Home ({navigation ,route}) {
    const [Sliders,setSliders] = useState(null);
    const [Data,setData] = useState({});
    useEffect(()=>{
        navigation.setOptions({headerShown:false});
        getSliders(0,setSliders)
        getHighlight(setData)
    },[]);
    return (
        <React.Fragment>
            <SearchBarTouchNavigationSetOptions navigation={navigation} route={route}/>
            <ScrollView contentContainerStyle={{justifyContent:'center',backgroundColor:'#e5e7eb'}}>
                <ShowSliders sliders={Sliders}/>
                <HighlightSection Highlight={Data.Highlight}/>
                <View style={GlobalStyles.ListGrid}>
                    {Data.Categories?Data.Categories.map((category,index) => (<CategoryItem key={index} category={category}/>)):null}
                </View>
            </ScrollView>
        </React.Fragment>
    );
}


