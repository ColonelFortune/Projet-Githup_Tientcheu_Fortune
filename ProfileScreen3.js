import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Button ,TouchableOpacity} from 'react-native';
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
const brocolli = require('./assets/images/brocolli.png')
const carrot = require('./assets/images/carrot.png')




export default function HomeScreen({ navigation }) {

    const [text, setText] = useState('');

    return (
        <View style={styles.body}>
            <View style={styles.app}>

                <View style={styles.sousHeader}>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile4')}>
                    <View style={styles.lo}>
                        <Image source={pre} style={styles.prec} />
                    </View>
                    </TouchableOpacity>
                    <View >
                        <Image source={lock} style={styles.menu} />
                    </View>
                    <View >
                        <Image source={lock} style={styles.menu} />
                    </View>
                </View>

                <View>
                    <Image source={brocolli} style={styles.basket} />
                </View>
                <View style={styles.bcp}>


                    <View style={styles.car}>
                        <View style={styles.paye}>
                            <Text style={styles.titre2}>Vegetables</Text>
                        </View>
                        <View>
                            <Text style={styles.titre3}>Broccoli</Text>
                        </View>
                        <View>
                            <Text style={styles.approx}>approx 100 gm</Text>
                        </View>


                    </View>

                    <View style={styles.ptt}>
                        <Text style={styles.appi}>-</Text>
                        <Text>  1</Text>
                        <Text style={styles.appi}>+</Text>
                    </View>
                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    top:30
                }}>
                    <View>
                        <Image source={carrot} style={styles.carrot} />
                    </View>

                    <View>
                        <Text>Agrifarm Inc</Text>
                        <Text>Sweet Carrot</Text>
                    </View>
                </View>
                <View style={{
                    top:30
                }}>
                    <Text style={styles.titre3}>Description</Text>
                    <Text style={styles.para}> Broccoli is an edible green plant in the cabbage family whose large flowering hesd, stalk andsmall associated leaves are ...</Text>
                </View>



                <View style={{
                    top:40
                }}>
                    <Text style={{
                        textAlign:'center',
                        padding:6,
                        borderColor:'#3dbc8c',
                        borderWidth:1,
                        width:170,
                        marginLeft:105,
                        borderRadius:8,
                        color:'#3dbc8c',
                        fontWeight:'bold'
                    }}>Add to Cart $1.50</Text>

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

    basket: {
        marginTop: 50,
        marginLeft: 109,
        height: 150,
        width: 150,
    },
    sousHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    lo: {
        borderRadius: 10,
        borderColor: 'black',
        padding: 5,
    },
    titre2: {
        marginLeft: 30,
        fontSize: 12,
        fontWeight: 'bold',
        color: '#3dbc8c',
    },

    titre3: {
        marginLeft: 30,
        fontSize: 20,
        fontWeight: 'bold',
    },

    approx: {
        fontSize: 10,
        marginLeft: 25,
    },
    paye: {

        marginTop: 7,
        marginLeft: 15,
        textAlign: 'center',
        height: 25,
        width: 120,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#3dbc8c',
    },
    para:
    {
        fontSize: 14,
    },
    car: {
        marginTop: 13,
        flexDirection: 'column',

        justifyContent: 'space-between'
    },
    menu: {
        marginLeft: 10,
        padding: '8px',
        width: 30,
        height: 30,
        backgroundColor: '#fff',
        borderColor: '#fff',
        borderWidth: 1,
    },
    prec: {
        marginLeft: 10,
        padding: '8px',
        width: 25,
        height: 25,
        backgroundColor: '#fff',
        borderColor: 'black',
        borderRadius: 5,
      
    },

    carrot: {
        height: 50,
        width: 50,
    },
    appi: {
        fontSize: 18,
        marginLeft: 10,
        width: 20,
        height: 30,
        //backgroundColor:'red',
        borderWidth: 1,
        borderColor: '#3dbc8c',
        color: '#3dbc8c',
        borderRadius: 7,
    },

    ptt: {
        marginTop: 20,
        flexDirection: 'row',
    },

    bcp: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',
    },


});
