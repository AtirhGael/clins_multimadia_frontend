import { KeyboardAvoidingView, TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'

const RegisterScreen = () => {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [phone, setphone] = useState('')
    const [password, setpassword] = useState('')
    const navigation = useNavigation()

    const register = () => {
        // console.log(name,email,password);
        const headers = {"Accept":"application/json, text/plain, /","Content-Type": "multipart/form-data"};
        axios.post("https://192.168.101.26:8000/register", {headers}, { name, email, password }).then(res => {
            console.log(res);
        }).catch(error => {
            console.log(error);
        })

    }
    return (
        <SafeAreaView style={{
            flex: 1, backgroundColor: 'white', paddingHorizontal: 10
        }}>
            <Text style={{ fontSize: 40, paddingTop: 10, fontWeight: '700', textDecorationStyle: 'solid', textAlign: 'left' }}>Lets Register</Text>
            <Text style={{ fontSize: 40, fontWeight: '700', textDecorationStyle: 'solid', textAlign: 'left' }}>Account</Text>
            <Text style={{ fontWeight: '400', fontSize: 18 }}>Hello user,You have a greatful</Text>
            <Text style={{ fontWeight: '400', fontSize: 18 }}>journey waiting for you</Text>
            <View>

                <View style={{ marginTop: 10 }}>
                    <View style={{ borderRadius: 10, marginTop: 30, padding: 5, borderWidth: 0.5, }}>

                        <TextInput
                            value={name}
                            onChangeText={(text) => setname(text)}
                            style={{
                                color: 'gray', marginVertical: 10, width: 300
                            }}
                            placeholder='Name'
                            placeholderTextColor={'#000'}
                        />
                    </View>
                </View>
                <View style={{ marginTop: 10 }}>
                    <View style={{ borderRadius: 10, marginTop: 10, padding: 5, borderWidth: 0.5, }}>
                        <TextInput
                            value={email}
                            onChangeText={(text) => setemail(text)}
                            placeholderTextColor={'#000'}
                            style={{
                                color: 'gray', marginVertical: 10, width: 300
                            }}
                            placeholder='Email'
                        />
                    </View>
                </View>
                {/* <View style={{marginTop:10}}>
                <View style={{borderRadius:10,marginTop:10,padding:5,borderWidth:0.5,}}>
                <TextInput
                value={password}
                onChangeText={(text)=>setpassword(text)}
                placeholderTextColor={'#000'}
                style={{
                    color:'gray',marginVertical:10,width:300
                }}
                placeholder='Phone'
                />
                </View>
            </View> */}
                <View style={{ marginTop: 10 }}>
                    <View style={{ borderRadius: 10, marginTop: 10, padding: 5, borderWidth: 0.5, }}>
                        <TextInput
                            value={password}
                            onChangeText={(text) => setpassword(text)}
                            placeholderTextColor={'#000'}
                            style={{
                                color: 'gray', marginVertical: 10, width: 300
                            }}
                            placeholder='Password'
                        />
                    </View>
                </View>
                <TouchableOpacity onPress={register} style={{ alignItems: 'center', justifyContent: 'center', width: '100%', backgroundColor: '#000', marginTop: 40, height: 50, borderRadius: 10 }}>
                    <Text style={{ color: '#FFF', fontSize: 18, fontWeight: '700' }}>Register</Text>
                </TouchableOpacity>
            </View>
            <Text onPress={() => navigation.goBack()} style={{ textAlign: 'center', position: 'absolute', bottom: 10, width: '100%', fontSize: 17, fontWeight: '400' }}>Dont have an Account? <Text style={{ fontWeight: '800' }}>Login</Text></Text>
        </SafeAreaView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({})