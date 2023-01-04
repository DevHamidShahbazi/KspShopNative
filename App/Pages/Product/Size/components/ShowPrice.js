import {React,collect} from '../../../../Global/Import/Imports';
function ShowPriceTableTwo  ({sizes,ItemLength,ItemDiameter}) {



    const price = () => collect(sizes).where('length',ItemLength.length).where('diameter',ItemDiameter.diameter).first();
    console.log({
        sizes:sizes,
        ItemLength:ItemLength,
        ItemDiameter:ItemDiameter,
        price:price,
    })
    // return price?price.price:'___';
}
export {
    ShowPriceTableTwo
}
