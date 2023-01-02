import {React, useEffect, useState, ProductNotCount, OfferProduct,} from '../../../Global/Import/Imports';
import BtnAddToCart from '../components/BtnAddToCart';
import ProductDetailGlobal from '../components/ProductDetailGlobal';
import AttributeItems from './components/AttributeItems';
export default function ProductAttribute ({Data}) {
    const [ActiveAttribute,setActiveAttribute] = useState(Data.attributes[0]);
    useEffect(()=>{
        setActiveAttribute(Data.attributes[0])
    },[Data.attributes[0].id]);
    return (
        <React.Fragment>
            <ProductDetailGlobal Data={Data}>
                <AttributeItems Data={Data}
                                ActiveAttribute={ActiveAttribute}
                                setActiveAttribute={setActiveAttribute}/>
                {ActiveAttribute.status != "2"?<ProductNotCount/>:null}
                <OfferProduct offer={ActiveAttribute.offer}/>
            </ProductDetailGlobal>
            {ActiveAttribute.status == "2"? <BtnAddToCart product={ActiveAttribute}/> :null}
        </React.Fragment>
    );
}
