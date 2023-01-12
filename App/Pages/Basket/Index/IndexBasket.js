import {
    React,createStackNavigator,Basket,
} from '../../../Global/Import/Imports';

export default function IndexBasket ({navigation ,Route}) {
    const BasketStack = createStackNavigator();
    return (
        <React.Fragment>
            <BasketStack.Navigator>
                <BasketStack.Screen name="Basket" component={Basket}/>
            </BasketStack.Navigator>
        </React.Fragment>
    );
}
