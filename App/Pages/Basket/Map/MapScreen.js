import {
    React, useEffect,View, useState,useFocusEffect,
    NavigationSetOptionsPanel,LoadingScreen} from '../../../Global/Import/Imports';
import Styles from './components/Styles';
import getData from './components/getData';
import SectionBottom from './components/SectionBottom';
import MapView, {Marker} from 'react-native-maps';
export default function MapScreen({navigation,route}) {
    const [Render,setRender] = useState(1);
    const [Loading,setLoading] = useState(true);
    const [LoadingSubmit,setLoadingSubmit] = useState(false);
    const [Region,setRegion] = useState({latitude: 35.699716702629985,longitude:51.334761888009744});
    useFocusEffect(
        React.useCallback(() => {
            setLoading(true)
            getData(setLoading,setRegion,setRender,Render)
        }, [])
    );
    useEffect(()=>{
        getData(setLoading,setRegion,setRender,Render)
        NavigationSetOptionsPanel(navigation,'مکان مورد نظر را انتخاب کنید');
    },[Render]);
    return (
        <React.Fragment>
            <LoadingScreen Loading={Loading} />
            {!Loading?
            <View style={Styles.container}>
                <MapView onRegionChange={(region) => setRegion(region)}
                         style={{flex:20}} showsUserLocation={true} zoomEnabled={true}
                         zoomControlEnabled={true}
                         initialRegion={{
                             latitude:Region.latitude,
                             longitude:Region.longitude,
                             latitudeDelta: 0.08757,
                             longitudeDelta: 0.08866,
                         }}>
                    <Marker coordinate={{ latitude: Region.latitude , longitude:Region.longitude}}
                            title={"نشانگر را در محل مورد نظر قرار دهید و دکمه ثبت را فشار دهید"}/>
                </MapView>
                <SectionBottom Region={Region} LoadingSubmit={LoadingSubmit}
                               navigation={navigation} setLoadingSubmit={setLoadingSubmit}/>
            </View>:null}

        </React.Fragment>
    );
}
