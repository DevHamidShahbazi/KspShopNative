import {
    React, getSliders, useState, useEffect,
    SearchBarTouchNavigationSetOptions,
    ShowSliders, TextBold,
} from '../../Global/Import/Imports';
import {ScrollView} from 'react-native';
export default function Home ({navigation ,route}) {
    const [Sliders,setSliders] = useState(null);
    useEffect(()=>{
        navigation.setOptions({headerShown:false});
        getSliders(0,setSliders)
    },[]);
    return (
        <React.Fragment>
            <SearchBarTouchNavigationSetOptions navigation={navigation} route={route}/>
            <ScrollView contentContainerStyle={{justifyContent:'center'}}>
                <ShowSliders sliders={Sliders}/>
                <TextBold style={{textAlign:'center'}}>
                    Home
                </TextBold>
            </ScrollView>
        </React.Fragment>
    );
}
