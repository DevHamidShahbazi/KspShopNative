import {React, getSliders, useState, useEffect,CarouselProducts, SearchBarTouchNavigationSetOptions, ShowSliders, ScrollView, LoadingScreen} from '../../Global/Import/Imports';
import getData from './components/GetData';
import HighlightSection from './components/HighlightSection';
import CategoriesSection from './components/CategoriesSection';
export default function Home ({navigation ,route}) {
    const [Loading,setLoading] = useState(true);
    const [Sliders,setSliders] = useState(null);
    const [Data,setData] = useState({});
    useEffect(()=>{
        navigation.setOptions({headerShown:false});
        getSliders(0,setSliders)
        getData(setData,setLoading)
    },[]);
    return (
        <React.Fragment>
            <SearchBarTouchNavigationSetOptions navigation={navigation} route={route}/>
            <LoadingScreen Loading={Loading}/>
            {
                Loading?null:
                    <ScrollView contentContainerStyle={{justifyContent:'center',backgroundColor:'#e5e7eb'}}>
                        <ShowSliders sliders={Sliders}/>
                        <HighlightSection Highlight={Data.Highlight}/>
                        <CategoriesSection Categories={Data.Categories}/>
                        <CarouselProducts
                            data={Data.CustomProducts}
                            title={'محصولات پرفروش'}
                            // colors={[ '#70c8b7','#70c8b7','#0f6393', '#0e3f5f']}
                            image={require('../../Global/Images/home-1.png')}
                        />
                    </ScrollView>
            }
        </React.Fragment>
    );
}


