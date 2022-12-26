import {Icon, React,Text, TouchableOpacity, View,TextInput} from '../../../Global/Import/Imports';
import {CategoriesStyles} from '../../Category/Index/components/CategoriesStyles';
export function SearchNavigation ({navigation,setSearch}) {
    return (
        <React.Fragment>
            <View style={[CategoriesStyles.container]}>
                <View style={CategoriesStyles.box}>
                    <TextInput
                        onSubmitEditing={() => console.log('submit')}
                        KeyboardType={'search'}
                        onChangeText={val => setSearch(val)}
                        autoFocus={true}
                        style={[CategoriesStyles.input,{fontFamily:'Vazir', textAlign : 'right',color:'black'}]}
                        placeholder={'جستجو ...'}
                        placeholderTextColor={'rgba(33,56,84,0.65)'}
                    />
                    <TouchableOpacity onPress={() =>navigation.goBack()}
                                      acticveOpacity={.8}
                                      style={CategoriesStyles.btnSearch}>
                        <Icon name={'arrow-right'} color={'rgba(33,56,84,0.65)'} size={17} />
                    </TouchableOpacity>
                </View>
            </View>
        </React.Fragment>
    );
}
