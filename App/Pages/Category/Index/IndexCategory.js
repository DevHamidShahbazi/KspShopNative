import {
    React,createStackNavigator,
    Categories, ChildCategory, ParentCategory,
} from '../../../Global/Import/Imports';
export default function IndexCategory ({navigation ,Route}) {
    const CategoryStack = createStackNavigator();
    return (
        <React.Fragment>
            <CategoryStack.Navigator>
                <CategoryStack.Screen name="Categories" component={Categories}/>
                <CategoryStack.Screen name="ChildCategory" component={ChildCategory}/>
                <CategoryStack.Screen name="ParentCategory" component={ParentCategory}/>
            </CategoryStack.Navigator>
        </React.Fragment>
    );
}