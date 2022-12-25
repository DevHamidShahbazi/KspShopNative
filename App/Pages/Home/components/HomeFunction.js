import {
    React,
    TouchableOpacity,
    axios,
    GlobalStyles,
    TextBold,
    Image,
    ImageBackground,
    Text,
    View,
    useNavigation,
} from '../../../Global/Import/Imports';
import {Dimensions} from 'react-native';
const ScreenWidth = Dimensions.get('window').width;

export function getHighlight (setData) {
    axios.post('v_1_0/home')
        .then(function (response) {
            const {data} = response;
            if (data.status == 'success'){
                setData({
                    'Highlight':data.highlights,
                    'Categories':data.categories,
                })
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}

export function HighlightSection ({Highlight}) {
    return (
        <React.Fragment>
            <ImageBackground style={{padding:5,flex:1,}} resizeMode="cover" source={require('../../../Global/Images/highlight.jpg')}>
                <View style={{flex:1,marginBottom:'5%'}}>
                    <Text style={{fontSize:25,textAlign:'center',color:'#fff',fontFamily:'Vazir-Bold'}}>
                        قلب قالب شما
                    </Text>
                    <Text style={{fontSize:15,textAlign:'center',color:'#fff',fontFamily:'Vazir'}}>
                        شرکت کا اس پی تولید کننده و عرضه کننده قطعات قالبسازی با بیش از 20 سال تجربه در خدمت قالبسازان عزیز کشور می باشد
                    </Text>
                </View>
                <View style={{flex:1,justifyContent:'center',alignItems:'center',marginBottom:'2%'}}>
                    <Image style={{width:ScreenWidth/1.5,height:ScreenWidth/3.5}} source={require('../../../Global/Images/bg-home.png')} />
                </View>
                <View style={{flexDirection:'row', flexWrap:'wrap',justifyContent:'space-around'}}>
                    {Highlight?Highlight.map((item,index) => (<ObjHighlight key={index} item={item}/>)):null}
                </View>
            </ImageBackground>
        </React.Fragment>
    );
}
function ObjHighlight ({item}) {
    const navigation = useNavigation()
    return (
        <React.Fragment>
            <View style={{width:ScreenWidth/2.1,backgroundColor: '#fff', marginTop:10, marginBottom:10, marginRight:2, marginLeft:2, borderRadius:5, elevation: 5}}>
                <TouchableOpacity onPress={() => navigation.navigate('ParentCategory',item.id)} style={{padding:10,backgroundColor:'rgba(0,0,0,.03)',borderBottomWidth:1,borderBottomColor:'rgba(0,0,0,.125)'}} activeOpacity={1}>
                    <TextBold style={{fontSize:15,textAlign:'center'}}>
                        {item.name}
                    </TextBold>
                </TouchableOpacity>
                <View style={[GlobalStyles.ListGrid,{padding:2}]}>
                    {item.products?item.products.map((product,index) => <ItemHighlight key={index} item={product}/>):null}
                    {item.childCategories?item.childCategories.map((childCategory,index) => <ItemHighlight key={index} item={childCategory}/>):null}
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('ParentCategory',item.id)} style={{padding:3,backgroundColor:'rgba(0,0,0,.03)',borderTopWidth:1,borderTopColor:'rgba(0,0,0,.125)',}} activeOpacity={1}>
                    <TextBold style={{fontSize:15,textAlign:'center'}}>
                        نمایش همه
                    </TextBold>
                </TouchableOpacity>
            </View>
        </React.Fragment>
    );
}

function ItemHighlight ({item}) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate(item.type,item.id)}
                          activeOpacity={1}
                          style={{justifyContent:'center',marginTop:'10%'}}>
            <Image style={{width:90,height:90}} source={{uri:item.image}} />
            <TextBold style={{textAlign:'center',fontSize:12}}>
                {item.name}
            </TextBold>
        </TouchableOpacity>
    );
}
