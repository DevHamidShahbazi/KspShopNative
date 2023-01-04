import React from 'react';
import {ProductSizeStyles} from './ProductSizeStyle';
import {Text, View} from 'react-native';
import {ShowPriceTableTwo} from './ShowPrice';

export default function CellPrice ({sizes,ItemLength,ItemDiameter}) {

    return (
        <React.Fragment>
            <View  style={ProductSizeStyles.ItemPrice}>
                <Text style={[ProductSizeStyles.CellPrice,{fontSize:17}]}>
                    {'__'}
                    <ShowPriceTableTwo
                        sizes={sizes}
                        ItemLength={ItemLength}
                        ItemDiameter={ItemDiameter}
                    />
                </Text>
            </View>
        </React.Fragment>
    );
}
