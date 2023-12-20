import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
//import { StyleSheet, Text, View, Image, ScrollView, TextInput } from 'react-native-web';
import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Progress from 'react-native-progress';
;
const prec = require('./assets/images/prec.png')
const lock = require('./assets/images/lock.png')
const orange = require('./assets/images/orange.png')
const coeur = require('./assets/images/coeur.png')
const raisin = require('./assets/images/raisin.png')
const pre = require('./assets/images/pre.png')
const share = require('./assets/images/share.png')
const menu = require('./assets/images/menu.png')
const delet = require('./assets/images/delete.png')
const straw = require('./assets/images/straw.png')
const apple = require('./assets/images/apple.png')
const basket = require('./assets/images/basket.jpg')



export default function App() {

    const [text, setText] = useState('');

    return (
        <View style={styles.body}>
            <View style={styles.app}>

                <View style={styles.sousHeader}>
                    <View>
                        <Image source={basket} style={styles.basket} />
                        <View style={styles.lo}></View>
                    </View>

                </View>

                <View>
                    <Text style={styles.titre3}>Order Groceries and Get delivered in few minutes </Text>
                  
                </View>


                <View style={styles.paye}>
                    <Text style={styles.titre2}>Get Started</Text>
                </View>






            </View>

        </View >


    )
};


const styles = StyleSheet.create({


    body: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',

    },
    app: {

        height: 'fit-content',
        width: '100%',
        flex: 1,
        // marginTop: 20,
        // marginBottom: 20,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: 'white',
        paddingLeft: '2%',
        paddingRight: '2%',
    },

    sousHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    lo: {
        backgroundColor:'white',
    marginTop:-12,
        borderRadius: 10,
        borderColor: 'black',
        padding: 5,
    },
    titre: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    titre2: {
        
        marginLeft:30,
        fontSize: 20,
        fontWeight: 'bold',
        color:'#3dbc8c',
    },
    titre3: {
       // backgroundColor:'red',
        marginTop: 20,
        fontSize: 28,
        fontWeight: 'bold',
        width:250,
        alignItems:'center',
        textAlign:'center',
        marginLeft:39,
        
    },
    basket:{
        marginLeft:59,
    },

    paye: {
        //backgroundColor:'red',
        marginTop: 90,
        marginLeft: 75,
        textAlign: 'center',
        padding: 8,
        width: 190,
        borderRadius: 20,
        borderColor:'#3dbc8c',
        borderWidth:2,
        

    },
    orange: {
        height: 140,
        width: 160,
        marginLeft: 84,
    },
    bas: {
        marginTop: 20,
    }
});
