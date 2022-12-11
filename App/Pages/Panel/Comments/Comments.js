import {
    React,useEffect,useState,FlatList, RefreshControl, View,ListIsEmpty,
    NavigationSetOptionsPanel,CommentItems,CommentPanelGetComment,
} from '../../../Global/Import/Imports';
export default function Comments ({navigation,route}) {
    const [Loading,setLoading] = useState(true);
    const [IsEmpty,setIsEmpty] = useState(false);
    const [Comments,setComments] = useState(null);
    useEffect(()=>{
        CommentPanelGetComment (setComments,setLoading,setIsEmpty)
        NavigationSetOptionsPanel(navigation,'نظرات من')
    },[]);
    return (
        <React.Fragment>
            <ListIsEmpty IsEmpty={IsEmpty} Loading={Loading}/>
            <View style={{display:Loading || IsEmpty?'none':'flex',flex:1,justifyContent:'center',backgroundColor:'#e5e7eb'}}>
                <FlatList
                    refreshControl={
                        <RefreshControl
                            refreshing={false}
                            onRefresh={() =>  CommentPanelGetComment (setComments,setLoading,setIsEmpty)}
                        />
                    }
                    data={Comments}
                    renderItem={({item}) => <CommentItems comment={item} /> }
                    keyExtractor={item => item.id}
                    contentContainerStyle={{padding:10}}
                    showsVerticalScrollIndicator={false}
                />
            </View>

        </React.Fragment>
    );
}
