import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Button , TouchableOpacity} from 'react-native';
//import { StyleSheet, Text, View, Image, ScrollView, TextInput } from 'react-native-web';
import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Progress from 'react-native-progress';
const prec = require('./assets/images/prec.png')
const orange = require('./assets/images/orange.png')
const coeur = require('./assets/images/coeur.png')
const raisin = require('./assets/images/raisin.png')
const share = require('./assets/images/share.png')
const menu = require('./assets/images/menu.png')


export default function HomeScreen({ navigation }) {

    const [text, setText] = useState('');

    return (
        <View style={styles.body}>
            <View style={styles.app}>

                <View style={styles.sousHeader}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <View style={styles.sousHeaderLeft}>
                        <Image source={prec} style={styles.prec} />
                    </View>
                    </TouchableOpacity>
                    <Text style={styles.titre}> Product Detail</Text>
                    <View>
                        <Image source={share} style={styles.menu} />
                    </View>
                </View>

                <View><Text style={styles.titre2}>Juicy Orange</Text></View>

                <View><Text style={styles.titre3}>Sweet and Juicy</Text></View>

                <View><Text style={styles.para}>Lorem Ipsum is simply dummy text of the printing and typesetting industre. Lorem  Ipsum has been the industry's standard dummy
                    test ever since the 1500s when an unknown printer took a gallery of type and ..</Text>
                </View>
                <View style={styles.soustitre}>
                    <View style={styles.hae}>
                        <Image source={coeur} style={styles.coeur} />
                    </View>
                    <View>
                        <Text style={styles.titre4}>Find Nearest Store</Text>
                    </View>
                </View>
                <View style={styles.ex}>
                    <View>
                        <Image source={orange} style={styles.orange} />
                    </View>

                    <View>
                        <Text style={styles.titre}>Nutrition Facts</Text>
                    </View>

                    <View>
                        <Text style={styles.para}>Fiber 3 g                                                                            7%</Text>
                        <Progress.Bar progress={0.3} width={340} color='#f2a8a9' borderWidth={0} backgroundColor='#e8e8e8' />
                    </View>

                    <View style={styles.bas}>
                        <Text style={styles.para}>Good Sugar 12 g                                                              5%
                            <Progress.Bar progress={0.5} width={340} color='#f2a8a9' borderWidth={0} backgroundColor='#e8e8e8' />
                        </Text>
                    </View>
                </View>

            </View>

        </View>


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
        backgroundColor: '#fcf0da',
        paddingLeft: '2%',
        paddingRight: '2%',
    },

    sousHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    menu: {
        marginLeft: 10,
        padding: '8px',
        width: 30,
        height: 30,
        borderColor: '#fff',

    },
    prec: {
        marginLeft: 10,
        padding: '8px',
        width: 40,
        height: 40,
        borderColor: '#fff',

    },

    fruits: {
        display: 'flex',
        flexDirection: 'row',
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
    ex:{
        backgroundColor:'white',
        marginTop: 60,
        borderTopLeftRadius:20,
        
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
        height: 120,
        width: 140,
        marginLeft: 84,
        position: 'relative',
        bottom:60,
    },
    bas: {
        marginTop: 20,
    }
});
