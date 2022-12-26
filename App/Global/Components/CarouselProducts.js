import {React, FlatList, Image, ProductItem, View, Text, GlobalStyles, LinearGradient,} from '../Import/Imports';
import {Dimensions} from 'react-native';
const ScreenWidth = Dimensions.get('window').width;
export default function CarouselProducts ({data,title,image,colors}) {
    let Gradients = [
        // {0:'#70c8b7', 1:'#3f2b96'},
        {0:'#005C97', 1:'#363795'},
        {0:'#4CA1AF', 1:'#2C3E50'},
        // {0:'#F8CDDA', 1:'#1D2B64'},
        {0:'#1CB5E0', 1:'#000046'},
        {0:'#004e92', 1:'#000428'},
        {0:'#4B79A1', 1:'#283E51'},
        // {0:'#a044ff', 1:'#6a3093'},
        {0:'#6441A5', 1:'#2a0845'},
        {0:'#3498db', 1:'#2c3e50'},
        // {0:'#85D8CE', 1:'#085078'},
    ];
    var item = Gradients[Math.floor(Math.random()*Gradients.length)];

    return (
        <React.Fragment>
            {
                data?
                    <LinearGradient style={{padding:5,flex:1}} useAngle={true} angle={45} colors={[item[0]+70,item[0],item[1]]} >
                        <View style={{flex:1}}>
                            <Text style={[{textAlign:'center',fontSize:19},GlobalStyles.Text_White,GlobalStyles.Font_Bold]}>
                                {title}
                            </Text>
                        </View>
                        <FlatList
                            inverted={-1}
                            horizontal={true}
                            data={data}
                            keyExtractor={(item) => item.id}
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({item,index}) => {
                                return (
                                    <React.Fragment>
                                        {
                                            !index?
                                                <View style={{alignItems:'center',justifyContent:'center',width:ScreenWidth/2.5}} activeOpacity={1}>
                                                    <Image  style={{width:ScreenWidth/2.5, height: ScreenWidth/1.8}} source={image}/>
                                                </View>:null
                                        }
                                        <ProductItem vertical={true} product={item}/>
                                    </React.Fragment>
                                )
                            }}
                        />
                    </LinearGradient>
                    :null
            }

        </React.Fragment>
    );
}
