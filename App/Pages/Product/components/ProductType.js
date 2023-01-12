import {React} from '../../../Global/Import/Imports';
import ProductSimple from '../Simple/ProductSimple';
import ProductSize from '../Size/ProductSize';
import ProductAttribute from '../Attribute/ProductAttribute';
const ProductType = ({Data}) => {
    let ProductType;
    switch (Data.type) {
        case 'simple':
            ProductType = <ProductSimple Data={Data}/>;
            break
        case 'size':
            ProductType = <ProductSize Data={Data}/>;
            break
        case 'attribute':
            ProductType = <ProductAttribute Data={Data}/>;
            break
    }
    return ProductType;
}
export default ProductType


