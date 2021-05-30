import React,{Component } from 'react';
import {View,StyleSheet} from 'react-native';
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

  firebase.initializeApp(firebaseConfig);




export default class Register extends Component {
    constructor(props){
        super(props);
        this.state=({
            email:'',
            password:'',
            name:'',
        })
    }


    
OnSignUp=(name,email,password)=>{
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then((results)=>{
        firebase.firestore().collection("users")
        .doc(firebase.auth().currentUser.uid)
        .set({
            name,
            email,
            password
        })
        console.log(results)
    })
    .catch((error)=>{
        console.log(error)
    })
}

    render() {
        return (
            <View style ={{flex:1,justifyContent:'center'}}>

            <Input
                placeholder ="name"
                onChangeText={(name)=>this.setState({name})}
            />

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
                onPress={()=>this.OnSignUp(this.state.name,this.state.email,this.state.password)}
                title="Sign up"
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


