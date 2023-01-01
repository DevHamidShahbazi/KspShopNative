import {
    CarouselProducts,
    React,
    TextBold,
    ScrollView,
    View,
    TextRegular, GlobalStyles,
} from '../../../Global/Import/Imports';
import Gallery from '../components/Gallery';
import Header from '../components/Header';
import TextBody from '../components/TextBody';
import {Dimensions} from 'react-native';
const ScreenWidth = Dimensions.get('window').width;
export default function ProductAttribute ({Data}) {
    return (
        <React.Fragment>

            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                style={{flex:1,backgroundColor:'#fff'}}>
                <Gallery gallery={Data.gallery} ParentImage={Data.image}/>
                <View style={{flex:1,padding:5}}>
                    <Header Data={Data} />
                    <TextBold>
                        {Data.NameAttribute} :
                    </TextBold>
                    <View style={[GlobalStyles.ListGrid]}>
                        {Data.attributes.map((attribute,index) => (
                            <View style={[{borderColor:'#000',borderWidth:3,paddingHorizontal:'10%'},GlobalStyles.ListItem]} key={index} >
                                <TextBold style={{fontSize:15}}>{attribute.value}</TextBold>
                            </View>
                        ))}
                    </View>

                    <TextBody body={Data.body} check={Data.check}/>
                </View>
                <CarouselProducts
                    data={Data.join}
                    title={'محصولات مرتبط'}
                    image={require('../../../Global/Images/bg-category.png')}
                />
            </ScrollView>
            {/*<View style={{bottom:0,width:ScreenWidth,backgroundColor:'red'}}>*/}
            {/*    <TextBold>*/}
            {/*        test*/}
            {/*    </TextBold>*/}
            {/*</View>*/}
        </React.Fragment>
    );
}
