import {
    React,ScrollView,
    useEffect, useState, NavigationSetOptionsAbout,
    TextRegular, TextBold, View, LoadingScreen,} from '../../Global/Import/Imports';
import getData from './components/getData';
import {Image} from 'react-native';
export default function About ({navigation,route}) {
    // const [Render,setRender] = useState(1);
    // const [Loading,setLoading] = useState(true);
    const [Body,setBody] = useState(null);
    useEffect(()=>{
        NavigationSetOptionsAbout(navigation)
        // getData(setBody,setLoading,setRender)
    },[/*Render*/]);

    return (
        <React.Fragment>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flex:1,padding:6,backgroundColor:'#fff'}}>
                    <TextBold style={{top:0,textAlign:'center',fontSize:20}} >شرکت کا اس پی</TextBold>
                    <Text>
                        سپاس خدایی را که به انسان اراده و تفکر کردن آموخت تا در مقابل دشواری های پیش آمد در جلوی راهش به اندیشیدن بپردازد تا از عالی به متعالی برسد
                    </Text>

                    <Text style={{color:'red'}}>
                        شرکت کا اس پی با تکیه بر بنیاددانش (knowledge-based) محصولات (product) فولادی (Steel) خود را با بهترین کیفیت در اختیار قالبسازان عزیز کشور ارائه می کند
                    </Text>
                    <View style={{marginVertical:'2%'}}>
                        <TextBold style={{textAlign:'center'}}>
                            شماره های تماس
                        </TextBold>
                        <Text>09124949028</Text>
                        <Text>021-46119400</Text>
                        <Text>021-46119500</Text>
                    </View>

                    <View style={{alignItems:'center'}}>
                        <Image style={{width: '80%', height: 200}} source={{uri: 'https://ksp-shop.com/Upload/image/logo/.png'}}/>
                    </View>
                    <Text>
                        پران قالب و پین تثبیت ، جزء پرفروش ترین محصول قالبسازی در ایران می باشد ، که مجموعه کا اس پی با در نظر گرفتن خلاء ها و کاستی های بازار داخل بر این برآمد با توجه به فراهم نمودن زیرساخت مناسب برای تولید حداکثری، پران و پین را به صورت انبوه و با قیمت رقابتی به بازار کشور ارائه نماید
                    </Text>
                    <Text>
                        در این مورد با توکل به خدا در راه پبشبرد اهداف صنعتی کشور در نظر داریم که قطعات تولیدی مجموعه را با کیفیت در سطح بین المللی عرضه کنیم و همچنین با تمام توان برای اضافه کردن محصولات دیگر در حیطه قالب سازی می کوشیم تا خدمت رسان مصرف کنندگان کشور باشیم
                    </Text>
                    <Text>
                        ما و همکارانمان در گروه صنعتی کا اس پی با استفاده از دانش به روز مهندسی و دانشگاهی ، همراه با تجربه ای 27 ساله به لطف خداوند دو محصول وارداتی (پران تیغه ای - سنبه برش) مهندسی معکوس شده و در بازار این صنعت با تولید انبوه عرضه شده و با مقبولیت و محبوبیت بسیاری همراه بوده است
                    </Text>
                </View>
            </ScrollView>
        </React.Fragment>
    );
}
const Text = (props) => {
    const {children,style} = props;
     return (
        <React.Fragment>
            <TextRegular style={[style,{marginTop:'3%',textAlign:'center',fontSize:14}]}>
                {children}
            </TextRegular>
        </React.Fragment>
     );
};
