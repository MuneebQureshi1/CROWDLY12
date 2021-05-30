import React from 'react'
import {StyleSheet,View,Text,Image,FlatList} from 'react-native'

import {connect} from 'react-redux';

function profile(props) {





    const {currentUser,posts}= props;
    console.log({currentUser,posts})
    return (
        <View style={styles.container}>
            
        <View style ={styles.infoContainer}>

            <Text>{currentUser.name}</Text>
            <Text>{currentUser.email}</Text>

        </View>
            
        <View style = {styles.containerGallery}>


        </View>
            <FlatList
                numColumns={3}
                horizontal={false}
                data={posts}
                renderItem={({item})=>(
                      
                    <View style ={styles.imageContainer}>
                        <Image
                            style={styles.image}
                            source={{uri: item.DownloadURL}}
                    />
                    </View>
                    
                )}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:40
    },
    infoContainer:{
        margin:20
    },
    containerGallery:{
        flex:1
    },
    image:{
        flex:1,
        aspectRatio: 1/1
    },
    imageContainer:{
        flex:1/3
    }
})

const mapStateToProps =(store)=>({
    currentUser:store.userState.currentUser,
    posts:store.userState.post
})

export default connect(mapStateToProps,null)(profile);