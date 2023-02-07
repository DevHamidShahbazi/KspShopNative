import {
    React,TextRegular,
    Text,TouchableOpacity,View,
    MaterialCommunityIcons
} from '../Import/Imports';
export default function LoadAgain({setRender,Render,setLoading}) {
    const again = () => {
        setRender(false)
        setLoading(true)
    };
    return (
        <React.Fragment>
            {
                Render?
                    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#e5e7eb'}}>
                        <TextRegular style={{textAlign:'center',marginVertical:5}}>خطایی به وجود آمده لطفا دوباره امتحان کنید</TextRegular>
                        <TouchableOpacity onPress={() => again()} activeOpacity={.7} style={{backgroundColor:'#213854',width:'50%',borderRadius:5,flexDirection:'row',justifyContent:'center',alignItems:'center',padding:5}}>
                            <MaterialCommunityIcons name={'rotate-right'} size={20} color={'#fff'}/>
                            <Text style={{fontFamily:'Vazir',color:'#fff',marginHorizontal:10}}>بارگیری مجدد</Text>
                        </TouchableOpacity>
                    </View>:null
            }
        </React.Fragment>
    );
}
