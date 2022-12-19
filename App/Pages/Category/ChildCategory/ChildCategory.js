import {React, useEffect, View, TextBold, SearchBarTouchNavigationSetOptions} from '../../../Global/Import/Imports';

export default function ChildCategory ({navigation,route}) {
    useEffect(()=>{
        navigation.setOptions({headerShown:false})
    },[]);
    return (
        <React.Fragment>
            <SearchBarTouchNavigationSetOptions navigation={navigation} route={route}/>
            <View style={{flex:1,justifyContent:'center'}}>
                <TextBold style={{textAlign:'center'}}>
                    ChildCategory
                </TextBold>
            </View>
        </React.Fragment>
    );
}
