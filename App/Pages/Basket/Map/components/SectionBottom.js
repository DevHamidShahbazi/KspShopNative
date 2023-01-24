import {React,ActivityIndicator, Text, TouchableOpacity, View} from '../../../../Global/Import/Imports';
import Styles from './Styles';
import handleSubmit from './handleSubmit';
export default function SectionBottom({LoadingSubmit,Region,setLoadingSubmit,navigation}) {
    return (
        <React.Fragment>
            <View style={Styles.SectionBottom}>
                {LoadingSubmit?<ActivityIndicator size="large" color="#155e75"/>:null}
                <TouchableOpacity onPress={() => handleSubmit(Region,setLoadingSubmit,navigation)}
                                  style={[Styles.btn,{display:LoadingSubmit?'none':'flex'}]} activeOpacity={.7}>
                    <Text style={Styles.textBtn}>ثبت</Text>
                </TouchableOpacity>
            </View>
        </React.Fragment>
    );
}
