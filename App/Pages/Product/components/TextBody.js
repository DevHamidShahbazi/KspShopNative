import {React,TextBold,TextRegular,View} from '../../../Global/Import/Imports';
const TextBody = ({check,body}) => {
     return (
        <React.Fragment>
            {
                check != "" && body != "" ?
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <TextBold style={{fontSize:24,textAlign:'center'}}>توضیحات</TextBold>
                        <TextRegular style={{textAlign:'center'}}>
                            {check}
                        </TextRegular>
                        <TextRegular style={{textAlign:'center',marginTop:10}}>
                            {body}
                        </TextRegular>
                    </View>
                    :null
            }
        </React.Fragment>
     );
};
export default TextBody;
