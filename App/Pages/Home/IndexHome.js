import {React, createStackNavigator, Home, Product} from '../../Global/Import/Imports';

export default function IndexHome () {
    const HomeStack = createStackNavigator();
    return (
        <React.Fragment>
            <HomeStack.Navigator>
                <HomeStack.Screen name="Home" component={Home}/>
                <HomeStack.Screen name="Product" component={Product}/>
            </HomeStack.Navigator>
        </React.Fragment>
    );
}
