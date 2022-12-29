import {React,Slick,Image,View} from '../../../Global/Import/Imports';
import {Dimensions} from 'react-native';
const ScreenWidth = Dimensions.get('window').width;
const merge = (first, second) => {
    for(let i=0; i<second.length; i++) {
        first.push(second[i]);
    }
    return first;
}
export default function Gallery ({gallery,ParentImage}) {
    return (
        <View style={{height:ScreenWidth/1.7}}>
            <Slick
                autoplayTimeout={6} loop={false}
                showsButtons={false} activeDotColor={'#213854'}
                autoplay={false} showsPagination={false}>
                {
                    merge(gallery,[{'id':Math.random(),'image':ParentImage}]).reverse().map((slide,index) => (
                        <View key={index} style={{justifyContent:'center',alignItems:'center'}}>
                            <Image style={{width:ScreenWidth/1.7,height:ScreenWidth/1.7}}  source={{uri:slide.image}} />
                        </View>
                    ))
                }
            </Slick>
        </View>

    );
}
