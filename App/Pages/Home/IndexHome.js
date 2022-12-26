import {
    React,
    createStackNavigator,
    Home,
    Product,
    ParentCategory,
    ChildCategory,
    Search,
} from '../../Global/Import/Imports';
export default function IndexHome () {
    const HomeStack = createStackNavigator();
    return (
        <React.Fragment>
            <HomeStack.Navigator>
                <HomeStack.Screen name="Home" component={Home}/>
                <HomeStack.Screen name="Search" component={Search}/>
                <HomeStack.Screen name="ParentCategory" component={ParentCategory}/>
                <HomeStack.Screen name="ChildCategory" component={ChildCategory}/>
                <HomeStack.Screen name="Product" component={Product}/>
            </HomeStack.Navigator>
        </React.Fragment>
    );
}
