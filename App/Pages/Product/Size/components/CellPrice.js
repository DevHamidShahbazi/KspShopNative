import React from 'react';
import {ProductSizeStyles} from './ProductSizeStyle';
import {Text, View} from 'react-native';

export default function CellPrice ({children,fontSize=null}) {

    return (
        <React.Fragment>
            <View  style={ProductSizeStyles.ItemPrice}>
                <Text style={[ProductSizeStyles.CellPrice,fontSize?{fontSize:fontSize}:{fontSize:17}]}>
                    {children}
                </Text>
            </View>
        </React.Fragment>
    );
}
