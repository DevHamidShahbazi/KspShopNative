import {React, GlobalStyles, View, CategoryItem,} from '../../../Global/Import/Imports';
export default function CategoriesSection ({Categories}) {
    return (
        <React.Fragment>
            <View style={GlobalStyles.ListGrid}>
                {Categories?Categories.map((category,index) => (<CategoryItem key={index} category={category}/>)):null}
            </View>
        </React.Fragment>
    );
}
