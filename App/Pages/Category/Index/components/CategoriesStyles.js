import {Dimensions, StyleSheet} from 'react-native';

const ScreenWidth = Dimensions.get('window').width;
export const CategoriesStyles = StyleSheet.create({
    containerCategoryItem: {
        marginBottom: '2%',
        paddingTop: 5,
        paddingBottom: 5,
    },
    rowCategoryItem: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingRight: 5,
        paddingLeft: 5,
    },
    ShowMoreCategoryItem: {
        alignItems:'flex-end',
        flexDirection:'row',
        paddingRight:10,
        paddingLeft:10
    },
    ItemCategoryItem:{
        backgroundColor: '#fff',
        marginTop:10,
        marginBottom:10,
        marginRight:5,
        marginLeft:5,
        padding:5,
        borderRadius:5,
        elevation: 5
    },
    TextCategoryItem: {
        color:'#155e75',
        fontFamily:'Vazir-Bold',
        fontSize:14
    },
    container: {
        height: 60,
        backgroundColor: '#213854',
        elevation: 0,
        top: 0,
        padding: 10,
    },
    box: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 3,
        flexDirection: 'row',
    },
    input: {
        flex: 15,
        justifyContent: 'center',
        alignItems: 'flex-end',
        padding: 5,
    },
    text: {
        fontFamily: 'Vazir',
        color: 'rgba(33,56,84,0.65)',
        fontSize: 15,
    },
    btnSearch: {
        flex: 2, padding: 5, justifyContent: 'center',
        alignItems: 'center',
        // borderTopRightRadius:7,
        // borderBottomRightRadius:7,
    },
});
