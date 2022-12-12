import {
    React, View, TextBold, CardStyleInterpolators, Icon, TextRegular,
    Image, FlatList, Text, axios, Dimensions, TouchableOpacity, useNavigation,
    MaterialCommunityIcons,
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
    const TypeCategory = item.child ? 'ParentCategory':'ChildCategory';
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

                <View style={{marginBottom:'2%',paddingTop:5,paddingBottom:5}}>
                    <View style={{flex:1,justifyContent:'space-between',flexDirection:'row',paddingRight:5,paddingLeft:5}}>
                        <TouchableOpacity onPress={() => navigation.navigate('ParentCategory',{params:category.id})} activeOpacity={1} style={{alignItems:'flex-end',flexDirection:'row',paddingRight:10,paddingLeft:10}}>
                            <Text style={{color:'#155e75',fontFamily:'Vazir-Bold',fontSize:14}}>مشاهده بیشتر</Text>
                        </TouchableOpacity>
                        <Text style={{color:'#155e75',fontFamily:'Vazir-Bold',fontSize:14}}>{category.name}</Text>
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
            <TouchableOpacity onPress={() => navigation.navigate('ChildCategory',{params:category.id})} activeOpacity={1}
                style={{backgroundColor: '#fff',marginTop:10,marginBottom:10,marginRight:5,marginLeft:5,padding:5,borderRadius:5,elevation: 5}}>
                <Image  style={{width:135, height: 135}} source={{uri:category.image}}/>
                <TextBold style={{textAlign:'center'}}>
                    {category.name}
                </TextBold>
            </TouchableOpacity>
        </React.Fragment>
    );
}

export  const SearchBarTouchNavigationSetOptions = (navigation,route) => {
    navigation.setOptions({
        // gestureEnabled:true,
        // gestureDirection:'horizontal',
        // cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,
        // transitionSpec:{
        //     open:{
        //         animation: 'spring',
        //         config: {
        //             stiffness: 500,
        //             damping: 500,
        //             mass: 1,
        //             overshootClamping: true,
        //             restDisplacementThreshold: 0.001,
        //             restSpeedThreshold: 0.001,
        //         },
        //     },
        //     close:{
        //         animation: 'timing',
        //         config: {
        //             stiffness: 1000,
        //             damping: 500,
        //             mass: 1,
        //             overshootClamping: true,
        //             restDisplacementThreshold: 0.001,
        //             restSpeedThreshold: 0.001,
        //         },
        //     },
        // },
        headerTitle: () => {
            return (
                <React.Fragment>
                    <View style={[CategoriesStyles.container]}>
                        <View style={CategoriesStyles.box}>
                            <TouchableOpacity onPress={() => console.log('Go Screen Search')} acticveOpacity={.8} style={CategoriesStyles.input}>
                                <Text style={CategoriesStyles.text}>جستجو ...</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.canGoBack()?navigation.goBack():console.log('Go Screen Search')} acticveOpacity={.8}  style={CategoriesStyles.btnSearch}>
                                <Icon name={navigation.canGoBack()?'arrow-right':'search'} color={'rgba(33,56,84,0.65)'} size={17} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </React.Fragment>

            )

        },
        headerLeft:false,
        headerRight: false,
        headerTitleAlign: 'center',
        headerStyle: {
            height:60,
            backgroundColor: '#213854',
            elevation:0,
        },
    })
};
