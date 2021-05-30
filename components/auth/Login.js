import React,{Component } from 'react';
import {View,Text,StyleSheet} from 'react-native';
import firebase from 'firebase'

import {Button,Input} from 'react-native-elements'

const firebaseConfig = {
    apiKey: "AIzaSyDeYiZWAjUy0PSVcYuhjjy2SEbv4A2PDVE",
    authDomain: "myfyp-dev.firebaseapp.com",
    projectId: "myfyp-dev",
    storageBucket: "myfyp-dev.appspot.com",
    messagingSenderId: "677333673888",
    appId: "1:677333673888:web:60b03c339e723db3c766c5",
    measurementId: "G-V3M06HTHMK"
  };
 




export default class Login extends Component {
    constructor(props){
        super(props);
        this.state=({
            email:'',
            password:''
        })
    }


    
OnLogin=(email,password)=>{

    try{
        firebase.auth().signInWithEmailAndPassword(email,password)
    }
    catch(err){
        console.log(error.toString())
    }
}

    render() {
        return (
            <View style ={{flex:1,justifyContent:'center'}}>

            <Input
                placeholder ="email"
                onChangeText={(email)=>this.setState({email})}
            />

            <Input
                placeholder ="password"
                secureTextEntry={true}
                onChangeText={(password)=>this.setState({password})}
            />

            <Button
                onPress={()=>this.OnLogin(this.state.email,this.state.password)}
                title="Login"
            />
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Button:{
        marginTop:10,
        width:300,
        alignSelf:"center"
    }
})

