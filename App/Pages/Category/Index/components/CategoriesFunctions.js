import {
    React, View, TextBold,CardStyleInterpolators, Icon, TextRegular,
    Image,FlatList,Text,axios,collect,
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

const data =
    [
        {
            id:1,name:'بلوک پلاستیک',image:'https://ksp-shop.com/Upload/image/productCategory/d0P1t-KspShop.jpg'
        },
        {
            id:2,name:'کفشک ها',image:'https://ksp-shop.com/Upload/image/productCategory/pkbsQ-KspShop.jpg'
        },
        {
            id:3,name:'فنر',image:'https://ksp-shop.com/Upload/image/productCategory/o6SSy-KspShop.jpg'
        },
        {
            id:4,name:'پران ها',image:'https://ksp-shop.com/Upload/image/productCategory/WRa0x-KspShop.jpg'
        },
        {
            id:5,name:'پین ها',image:'https://ksp-shop.com/Upload/image/productCategory/zC3eR-KspShop.jpg'
        }
    ];

export function FlatListCategoryItem ({category}) {
    return (
        <React.Fragment>

            <View style={{backgroundColor: '#fff',marginTop:'5%',elevation: 2,paddingTop:5,paddingBottom:5}}>
                <View style={{paddingRight:10,paddingLeft:10}}>
                    <TextBold>دسته بندی</TextBold>
                </View>
                <View style={{flexDirection:'row'}}>
                    <FlatList
                        inverted={-1}
                        horizontal={true}
                        data={data}
                        renderItem={({item}) => <Item category={item}/>}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                <View style={{alignItems:'flex-end',flexDirection:'row',paddingRight:10,paddingLeft:10}}>
                    <Text style={{color:'#155e75',fontFamily:'Vazir-Bold',fontSize:14}}>مشاهده همه</Text>
                </View>
            </View>
        </React.Fragment>
    );
}

function Item ({category}) {
    return (
        <React.Fragment>
            <View style={{backgroundColor: '#fff',marginTop:10,marginBottom:10,marginRight:5,marginLeft:5,padding:5,borderRadius:5,elevation: 5}}>
                <Image  style={{width:100, height: 100}} source={{uri:category.image}}/>
                <TextBold style={{textAlign:'center'}}>
                    {category.name}
                </TextBold>
            </View>
        </React.Fragment>
    );
}

export  const SearchBarTouchNavigationSetOptions = (navigation,route) => {
    navigation.setOptions({
        gestureEnabled:true,
        gestureDirection:'horizontal',
        cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,
        transitionSpec:{
            open:{
                animation: 'spring',
                config: {
                    stiffness: 500,
                    damping: 500,
                    mass: 1,
                    overshootClamping: true,
                    restDisplacementThreshold: 0.001,
                    restSpeedThreshold: 0.001,
                },
            },
            close:{
                animation: 'timing',
                config: {
                    stiffness: 1000,
                    damping: 500,
                    mass: 1,
                    overshootClamping: true,
                    restDisplacementThreshold: 0.001,
                    restSpeedThreshold: 0.001,
                },
            },
        },
        headerTitle: () => {
            return (
                <View style={[CategoriesStyles.container]}>
                    <View style={CategoriesStyles.box}>
                        <View style={CategoriesStyles.input}>
                            <TextRegular style={{fontSize:15}}>جستجو ...</TextRegular>
                        </View>
                        <View style={CategoriesStyles.btnSearch}>
                            <Icon name={'search'} color={'#213854'} size={17} />
                        </View>
                    </View>
                </View>
            )
        },
        headerLeft:false,
        headerRight:false,
        headerTitleAlign: 'center',
        headerStyle: {
            height:60,
            backgroundColor: '#213854',
            elevation:0,
        },
    })
};
