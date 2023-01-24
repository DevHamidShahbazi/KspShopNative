import {React,createStackNavigator,Basket} from '../../../Global/Import/Imports';
import MapScreen from '../Map/MapScreen';
import LocationScreen from '../Location/LocationScreen';
export default function IndexBasket ({navigation ,Route}) {
    const BasketStack = createStackNavigator();
    return (
        <React.Fragment>
            <BasketStack.Navigator>
                <BasketStack.Screen name="Basket" component={Basket}/>
                <BasketStack.Screen name="Map" component={MapScreen}/>
                <BasketStack.Screen name="Location" component={LocationScreen}/>
            </BasketStack.Navigator>
        </React.Fragment>
    );
}
