import React from 'react';
import {View , StyleSheet} from 'react-native';
import {Button} from 'react-native-elements'
 
export default function LandingScreen({navigation}){
    return(
        <View style ={{flex:1,justifyContent:'center'}}>
        <Button
            title ="Register"
            onPress={()=>navigation.navigate("Register")}
        />

        <Button
            title ="Login"
            onPress={()=>navigation.navigate("Login")}
        />

        </View>
    )
}
const styles = StyleSheet.create({
    Button:{
        marginTop:10,
        width:300,
        alignSelf:"center"
    }
})