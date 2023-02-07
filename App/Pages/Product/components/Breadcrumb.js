import {React, View,RFValue, Text, useNavigation} from '../../../Global/Import/Imports';
import {StyleSheet} from 'react-native'
const Styles = StyleSheet.create({
    Bold:{
        color:'#155e75',
        fontSize:RFValue(15),
        fontFamily:'Vazir-Bold',
    },
})
export default function Breadcrumb ({category,ParentCategory,ProductName}) {
    const navigation = useNavigation();
    const Slash = () => (<Text style={Styles.Bold}>{'  '+'/'+'  '}</Text>)
    const Item = ({name,type,category_id}) => (<Text onPress={() => (navigation.navigate(type,category_id))} style={Styles.Bold} >{name}</Text>)
    return (
        <React.Fragment>
            <View style={{padding:10}}>
                <View style={{flexDirection:'row-reverse',alignItems:'center'}}>
                    {category.parent_id != '0'?<><Item category_id={ParentCategory.id} type={'ParentCategory'} name={ParentCategory.name}/><Slash/></>:null}
                    <Item category_id={category.id} type={category.parent_id != '0'?'ChildCategory':'ParentCategory'} name={category.name}/>
                </View>
            </View>
        </React.Fragment>
    );
}
