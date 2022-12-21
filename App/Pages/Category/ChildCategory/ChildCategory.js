import {
    React, useEffect,
    View,ScrollView, useState, TextBold,
    SearchBarTouchNavigationSetOptions,
    ShowSliders, getSliders,
} from '../../../Global/Import/Imports';

export default function ChildCategory ({navigation,route}) {
    const [Sliders,setSliders] = useState(null);
    const category_id = route.params.params;
    useEffect(()=>{
        navigation.setOptions({headerShown:false});
        getSliders(category_id,setSliders,1)
    },[]);
    return (
        <React.Fragment>
            <SearchBarTouchNavigationSetOptions navigation={navigation} route={route}/>
            <ScrollView contentContainerStyle={{justifyContent:'center'}}>
                <ShowSliders sliders={Sliders}/>
                <TextBold style={{textAlign:'center'}}>
                    child
                </TextBold>
            </ScrollView>
        </React.Fragment>
    );
}
