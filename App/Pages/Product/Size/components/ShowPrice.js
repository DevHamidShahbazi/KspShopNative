import {React,collect} from '../../../../Global/Import/Imports';

export function ShowPriceTableFour({sizes,Item,ItemLength}) {
    const price = () => collect(sizes).where('diameter',Item.diameter).where('width',Item.width).where('length',ItemLength.length).where('height',Item.height).first();
    return price()?price().price:'___';
}

export function ShowPriceTableThree({sizes,Item,ItemLength}) {
    const price = () => collect(sizes).where('diameter',Item.diameter).where('width',Item.width).where('length',ItemLength.length).where('height',null).first();
    return price()?price().price:'___';
}

export function ShowPriceTableTwo({sizes,ItemLength,ItemDiameter}) {
    const price = () => collect(sizes).where('length',ItemLength.length).where('diameter',ItemDiameter.diameter).first();
    return price()?price().price:'___';
}
