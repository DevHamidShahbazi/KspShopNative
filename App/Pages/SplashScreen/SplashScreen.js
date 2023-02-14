import {
    React, View, Text, useEffect, useRef, MaterialCommunityIcons,
    LinearGradient, Animated,useState,TouchableOpacity,ActivityIndicator,
} from '../../Global/Import/Imports';
import NetInfo from "@react-native-community/netinfo";
export default function SplashScreen ({setConnection,Connection,setLoading,Loading}) {
    const startValue = useRef(new Animated.Value(0)).current;
    useEffect(()=>{
        Animated.timing(startValue, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: true,
        }).start();
    },[]);
    const ChangeNet = () => {
        setLoading(true)
        NetInfo.fetch().then(state => {setConnection(state.isConnected)});
        setLoading(false)
    };
    return (
        <React.Fragment>
            <LinearGradient colors={['#fff','#eee','#213854']} style={{flex:1, justifyContent: "flex-end"}} >
                <Animated.View style={{
                    opacity: startValue,
                    flex:2,
                    padding : 10,
                    justifyContent: "center",
                    alignItems: 'center'
                }}>
                    <Animated.Image
                        source={{uri: 'https://ksp-shop.com/Upload/image/logo/.png'}}
                        style={[{width: '80%', height: 250}, {opacity: startValue}]}/>
                </Animated.View>

                <View style={{flex:2,justifyContent: 'flex-end',padding: 35}}>
                    {
                        Connection?
                            <Text style={{textAlign:'center', fontSize:25,
                                fontFamily:'Vazir-Bold', color:'#fff'}}>
                                فروشگاه کا اس پی
                            </Text>:
                            <React.Fragment>
                                {
                                    Loading?
                                        <ActivityIndicator size="large" color="#fff"/>
                                        :
                                        <TouchableOpacity activeOpacity={.6}
                                                          onPress={() => {() => ChangeNet()} } style={{marginVertical:20,alignItems:'center'}}>
                                            <Text style={{textAlign:'center', fontSize:20, fontFamily:'Vazir-Bold', color:'#fff'}}>
                                                ارتباط برقرار نشد
                                            </Text>
                                            <MaterialCommunityIcons size={35} color={'#fff'} name={'rotate-right'}/>
                                        </TouchableOpacity>
                                }
                            </React.Fragment>
                    }
                </View>

            </LinearGradient>
        </React.Fragment>
    );
};
