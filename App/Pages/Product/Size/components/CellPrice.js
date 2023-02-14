import {collect,useEffect,useState ,React, Text, View, TouchableOpacity, ActivityIndicator} from '../../../../Global/Import/Imports';
import {ProductSizeStyles} from './ProductSizeStyle';

export default function CellPrice (props) {
    const [Loading,setLoading] = useState(false);
    const {type,ActiveSize,setActiveSize} = props;
    const handleClick = () => {
        setLoading(true);
        setTimeout(() => {
            setActiveSize(item)
        },10)
    };
    useEffect(()=>{
        setTimeout(() => {
            setLoading(false)
        },10)
    },[Loading]);
    let item;
    switch (type) {
        case 'two':
            item = collect(props.sizes).where('length',props.ItemLength.length).where('diameter',props.ItemDiameter.diameter).first()??null;
            break
        case 'three':
            item = collect(props.sizes).where('diameter',props.Item.diameter).where('width',props.Item.width).where('length',props.ItemLength.length).where('height',null).first()??null;
            break
        case 'four':
            item = collect(props.sizes).where('diameter',props.Item.diameter).where('width',props.Item.width).where('length',props.ItemLength.length).where('height',props.Item.height).first()??null;
            break
    }
    return (
        <React.Fragment>
            {
                Loading?
                    <View style={ProductSizeStyles.ItemPrice}>
                        <Text style={[ProductSizeStyles.CellPrice]}>
                            {' '}
                            <ActivityIndicator size="small" color="#155e75"/>
                        </Text>
                    </View>:
                item ?
                    <TouchableOpacity
                        activeOpacity={.85}
                        style={[ProductSizeStyles.ItemPrice,ActiveSize != null && ActiveSize.id == item.id?ProductSizeStyles.ActiveItem:{}]}
                        onPress={() => handleClick() }>
                        <Text style={[ProductSizeStyles.CellPrice,{fontSize:15},ActiveSize != null && ActiveSize.id == item.id?{color:'#fff'}:{color:'#000'}]}>
                            {item.price}
                        </Text>
                    </TouchableOpacity>
                    :
                    <View style={ProductSizeStyles.ItemPrice}>
                        <Text style={[ProductSizeStyles.CellPrice]}>
                            {'___'}
                        </Text>
                    </View>
            }
        </React.Fragment>
    );
}
