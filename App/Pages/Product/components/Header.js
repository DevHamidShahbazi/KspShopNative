import {React,View,TextBold} from '../../../Global/Import/Imports';
import Breadcrumb from './Breadcrumb';
export default function Header ({name,category,h1,ParentCategory}) {
    return (
        <React.Fragment>
            <Breadcrumb ProductName={name} category={category} ParentCategory={ParentCategory} />
            <View style={{paddingBottom:10}}>
                <TextBold style={{fontSize:24,textAlign:'center'}}>{h1 ?? name}</TextBold>
                <TextBold style={{fontSize:13,textAlign:'right',marginVertical:'1%'}}>{' مقایسه، مشاهده قیمت و خرید آنلاین '+(h1 ?? name)}</TextBold>
            </View>
        </React.Fragment>
    );
}
