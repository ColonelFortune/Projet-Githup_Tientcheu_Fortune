import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Button,TouchableOpacity } from 'react-native';
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
const home = require('./assets/images/home.png')
const search = require('./assets/images/search.png')
const bag = require('./assets/images/bag.png')
const person = require('./assets/images/person.png')


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
                </View>

                <View>
                    <Text style={styles.titre2}>My</Text>
                    <Text style={styles.titre2}>Order</Text>
                </View>
                <View style={styles.car}>
                    <View>
                        <Image source={orange} style={styles.fruits} />
                    </View>
                    <View>
                        <Text>1 x</Text>
                    </View>
                    <View>
                        <Text>Orange</Text>
                        <Text>$10</Text>
                    </View>
                    <View>
                        <Image source={delet} style={styles.menu} />
                    </View>
                </View>

                <View style={styles.car}>
                    <View >
                        <Image source={straw} style={styles.fruits2} />
                    </View>
                    <View>
                        <Text>    1 x</Text>
                    </View>
                    <View>
                        <Text>Strawberry</Text>
                        <Text>$12</Text>
                    </View>
                    <View>
                        <Image source={delet} style={styles.menu} />
                    </View>
                </View>


                <View style={styles.car}>
                    <View>
                        <Image source={apple} style={styles.fruits3} />
                    </View>
                    <View>
                        <Text>     1 x</Text>
                    </View>
                    <View>
                        <Text>Green Apple</Text>
                        <Text>$13</Text>
                    </View>
                    <View>
                        <Image source={delet} style={styles.menu} />
                    </View>
                </View>
                <View style={styles.car}>
                    <View>
                        <Image source={raisin} style={styles.fruits4} />
                    </View>
                    <View>
                        <Text>1 x</Text>
                    </View>
                    <View>
                        <Text>Grape</Text>
                        <Text>$15</Text>
                    </View>
                    <View>
                        <Image source={delet} style={styles.menu} />
                    </View>
                </View>
                <View style={styles.prix}>
                    <Text style={{
                        top: 40,
                        fontSize: 24,
                        fontWeight: 'bold'
                    }}>Total Price</Text>
                    <Text style={{
                        top: 40,
                        fontSize: 24,
                        fontWeight: 'bold'
                    }}>$50</Text>
                </View>

                <View style={styles.paye}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        marginLeft: 30,
                        marginTop: 70,
                        marginLeft: 75,
                        textAlign: 'center',
                        backgroundColor: '#f2a8a9',
                        padding: 8,
                        width: 190,
                        borderRadius: 20,

                    }}>Payement</Text>
                </View>

                <View style={styles.tof}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Image source={home} style={styles.shop} />
                    </TouchableOpacity>
                    <Image source={search} style={styles.p} />
                    <Image source={bag} style={styles.shop} />
                    <Image source={person} style={styles.shop} />
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
        borderRadius: 10,
        borderColor: 'black',
        padding: 5,
    },
    titre: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    titre2: {

        fontSize: 28,
        fontWeight: 'bold',
    },
    titre3: {
        fontSize: 16,
        fontWeight: 'bold',
        color: "#f6c6c8"
    },
    para:
    {
        fontSize: 14,
    },
    car: {
        marginTop: 13,
        flexDirection: 'row',
        display: 'flex',
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
        borderWidth: 1,
    },

    fruits: {
        backgroundColor: '#fce9c8',
        width: 60,
        height: 55,
        borderRadius: 12
    },
    fruits2: {
        backgroundColor: '#f8bfbb',
        width: 60,
        height: 55,
        borderRadius: 12
    },
    fruits3: {
        backgroundColor: '#cffca1',
        width: 60,
        height: 55,
        borderRadius: 12
    },
    fruits4: {
        backgroundColor: '#d9defe',
        width: 60,
        height: 55,
        borderRadius: 12
    },

    hea: {
        backgroundColor: 'red',
    },
    coeur: {
        marginTop: 20,
        marginLeft: 20,
        backgroundColor: 'red',
        height: 60,
        width: 60,
        borderRadius: 20,
        borderColor: '#f2a8a9',
        borderStyle: 'solid',
        borderWidth: 1,
    },

    prix: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    soustitre: {

        flexDirection: 'row'
    },
    titre4: {
        color: 'white',
        width: 200,
        padding: 20,
        marginTop: 21,
        marginLeft: 13,
        backgroundColor: '#f2a8a9',
        borderRadius: 15,
        fontWeight: "bold",
    },


    orange: {
        height: 140,
        width: 160,
        marginLeft: 84,
    },
    bas: {
        marginTop: 20,
    },
    
    shop: {
        borderRadius: 10,
        backgroundColor: '#fedcdb',
        height: 30,
        width: 30,
    },
    im: {
        flexDirection: 'row',

    },
    tof: {
        flexDirection: "row",
        justifyContent: "space-between",
        top: 12,
        // height:40,
        // width:40,
    },
});
