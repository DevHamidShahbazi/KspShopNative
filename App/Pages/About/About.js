import {React,useEffect,NavigationSetOptionsAbout,TextBold,View} from '../../Global/Import/Imports';
export default function About ({navigation,route}) {
    useEffect(()=>{
        NavigationSetOptionsAbout(navigation)
    },[]);
    return (
        <React.Fragment>
            <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#fff'}}>
                <TextBold style={{fontFamily:'Vazir',textAlign:'center'}}>
                    درباره ما
                </TextBold>
            </View>
        </React.Fragment>
    );
}
