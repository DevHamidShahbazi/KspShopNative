import React from 'react';
import ProductSizeOne from '../One/ProductSizeOne';
import ProductSizeTwo from '../Two/ProductSizeTwo';
import ProductSizeThree from '../Three/ProductSizeThree';
import ProductSizeFour from '../Four/ProductSizeFour';
const TypeProductSize =  ({TypeSize,Data}) => {
    let ProductType;
    switch (TypeSize) {
        case 'one':
            ProductType = <ProductSizeOne Data={Data}/>;
            break
        case 'two':
            ProductType = <ProductSizeTwo Data={Data}/>;
            break
        case 'three':
            ProductType = <ProductSizeThree Data={Data}/>;
            break
        case 'four':
            ProductType = <ProductSizeFour Data={Data}/>;
            break
    }
    return ProductType;
}
export default TypeProductSize;
