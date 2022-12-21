import {React,useEffect,SearchBarTouchNavigationSetOptions,TextBold} from '../../Global/Import/Imports';

export default function Product ({navigation,route}) {
    const product_id = route.params;
    useEffect(()=>{
        navigation.setOptions({headerShown:false})
    },[]);
    return (
        <React.Fragment>
            <SearchBarTouchNavigationSetOptions navigation={navigation} route={route}/>
            <TextBold style={{textAlign:'center'}}>
                جزئیات محصول
            </TextBold>
        </React.Fragment>
    );
}
