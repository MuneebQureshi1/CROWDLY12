import React ,{ useState } from 'react'
import {View,TextInput,FlatList,Text} from 'react-native'
import firebase from 'firebase'
require('firebase/firestore')

import {Button,Input} from 'react-native-elements'


export default function Search() {

    const [users , setUsers] =useState([])

    const fetchUsers=(search)=>{
        firebase.firestore()
        .collection('users')
        .where('name','>=',search)
        .get()
        .then((snapshot)=>{
            let users = snapshot.docs.map(doc=>{
                const data = doc.data();
                const id = doc.id;
                return{id , ...data}
            });
            setUsers(users);
        })
    }
    return (
        <View>
            <Input 
            placeholder="Search"
            onChangeText ={(search)=>fetchUsers(search)}/>
            <FlatList 
                numColumns={1}
                horizontal={false}
                data={users}
                renderItem={({item})=>(
                    <Text>{item.name}</Text>
                )}
            />
        </View>
    )
}