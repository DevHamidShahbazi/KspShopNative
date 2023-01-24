import React from 'react';
export function handleOnPress (Auth,User,navigation) {
    if (Auth != null){
        if (Auth==true){
            if (User.verify == '1'){
                return navigation.navigate('Map')
            }else {
                return navigation.navigate('Panel')
            }
        }else {
            return navigation.navigate('Panel')
        }
    }
}
