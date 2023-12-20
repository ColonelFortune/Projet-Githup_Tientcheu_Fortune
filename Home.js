import React from 'react';
import {StyleSheet , Text , View} from 'react-native'

const Home = ()=>{
    return(
        <View style = {style.container}>
            <Text style ={StyleSheet.title}>Bienvenue sur mon Application !</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        JustifyContent:'center',
    },
    title:{
        fontSize:24,
        fontWeight:'bold'
    },
});

export default Home;