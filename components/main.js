import React, { Component } from 'react'
import {View,Text} from 'react-native'

import FeedScreen from './Main/feed';
import AddScreen from './Main/add';
import ProfileScreen from './Main/profile';
import SearchScreen from './Main/Search';



import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import firebase from 'firebase'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchUser,fetchUserPosts} from '../redux/actions/index'
import { event } from 'react-native-reanimated';

const Tab = createMaterialBottomTabNavigator();

const EmptyScreen=()=>{
  return(null)
}

export class main extends Component {
    componentDidMount(){
         this.props.fetchUser();
         this.props.fetchUserPosts();
    }

    render() {
        return (
            <Tab.Navigator initialRouteName="Feed" labeled={false}>
              <Tab.Screen name="Feed" component={FeedScreen} 
  
                  options={{
                      tabBarIcon:({color,size})=>(
                        <MaterialCommunityIcons name ="home" size={23} color={color}/>
                      )    
                  }} />

            <Tab.Screen name="Search" component={SearchScreen} 
  
          options={{
           tabBarIcon:({color,size})=>(
           <MaterialCommunityIcons name ="magnify" size={23} color={color}/>
            )    
              }} />

              <Tab.Screen name="AddContainer" component={EmptyScreen} 

                listeners={({navigation})=>
                ({
                  tabPress:event=>{
                  event.preventDefault();
                  navigation.navigate("Add")
                     }
                  })
                }

                  options={{
                      tabBarIcon:({color,size})=>(
                        <MaterialCommunityIcons name ="plus-box" size={23} color={color}/>
                      )    
                  }} />

              <Tab.Screen name="Profile" component={ProfileScreen} 
                  options={{
                      tabBarIcon:({color,size})=>(
                        <MaterialCommunityIcons name ="account-circle" size={23} color={color}/>
                      )    
                  }} />

                  
              
            </Tab.Navigator>
          );
    }
}

const mapStateToProps = (store)=>({
    currentUser : store.userState.currentUser
})

const mapDispatchProps =(Dispatch)=>bindActionCreators({fetchUser,fetchUserPosts},Dispatch);

export default connect(mapStateToProps , mapDispatchProps)(main);
