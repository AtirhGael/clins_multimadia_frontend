import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Entypo } from '@expo/vector-icons';
import { Colors } from './constants/colors';
import { MaterialIcons } from '@expo/vector-icons';
// import { Avatar } from 'react-native-paper';
import Carousel from 'react-native-reanimated-carousel';
import { dresses, shop, shop2 } from './constants/images/index.';

const Home = () => {
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    const sliderArray = [
        {
            image:shop,
            text:'Welcome to Fast Last Lane/ Skip>>>'
        },
        {
            image:shop2,
            text:'shop With ease '
        },
        {
            image:dresses,
            text:'Skip the qu'
        },
    ]
  return (
    <SafeAreaView style={{paddingHorizontal:15,paddingTop:5}}>
      <View style={styles.headText}>
        <View  style={{
            flexDirection:"row",
            alignItems:'center',
            minWidth:'50%',
            justifyContent:'space-between'
        
        }}>
            <Entypo name="location-pin" size={24} color={Colors.redBg}/>
            <Text>Douala,Cameroon</Text>
            <MaterialIcons name="keyboard-arrow-down" size={24} color={Colors.redBg} />
        </View>
        {/* <Avatar.Image size={45}/> */}
      </View>
      <View style={styles.headText2}>
        <View style={{
            maxWidth:'65%'
        }}>
            <Text style={{fontSize:30,fontWeight:'700',color:Colors.mainText}}>Shop from brands you love</Text>
        </View>
        {/* <Avatar.Icon name='bell' size={40}/> */}
      </View>
      {/* <View style={{gap:10,top:-80}}>
                <Carousel
                    width={width}
                    height={height*0.25 }
                    autoPlay={true}
                    data={sliderArray}
                    scrollAnimationDuration={5000}
                    renderItem={({ item }) => (
                        <View
                            style={{
                                flex: 1,
                                borderWidth: 0.35,
                                justifyContent: 'center',
                                borderRadius:10,
                                margin:8,
                                width:width*0.93
                            }}
                        >
                            <Image source={item.image} style={{width:'100%',height:'100%',borderRadius:10,}}/>
                            <View style={{backgroundColor:'#000000a0',position:'absolute',width:'100%',height:'100%',borderRadius:10,alignItems:'center',justifyContent:'center'}} >
                                <Text style={{ textAlign: 'center', fontSize: 25,position:'absolute',color:'#FFF', }}>
                                    {item.text}
                                </Text>
                            </View>
                        </View>
                    )}
                />
            </View> */}
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    headText:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:15
    },
    headText2:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:15,
        alignItems:'center'
    }
})