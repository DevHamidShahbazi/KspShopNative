import {axios, React, Slick,useNavigation,Image, TouchableOpacity} from '../Import/Imports';
import {Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
const ScreenWidth = Dimensions.get('window').width;


export function getSliders (categoryId,setSliders,random = null) {
    axios.post('v_1_0/sliders',{
        'category_id':categoryId
    })
        .then(function (response) {
            const {data} = response;
            if (data.status == 'success'){
                setSliders(random?data.RandomSliders:data.sliders)
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}

export function ShowSliders ({sliders}) {
    const navigation =useNavigation();
    return (
        <React.Fragment>
            {
                sliders?
                    <SliderSlick  autoplay={true} showsPagination={false} showsButtons={false}>
                        {sliders.map((slide,index) => (
                            <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Product',slide.product_id)} key={index}>
                                <Image style={{height:ScreenWidth/1.333333}}  source={{uri:slide.image}} />
                            </TouchableOpacity>
                        ))}
                    </SliderSlick>
                    :null
            }
        </React.Fragment>
    );
}

export function SliderSlick ({children,autoplay,showsPagination,showsButtons}) {
    return (
        <React.Fragment>
            <Slick style={{height:ScreenWidth/1.333333}}
                   autoplayTimeout={6}
                   loop={true}
                   prevButton={<Icon name={'chevron-left'} color={'rgba(255,255,255,0.7)'} size={25}/>}
                   nextButton={<Icon name={'chevron-right'} color={'rgba(255,255,255,0.7)'} size={25}/>}
                   showsButtons={showsButtons} activeDotColor={'#213854'}
                   autoplay={autoplay} showsPagination={showsPagination}>
                {children}
            </Slick>
        </React.Fragment>
    );
}
