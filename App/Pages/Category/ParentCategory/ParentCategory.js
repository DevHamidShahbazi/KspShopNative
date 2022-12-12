import {
    React, useEffect, ScrollView, View,
    TextBold, SearchBarTouchNavigationSetOptions,
} from '../../../Global/Import/Imports';

export default function ParentCategory ({navigation,route}) {
    useEffect(()=>{
        SearchBarTouchNavigationSetOptions(navigation,route);
    },[]);
    return (
        <React.Fragment>
            <ScrollView contentContainerStyle={{justifyContent:'center'}}>
                <TextBold style={{textAlign:'center'}}>ParentCategory</TextBold>
                <TextBold style={{textAlign:'center'}}>ParentCategory</TextBold>
                <TextBold style={{textAlign:'center'}}>ParentCategory</TextBold>
            </ScrollView>
        </React.Fragment>
    );
}
