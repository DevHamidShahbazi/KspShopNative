import {React, useEffect,useState,Image, View, TextBold} from '../../Global/Import/Imports';
import {SearchNavigation} from './components/SearchNavigation';
import {Dimensions} from 'react-native';
import getData from './components/GetData';
const ScreenWidth = Dimensions.get('window').width;

export default function Search ({navigation,route}) {
    const [Search,setSearch] = useState(null);
    const [Items,setItems] = useState(null);
    useEffect(()=>{
        navigation.setOptions({headerShown:false});
        getData(Search,setItems)
    },[Search]);
    return (
        <React.Fragment>
            <SearchNavigation navigation={navigation} setSearch={setSearch}/>
            {
                Search?
                    <View style={{flex:1,backgroundColor:'#e5e7eb',justifyContent:'center',alignItems:'center'}}>
                        <TextBold>{Search}</TextBold>
                    </View>
                    :
                    <View style={{flex:1,backgroundColor:'#fff',justifyContent:'center',alignItems:'center'}}>
                        <Image style={{width:ScreenWidth-30,height:ScreenWidth/1.3}} source={require('../../Global/Images/search.jpg')} />
                    </View>
            }
        </React.Fragment>
    );
}
