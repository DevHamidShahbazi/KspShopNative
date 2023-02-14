import {React,Text, TouchableOpacity, View} from '../../../Global/Import/Imports';
import Styles from '../../../Pages/Basket/Index/components/Styles';
import {ActiveSelectBox} from '../../../Pages/Basket/Index/components/Components';
const TextNormal = (props) => (<Text style={Styles.Text_Normal}>{props.children}</Text>);
const TextBlue = (props) => (<Text style={Styles.Text_Blue}>{props.children}</Text>);
export default function PrivacyAndService({setPrivacy,Privacy, setStatusModalPrivacy, setStatusModalService}) {
    return (
        <React.Fragment>
            <View style={{flexDirection:'row',justifyContent:'flex-end',marginVertical:'3%'}}>
                <TextNormal>را می پذیرم</TextNormal>
                <TouchableOpacity onPress={() => setStatusModalPrivacy(true)}>
                    <TextBlue>حریم خصوصی</TextBlue>
                </TouchableOpacity>
                <TextNormal>و</TextNormal>
                <TouchableOpacity onPress={() => {setStatusModalService(true)}}>
                    <TextBlue>استفاده از خدمات</TextBlue>
                </TouchableOpacity>
                <TextNormal>شرایط</TextNormal>
                <TouchableOpacity onPress={() => setPrivacy(!Privacy)} style={Styles.touch}
                                  activeOpacity={.6}>
                    <View style={Styles.selectBoxFactor}>{Privacy ? <ActiveSelectBox/> :null}</View>
                </TouchableOpacity>
            </View>
        </React.Fragment>
    );
}
