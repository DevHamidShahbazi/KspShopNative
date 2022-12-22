import {
    React, View, TextBold, Icon,
    Image, FlatList, Text, axios, Dimensions, TouchableOpacity, useNavigation,
} from '../../../../Global/Import/Imports';
import {CategoriesStyles} from './CategoriesStyles';

export const GetCategories = (setCategories,setLoading) => {
    axios.post('v_1_0/categories',)
        .then(function (response) {
            const {data} = response;
            if (data.status == 'success'){
                setLoading(false)
                setCategories(data.categories)
            }
        })
        .catch(function (error) {
            console.log(error);
        });
};


export function CategoriesBanner({item}) {
    const TypeCategory = item.type=='parent' ? 'ParentCategory':'ChildCategory';
    const navigation = useNavigation();
    const ScreenWidth = Dimensions.get('window').width;
    return (
        <React.Fragment>
            <TouchableOpacity onPress={() => navigation.navigate(TypeCategory,{params:item.id})} activeOpacity={.8} style={{flex:1,justifyContent:'center'}}>
                <View style={{flex:1,padding:5}}>
                    <Image style={{width:ScreenWidth-10,height:ScreenWidth/2.5,borderRadius:8}} source={{uri:item.banner}} />
                </View>
            </TouchableOpacity>
        </React.Fragment>
    );
}

export function FlatListCategoryItem ({category}) {
    const navigation = useNavigation();
    if (category.child){
        return (
            <React.Fragment>
                <View style={CategoriesStyles.containerCategoryItem}>
                    <View style={CategoriesStyles.rowCategoryItem}>
                        <TouchableOpacity onPress={() => navigation.navigate('ParentCategory',category.id)}
                                          activeOpacity={1}
                                          style={CategoriesStyles.ShowMoreCategoryItem}>
                            <Text style={CategoriesStyles.TextCategoryItem}>مشاهده بیشتر</Text>
                        </TouchableOpacity>
                        <Text style={CategoriesStyles.TextCategoryItem}>{category.name}</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <FlatList
                            inverted={-1}
                            horizontal={true}
                            data={category.child}
                            renderItem={({item}) => <Item category={item}/>}
                            keyExtractor={item => item.id}
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>
            </React.Fragment>
        );
    }
}

function Item ({category}) {
    const navigation = useNavigation();
    return (
        <React.Fragment>
            <TouchableOpacity onPress={() => navigation.navigate('ChildCategory',category.id)}
                              activeOpacity={1}
                              style={CategoriesStyles.ItemCategoryItem}>
                <Image  style={{width:135, height: 135}} source={{uri:category.image}}/>
                <TextBold style={{textAlign:'center'}}>
                    {category.name}
                </TextBold>
            </TouchableOpacity>
        </React.Fragment>
    );
}

export function SearchBarTouchNavigationSetOptions ({navigation,route}) {
    return (
        <React.Fragment>
            <View style={[CategoriesStyles.container]}>
                <View style={CategoriesStyles.box}>
                    <TouchableOpacity onPress={() => console.log('Go to ScreenSearch')}
                                      acticveOpacity={.8}
                                      style={CategoriesStyles.input}>
                        <Text style={CategoriesStyles.text}>جستجو ...</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => route.name=='Categories' || route.name=='Home' ? console.log('Go Screen Search'):navigation.goBack()}
                                      acticveOpacity={.8}
                                      style={CategoriesStyles.btnSearch}>
                        <Icon name={route.name=='Categories' || route.name=='Home' ? 'search':'arrow-right'} color={'rgba(33,56,84,0.65)'} size={17} />
                    </TouchableOpacity>
                </View>
            </View>
        </React.Fragment>
    );
}
