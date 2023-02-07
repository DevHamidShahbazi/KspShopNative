import {React,RFValue,TouchableOpacity, Text, View,ScrollView, Alert, Icon,MaterialCommunityIcons,ProfileStyles,GlobalStyles, CustomBadge,LogOut,PanelStyles} from '../../../../Global/Import/Imports';
export function ProfileHeader ({User}) {
    return (
        <React.Fragment>
            <View style={PanelStyles.Container_Header_Panel}>
                <View style={PanelStyles.Header_Panel}>
                    <View style={[PanelStyles.Box_Header_Panel,GlobalStyles.Shadow_lg]}>
                        <Text style={PanelStyles.Text_Box_Header_Panel}>
                            {User.name}
                        </Text>
                        <Text style={{fontFamily:'iranyekanregular(fanum)',fontSize:RFValue(15),color:User.phone == null?'red':'#000',marginTop:5}}>
                            {User.phone == null? 'بدون ثبت شماره موبایل نمی توانید خرید کنید':User.phone }
                        </Text>
                    </View>
                </View>
            </View>

        </React.Fragment>
    );
}

export function ProfileBody ({User,navigation,setUser,setAuth}) {
    return (
        <React.Fragment>
            <View style={ProfileStyles.Body}>
                <View style={ProfileStyles.Items}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <ProfileItemBody to={'EditProfile'} navigation={navigation} name="ویرایش اطلاعات" icon="card-account-details" badge={User.phone == null?true:false}  style={{borderTopColor:'rgba(0,0,0,0)'}} />
                        <ProfileItemBody to={'Orders'} navigation={navigation} name="سفارش ها" icon="clipboard-text-multiple" />
                        <ProfileItemBody to={'PurchasedProducts'} navigation={navigation} name="محصولات خریداری شده" icon="credit-card-multiple" />
                        <ProfileItemBody to={'Comments'} navigation={navigation} name="نظرات من" icon="comment-text-multiple" />
                        <ProfileItemBody to={'ResetPassword'} navigation={navigation} name="تغییر رمز عبور" icon="shield-lock" />
                        <ProfileItemBody name="خروج از حساب کاربری" icon="power" setUser={setUser} setAuth={setAuth} style={{borderBottomColor:'rgba(0,0,0,0)'}} />
                    </ScrollView>
                </View>
            </View>
        </React.Fragment>
    );
}

export function ProfileItemBody ({name,icon,style,badge,navigation,to,setAuth,setUser}) {

    const AlertLogOut = () => {
        Alert.alert(
            "میخوای از حساب کاربری خارج بشی؟؟",
            " ",
            [
                {
                    text: "نه بیخیال",
                    style: {
                        fontFamily:'Vazir'
                    }
                },
                {
                    text: "بله",
                    onPress: () => LogOut(setAuth,setUser)
                }
            ],
        );
    }
    return (
        <React.Fragment>
            <TouchableOpacity onPress={() => to?navigation.navigate(to):AlertLogOut() } activeOpacity={.7} >
                <View style={[ProfileStyles.Item_Body,style]}>
                    <Icon name="angle-left" size={25} color="rgba(0,0,0,0.70)" />
                    <View style={ProfileStyles.Container_Item_Body}>
                        {badge?<CustomBadge/>:null}
                        <Text style={ProfileStyles.Name_Item_Body}>{name}</Text>
                        <MaterialCommunityIcons name={icon} size={25} color="rgba(0,0,0,0.70)" />
                    </View>
                </View>
            </TouchableOpacity>
        </React.Fragment>
    );
}
