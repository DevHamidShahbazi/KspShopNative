import {React,ScrollView, View,CarouselProducts} from '../../../Global/Import/Imports';
import Gallery from './Gallery';
import Header from './Header';
import TextBody from './TextBody';
export default function ProductDetailGlobal ({Data,children}) {
    return (
        <React.Fragment>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                style={{flex:1,backgroundColor:'#fff'}}>
                <Gallery gallery={Data.gallery} ParentImage={Data.image}/>
                <View style={{flex:1,padding:5}}>
                    <Header Data={Data} />
                    {children}
                    <TextBody body={Data.body} check={Data.check}/>
                </View>
                <CarouselProducts
                    type={'static'}
                    data={Data.join}
                    title={'محصولات مرتبط'}
                    image={require('../../../Global/Images/bg-category.png')}
                />
            </ScrollView>
        </React.Fragment>
    );
}
