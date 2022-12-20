import {
    React, useEffect, ScrollView, View,FlatListSlider,useState,Dimensions,
    TextBold, SearchBarTouchNavigationSetOptions,getSliders,ShowSliders,
} from '../../../Global/Import/Imports';

export default function ParentCategory ({navigation,route}) {
    const [Sliders,setSliders] = useState(null);
    useEffect(()=>{
        navigation.setOptions({headerShown:false})
        getSliders(route.params,setSliders)
    },[]);
    return (
        <React.Fragment>
            <SearchBarTouchNavigationSetOptions navigation={navigation} route={route}/>
            <ScrollView contentContainerStyle={{justifyContent:'center'}}>
                <ShowSliders sliders={Sliders}/>
            </ScrollView>
        </React.Fragment>
    );
}
