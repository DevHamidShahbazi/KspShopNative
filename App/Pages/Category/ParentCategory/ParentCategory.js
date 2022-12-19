import {
    React, useEffect, ScrollView, View,FlatListSlider,
    TextBold, SearchBarTouchNavigationSetOptions
} from '../../../Global/Import/Imports';
import { Dimensions} from 'react-native';
const ScreenWidth = Dimensions.get('window').width;
export default function ParentCategory ({navigation,route}) {
    const images = [
        {
            image : 'https://ksp-shop.com/Upload/image/gallery/OudXW-KspShop.jpg'
        },
        {
            image : 'https://ksp-shop.com/Upload/image/gallery/2EOpc-KspShop.jpg'
        },
        {
            image : 'https://ksp-shop.com/Upload/image/gallery/yCuYQ-KspShop.jpg'
        }
    ]

    useEffect(()=>{
        navigation.setOptions({headerShown:false})
    },[]);
    return (
        <React.Fragment>
            <SearchBarTouchNavigationSetOptions navigation={navigation} route={route}/>

            <ScrollView contentContainerStyle={{justifyContent:'center'}}>
                <FlatListSlider
                    height={ScreenWidth/1.333333}
                    autoscroll={false}
                    data={images}
                    loop={false}
                    onPress={() => console.log('Press')}
                    indicatorContainerStyle={{position:'absolute', bottom: 20}}
                    indicatorActiveColor={'#213854'}
                    indicatorInActiveColor={'#ffffff'}
                    indicatorActiveWidth={30}
                    animation
                />
                <TextBold style={{textAlign:'center'}}>ParentCategory</TextBold>
                <TextBold style={{textAlign:'center'}}>ParentCategory</TextBold>
                <TextBold style={{textAlign:'center'}}>ParentCategory</TextBold>
            </ScrollView>
        </React.Fragment>
    );
}
