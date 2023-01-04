import {React,ScrollView, View,CarouselProducts} from '../../../Global/Import/Imports';
import Gallery from './Gallery';
import Header from './Header';
import TextBody from './TextBody';
import {ProductStyles} from './ProductStyle';
import {FlatList, Text} from 'react-native';
export default function ProductDetailGlobal ({Data,children}) {
    return (
        <React.Fragment>
            <FlatList
                ListHeaderComponent={() => {
                    return (
                        <React.Fragment>
                            <Gallery gallery={Data.gallery} ParentImage={Data.image}/>
                            <View style={{flex:1,padding:5}}>
                                <Header Data={Data} />
                                {children}
                                <TextBody body={Data.body} check={Data.check}/>
                            </View>
                        </React.Fragment>
                    )
                }}
                ListFooterComponent={() => <CarouselProducts
                    type={'static'}
                    data={Data.join} title={'محصولات مرتبط'}
                    image={require('../../../Global/Images/bg-category.png')}/>}
                style={{backgroundColor:'#fff'}}
                data={null}
                renderItem={({item}) => null}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            />
        </React.Fragment>
    );
}
