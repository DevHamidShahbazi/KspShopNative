import {React,View,TextBold,TextRegular,RFValue} from '../../../../Global/Import/Imports';
export default function TopTable ({size,TypeSize}) {

    const Check = (item,name) => {
        if (item){
            return (
                <React.Fragment>
                    <TextRegular style={{fontSize:RFValue(17)}}>
                        {item}
                        <TextBold>
                            : { name }
                        </TextBold>
                    </TextRegular>
                </React.Fragment>
            )
        }
    };

    return (
        <React.Fragment>
            <View style={{flex: 1}}>
                { TypeSize === 'two' ? Check(size.diameterName,'D') : Check(size.diameterName,'D1') }
                { TypeSize === 'four' || TypeSize === 'three' ? Check(size.widthName,'D2') :'' }
                { TypeSize === 'four' ? Check(size.heightName,'D3') : '' }
                { Check(size.lengthName,'L') }
                <TextBold style={{fontSize:RFValue(17)}}>
                    <TextRegular>
                        {' قیمت : '}
                    </TextRegular>
                    تومان
                </TextBold>
            </View>
        </React.Fragment>
    );
}
