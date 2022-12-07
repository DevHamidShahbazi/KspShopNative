import React from 'react';
import {View, Text, Image} from 'react-native';
import GlobalStyles from '../../../../Global/Styles/GlobalStyles';
import {TextBold,TextRegular} from '../../../../Global/Components/Components';
import CommentsStyles from './CommentsStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import collect from "collect.js";


export const CommentPanelGetComment = (setComments,setLoading,setIsEmpty) => {
    AsyncStorage.getItem('api_token',(error, result) => {
        if (result){
            axios.post('v_1_0/panel/comments', {},{
                headers:{
                    'api_token':result
                }
            })
                .then(function (response) {
                    const {data} = response;
                    if (data.status == 'success'){
                        if (collect(data.comments).first()){
                            setIsEmpty(false)
                        }else {
                            setIsEmpty(true)
                        }
                        setLoading(false)
                        setComments(data.comments)
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    })
};


export function CommentItems ({comment}) {
    return (
        <React.Fragment>
            <View style={[GlobalStyles.Card,CommentsStyles.Container,{padding:8,marginTop:"2%",borderRadius:5}]}>
                <View>
                    <TextBold style={{textAlign:'center'}}>
                        {comment.created_at}
                    </TextBold>
                </View>
                <View style={{justifyContent:'center',flexDirection:'row',marginBottom:5,marginTop:5,borderTopWidth:1,borderTopColor:'rgba(0,0,0,0.45)'}}>
                    <View style={{flex:8,justifyContent:'center',alignItems:'flex-end'}}>
                        <TextRegular>
                            {comment.comment}
                        </TextRegular>
                    </View>
                    <View style={{flex:2,justifyContent:'center'}}>
                        <Image  style={{width:80, height: 80}} source={{uri:comment.product.DefImage}}/>
                    </View>
                </View>
            </View>
        </React.Fragment>
    );
}
