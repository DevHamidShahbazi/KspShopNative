import {
    React, useEffect,
    View,ScrollView, useState, TextBold,
    SearchBarTouchNavigationSetOptions,
    ShowSliders, getSliders,
} from '../../../Global/Import/Imports';

export default function ChildCategory ({navigation,route}) {
    const [Sliders,setSliders] = useState(null);
    useEffect(()=>{
        navigation.setOptions({headerShown:false});
        getSliders(route.params,setSliders,1)
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
