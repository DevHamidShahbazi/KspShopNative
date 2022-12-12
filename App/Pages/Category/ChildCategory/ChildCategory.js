import {React, useEffect, View, TextBold, SearchBarTouchNavigationSetOptions} from '../../../Global/Import/Imports';

export default function ChildCategory ({navigation,route}) {
    useEffect(()=>{
        SearchBarTouchNavigationSetOptions(navigation,route);
    },[]);
    return (
        <React.Fragment>
            <View style={{flex:1,justifyContent:'center'}}>
                <TextBold style={{textAlign:'center'}}>
                    ChildCategory
                </TextBold>
            </View>
        </React.Fragment>
    );
}
