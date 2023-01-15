import {React,StyleSheet, Text, View} from '../Import/Imports';
export function Error ({message,type = null}) {
    const StylesError = StyleSheet.create({
        MainError:{
            width:'100%',
            marginTop:10,
            marginBottom:10,
        },
        ContainerError: {
            display:'flex',
            justifyContent: "center",
            alignItems: "center",
            padding: "2%",
            backgroundColor:'rgba(255,61,0,0.15)',
            marginRight:5,
            marginLeft:5,
            borderRadius:5,
            borderWidth:1,
            borderColor:'red'
        },
        TextError : {
            width:'100%',
            fontFamily: 'Vazir',
            fontSize: 14,
            textAlign: 'center',
            color: 'red'
        },
    });
    if (type=='single'){
        if (message.length != 0){
            return (
                <View style={[StylesError.MainError]}>
                    <View style={StylesError.ContainerError}>
                        <Text style={StylesError.TextError}>
                            {message}
                        </Text>
                    </View>
                </View>
            )
        }else {
            return null;
        }
    }else {
        if (message != undefined){
            const list =
                Object.keys(message).map((error, index) => (
                    <Text  key={index} style={StylesError.TextError}>
                        {" "+message[error][0]}
                    </Text>
                ));
            return (
                <View style={[StylesError.MainError,{ display : Object.keys(message).length == 0 ? 'none' : 'flex'  }]}>
                    <View style={StylesError.ContainerError}>
                        {list}
                    </View>
                </View>
            )
        }else {
            return null
        }
    }

}

export function Success (props) {

    const StylesSuccess = StyleSheet.create({
        MainSuccess:{
            width:'100%',
            marginTop:10,
            marginBottom:10,
        },
        ContainerSuccess: {
            display:'flex',
            justifyContent: "center",
            alignItems: "center",
            padding: "2%",
            backgroundColor:'rgba(46,125,50,0.2)',
            marginRight:5,
            marginLeft:5,
            borderRadius:5,
            borderWidth:1,
            borderColor:'green'
        },
        TextSuccess : {
            width:'100%',
            fontFamily: 'Vazir',
            fontSize: 14,
            textAlign: 'center',
            color: '#007f10'
        },
    });

    return (
        <View style={[StylesSuccess.MainSuccess,{ display : props.message =='' ? 'none' : 'flex'  }]}>
            <View style={StylesSuccess.ContainerSuccess}>
                <Text   style={StylesSuccess.TextSuccess}>
                    {props.message}
                </Text>
            </View>
        </View>
    )
}


