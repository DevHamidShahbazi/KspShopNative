import {React,useEffect,View,TextBold} from '../../../Global/Import/Imports';

export default function ChildCategory (props) {

    return (
        <React.Fragment>
            <View style={{flex:1,justifyContent:'center'}}>
                <TextBold style={{textAlign:'center'}}>
                    ChildCategory
                </TextBold>
            </View>
        </React.Fragment>
    );
}
