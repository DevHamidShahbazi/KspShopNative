import {React,TouchableOpacity,MaterialCommunityIcons} from '../../../Global/Import/Imports';
export function NavigationSetOptionsAbout (navigation) {
    return (
        navigation.setOptions({
            headerTitle: 'به نام خدا',
            headerTitleAlign: 'center',
            headerTitleStyle: {
                fontFamily:'Vazir-Bold',
                color:'#213854'
            },
            headerStyle: {
                backgroundColor: '#fff',
                elevation:2,
            },
            headerLeft: false,
            headerRight: () => {
                return (
                    <TouchableOpacity activeOpacity={.7} onPress={() =>  navigation.goBack()} style={{marginRight:8}}>
                        <MaterialCommunityIcons name={'close'} color={'#213854'} size={30} />
                    </TouchableOpacity>
                )
            },
        })
    )
}
