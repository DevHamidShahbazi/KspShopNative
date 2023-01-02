import {React, OfferProduct,ProductNotCount} from '../../../Global/Import/Imports';
import BtnAddToCart from '../components/BtnAddToCart';
import ProductDetailGlobal from '../components/ProductDetailGlobal';
export default function ProductSimple ({Data}) {
    const {status,offer}= Data
    return (
        <React.Fragment>
            <ProductDetailGlobal Data={Data}>
                {status != "2"?<ProductNotCount/>:null}
                <OfferProduct offer={offer}/>
            </ProductDetailGlobal>
            {status == "2"? <BtnAddToCart product={Data}/> :null}
        </React.Fragment>
    );
}
