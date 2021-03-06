import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import LandingScreen from './components/auth/Landing'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import MainScreen from './components/main'
import AddScreen from './components/Main/add';
import SaveScreen from './components/Main/save'


import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import rootReducer from './redux/reducers'
import thunk from 'redux-thunk'

import firebase from 'firebase'

const store = createStore(rootReducer,applyMiddleware(thunk))

  const Stack = createStackNavigator();

export class App extends Component {

constructor(props){
  super(props);
  this.state={
    loaded:false,
  }
}

componentDidMount(){
  firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
      this.setState({
        loggedIn:false,
        loaded:true,
      })
    }
    else{
      this.setState({
        loggedIn:true,
        loaded:true,
      })
    }
  })

}


  render() {
    const {loggedIn,loaded}=this.state;

    if(!loaded){
      return(
        <View style ={{flex:1,justifyContent:'center'}}>

          <Text>
            Loading
          </Text>

        </View>
      )
    }

    if(!loggedIn){
      return(

        <NavigationContainer>

      <Stack.Navigator initialRouteName = "Landing">

        <Stack.Screen name = "Landing" component ={LandingScreen} options={{headerShown:false}}/>
        <Stack.Screen name = "Register" component ={Register} options={{headerShown:false}}/>
        <Stack.Screen name = "Login" component ={Login} options={{headerShown:false}}/>

      </Stack.Navigator>

      </NavigationContainer>

      )
    }


    return (
      <Provider store={store}>

      <NavigationContainer>
      
      <Stack.Navigator initialRouteName = "main">

        <Stack.Screen name = "main" component ={MainScreen} options={{headerShown:false}}/>
        <Stack.Screen name = "Add" component ={AddScreen} navigation = {this.props.navigation}/>
        <Stack.Screen name = "Save" component ={SaveScreen} navigation = {this.props.navigation}/>

      </Stack.Navigator>

      </NavigationContainer>

      </Provider>
      
    );
  }
}

export default App



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
