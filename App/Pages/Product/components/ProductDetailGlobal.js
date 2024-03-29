import {React,ScrollView, View,CarouselProducts} from '../../../Global/Import/Imports';
import Gallery from './Gallery';
import Header from './Header';
import TextBody from './TextBody';
import Comment from './Comment';
import Files from './Files';
export default function ProductDetailGlobal ({Data,children}) {
    return (
        <React.Fragment>
            <ScrollView
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps='handled'
                style={{backgroundColor:'#fff'}}>
                <Gallery gallery={Data.gallery} ParentImage={Data.image}/>
                <View style={{flex:1,padding:5}}>
                    <Header Data={Data} />
                    {children}
                    <Files files={Data.files}/>
                    <TextBody body={Data.body} check={Data.check}/>
                    <Comment product_id={Data.id} comments={Data.comment}/>
                </View>
                <CarouselProducts
                    type={'static'}
                    data={Data.join} title={'محصولات مرتبط'}
                    image={require('../../../Global/Images/bg-category.png')}/>
            </ScrollView>
        </React.Fragment>
    );
}
