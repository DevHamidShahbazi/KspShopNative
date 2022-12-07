import React from 'react';
import {StyleSheet} from 'react-native';

export const CompanyStyles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#e5e7eb',
        padding: 8,
    },
    CompanyHeader: {
        backgroundColor: '#213854',
        padding: 10,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    },

    AlertStatus: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '3%',
        borderWidth: 1,
        borderColor: '#065f46',
        marginBottom: '1%',
        padding: 5,
        borderRadius: 5,
    },
    AlertStatusText: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4,
        fontFamily: 'Vazir-Bold',
        color: '#065f46',
    },
    ChooseImage:{

        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '2%',
        backgroundColor:'#eee',
        borderRadius: 8,
        padding : 5,
        borderColor : '#000',
        borderWidth : .8,
    }
});
