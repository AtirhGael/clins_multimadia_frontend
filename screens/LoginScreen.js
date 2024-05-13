import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'

const LoginScreen = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const navigation = useNavigation()
    return (
        <SafeAreaView style={{
            flex: 1, backgroundColor: 'white', paddingHorizontal:10
        }}>
            <Text style={{ fontSize: 40, paddingTop: 10, fontWeight: '700', textDecorationStyle: 'solid',textAlign:'left' }}>Lets sign you in</Text>
            <Text style={{ fontWeight: '400',  fontSize:18 }}>welcome back,</Text>
            <Text style={{ fontWeight: '400',  fontSize:18 }}> you have been missed</Text>
            <KeyboardAvoidingView>
               
                <View style={{marginTop:70}}>
                    <View style={{borderRadius:10,marginTop:30,padding:5,borderWidth:0.5,}}>
                   
                    <TextInput
                    style={{
                        color:'gray',marginVertical:10,width:300
                    }}
                    placeholder='Email'
                    placeholderTextColor={'#000'}
                    />
                    </View>
                </View>
                <View style={{marginTop:10}}>
                    <View style={{borderRadius:10,marginTop:10,padding:5,borderWidth:0.5,}}>
                    <TextInput
                    value={password}
                    placeholderTextColor={'#000'}
                    style={{
                        color:'gray',marginVertical:10,width:300
                    }}
                    placeholder='Password'
                    />
                    </View>
                </View>
                <Text style={{paddingTop:15,textAlign:'right',color:'#000',fontSize:15}}>Forgot password?</Text>
                <Pressable onPress={()=>navigation.navigate('register')} style={{alignItems:'center',justifyContent:'center',width:'100%',backgroundColor:'#000',marginTop:40,height:50,borderRadius:10}}>
                    <Text style={{color:'#FFF',fontSize:18,fontWeight:'700'}}>Sign In</Text>
                </Pressable>
            </KeyboardAvoidingView>
            <Text onPress={()=>navigation.navigate('register')} style={{textAlign:'center',position:'absolute',bottom:10,width:'100%',fontSize:17,fontWeight:'400'}}>Already have an Account? <Text style={{fontWeight:'800'}}>Register</Text></Text>
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})