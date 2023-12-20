import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Button, TouchableOpacity } from 'react-native';
//import { StyleSheet, Text, View, Image, ScrollView, TextInput } from 'react-native-web';
import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { TouchableOpacity } from 'react-native-web';




const battery = require('./assets/images/battery.png');
const wifi = require('./assets/images/wifi.png')
const bar = require('./assets/images/bar.png')
const menu = require('./assets/images/menu.png')
const orange = require('./assets/images/orange.png')
const next = require('./assets/images/next.png')
const pp = require('./assets/images/pp.jpg')
const raisin = require('./assets/images/raisin.png')
const search = require('./assets/images/search.png')
const sta = require('./assets/images/sta.png')
const shop = require('./assets/images/shop.png')
const person = require('./assets/images/person.png')
const home = require('./assets/images/home.png')
const bag = require('./assets/images/bag.png')
const ananas = require('./assets/images/ananas.png')
const apple = require('./assets/images/apple.png')
const plante = require('./assets/images/plante.png')

const Slidefruit = () => (
    <View>
        <View style={{
            backgroundColor: '#fce9c8',
            marginTop: 20,
            width: 200,
            height: 200,
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 20,
            padding: '5%',
            // justifyContent: 'space-around',
            //  alignItems: 'center',
        }}>
            <TouchableOpacity onPress={() => navigation.navigate('profile')}>
                <Image source={orange} style={{


                    // margin: '5%',
                    width: 120,
                    height: 120,
                    resizeMode: 'contain',
                    alignContent: 'center',
                    marginLeft: 25,
                    marginTop: -11,
                    borderWidth: 5,
                    borderColor: '#fce9c8',
                }}
                />
            </TouchableOpacity>
            <Text style={{
                marginTop: '40px',
                color: 'orange',
                fontSize: 20,
                fontWeight: 'bold',
            }}>Orange             $10</Text>

            <View style={{
                marginTop: '30px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <Text style={{
                    textAlign: 'center',
                    borderWidth: 1,
                    width: 60,
                    fontSize: 18,
                    marginLeft: 60,
                    backgroundColor: 'orange',
                    color: 'white',
                    fontWeight: 'bold',
                    borderColor: 'orange',
                    borderRadius: 30,

                }}>Add</Text>

            </View>
        </View>



        <View style={{
            backgroundColor: '#d9defe',
            marginTop: 20,
            width: 200,
            height: 200,
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 20,
            padding: '5%',
            // justifyContent: 'space-around',
            //  alignItems: 'center',
        }}>
            <Image source={ananas} style={{
                top: 4,
                width: 120,
                height: 120,
                resizeMode: 'contain',
                alignContent: 'center',
                marginLeft: 25,
                marginTop: -11,
                borderWidth: 5,
                borderColor: '#d9defe',
            }} />
            <Text style={{
                marginTop: '40px',
                color: 'orange',
                fontSize: 20,
                fontWeight: 'bold',
            }}>Ananas     $10</Text>

            <Text style={{
                textAlign: 'center',
                borderWidth: 1,
                width: 60,
                fontSize: 18,
                marginLeft: 60,
                backgroundColor: 'violet',
                color: 'white',
                fontWeight: 'bold',
                borderColor: 'violet',
                borderRadius: 30,

            }}>Add</Text>
        </View>


        <View style={{
            backgroundColor: '#d9defe',
            marginTop: 20,
            width: 200,
            height: 200,
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 20,
            padding: '5%',
            // justifyContent: 'space-around',
            //  alignItems: 'center',
        }}>
            <Image source={apple} style={{

                width: 120,
                height: 120,
                resizeMode: 'contain',
                alignContent: 'center',
                marginLeft: 25,
                marginTop: -11,
                borderWidth: 5,
                borderColor: '#d9defe',
            }} />
            <Text style={{
                marginTop: '40px',
                color: 'orange',
                fontSize: 20,
                fontWeight: 'bold',
            }}>Pomme         $10</Text>

            <Text style={{
                textAlign: 'center',
                borderWidth: 1,
                width: 60,
                fontSize: 18,
                marginLeft: 60,
                backgroundColor: 'violet',
                color: 'white',
                fontWeight: 'bold',
                borderColor: 'violet',
                borderRadius: 30,

            }}>Add</Text>
        </View>
    </View>



);
const Slidelegume = () => (
    <View>
        <View style={{
            backgroundColor: '#fce9c8',
            marginTop: 20,
            width: 200,
            height: 200,
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 20,
            padding: '5%',
            // justifyContent: 'space-around',
            //  alignItems: 'center',
        }}>
            <TouchableOpacity onPress={() => navigation.navigate('profile')}>
                <Image source={raisin} style={{


                    // margin: '5%',
                    width: 120,
                    height: 120,
                    resizeMode: 'contain',
                    alignContent: 'center',
                    marginLeft: 25,
                    marginTop: -11,
                    borderWidth: 5,
                    borderColor: '#fce9c8',
                }}
                />
            </TouchableOpacity>
            <Text style={{
                marginTop: '40px',
                color: 'orange',
                fontSize: 20,
                fontWeight: 'bold',
            }}>Raisin          $10</Text>

            <View style={{
                marginTop: '30px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <Text style={{
                    textAlign: 'center',
                    borderWidth: 1,
                    width: 60,
                    fontSize: 18,
                    marginLeft: 60,
                    backgroundColor: 'orange',
                    color: 'white',
                    fontWeight: 'bold',
                    borderColor: 'orange',
                    borderRadius: 30,

                }}>Add</Text>

            </View>
        </View>



        <View style={{
            backgroundColor: '#d9defe',
            marginTop: 20,
            width: 200,
            height: 200,
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 20,
            padding: '5%',
            // justifyContent: 'space-around',
            //  alignItems: 'center',
        }}>
            <Image source={plante} style={{
                top: 4,
                width: 120,
                height: 120,
                resizeMode: 'contain',
                alignContent: 'center',
                marginLeft: 25,
                marginTop: -11,
                borderWidth: 5,
                borderColor: '#d9defe',
            }} />
            <Text style={{
                marginTop: '40px',
                color: 'orange',
                fontSize: 20,
                fontWeight: 'bold',
            }}>Lettue     $10</Text>

            <Text style={{
                textAlign: 'center',
                borderWidth: 1,
                width: 60,
                fontSize: 18,
                marginLeft: 60,
                backgroundColor: 'violet',
                color: 'white',
                fontWeight: 'bold',
                borderColor: 'violet',
                borderRadius: 30,

            }}>Add</Text>
        </View>


        <View style={{
            backgroundColor: '#d9defe',
            marginTop: 20,
            width: 200,
            height: 200,
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 20,
            padding: '5%',
            // justifyContent: 'space-around',
            //  alignItems: 'center',
        }}>
            <Image source={apple} style={{

                width: 120,
                height: 120,
                resizeMode: 'contain',
                alignContent: 'center',
                marginLeft: 25,
                marginTop: -11,
                borderWidth: 5,
                borderColor: '#d9defe',
            }} />
            <Text style={{
                marginTop: '40px',
                color: 'orange',
                fontSize: 20,
                fontWeight: 'bold',
            }}>Pomme         $10</Text>

            <Text style={{
                textAlign: 'center',
                borderWidth: 1,
                width: 60,
                fontSize: 18,
                marginLeft: 60,
                backgroundColor: 'violet',
                color: 'white',
                fontWeight: 'bold',
                borderColor: 'violet',
                borderRadius: 30,

            }}>Add</Text>
        </View>
    </View>



);


export default function HomeScreen({ navigation }) {

    const [text, setText] = useState('');
    const [currentSlide, setcurrentSlide] = useState(null);
    const handleButton1Click = () => {
        setcurrentSlide(<Slidefruit />);
    }
    const handleButton2Click = () => {
        setcurrentSlide(<Slidelegume />);
    }
    return (
        <View style={styles.body}>
            <View style={styles.app}>

                <View style={styles.sousHeader}>
                    <View style={styles.sousHeaderLeft}>
                        <Image source={menu} style={styles.menu} />
                    </View>

                    <View style={styles.sousHeaderRight}>
                        <Image source={pp} style={styles.pp} />
                    </View>

                </View>


                <View>
                    <Text style={styles.Texte12}>Discover Seasonal Fruits and Vegetables</Text>
                </View>

                <StatusBar style="auto" />

                <View style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center' }}>
                    <Button title='Fruit' onPress={handleButton1Click} />
                    <Button title='Legumes' onPress={handleButton2Click} />

                </View>
                <ScrollView horizontal={true}>

                    <View>
                        <View style={{
                            marginLeft: 30,
                            backgroundColor: '#fce9c8',
                            marginTop: 20,
                            width: 200,
                            height: 200,
                            display: 'flex',
                            flexDirection: 'column',
                            borderRadius: 20,
                            padding: '5%',
                            // justifyContent: 'space-around',
                            //  alignItems: 'center',
                        }}>
                            <TouchableOpacity onPress={() => navigation.navigate('profile')}>
                                <Image source={orange} style={{


                                    // margin: '5%',
                                    width: 120,
                                    height: 120,
                                    resizeMode: 'contain',
                                    alignContent: 'center',
                                    marginLeft: 25,
                                    marginTop: -11,
                                    borderWidth: 5,
                                    borderColor: '#fce9c8',
                                }}
                                />
                            </TouchableOpacity>
                            <Text style={{
                                marginTop: '40px',
                                color: 'orange',
                                fontSize: 20,
                                fontWeight: 'bold',
                            }}>Orange             $10</Text>

                            <View style={{
                                marginTop: '30px',
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}>
                                <Text style={{
                                    textAlign: 'center',
                                    borderWidth: 1,
                                    width: 60,
                                    fontSize: 18,
                                    marginLeft: 60,
                                    backgroundColor: 'orange',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    borderColor: 'orange',
                                    borderRadius: 30,

                                }}>Add</Text>

                            </View>
                        </View>



                        <View style={{
                            backgroundColor: '#d9defe',
                            marginTop: 20,
                            width: 200,
                            height: 200,
                            display: 'flex',
                            flexDirection: 'column',
                            borderRadius: 20,
                            padding: '5%',
                            // justifyContent: 'space-around',
                            //  alignItems: 'center',
                        }}>
                            <Image source={ananas} style={{

                                width: 120,
                                height: 120,
                                resizeMode: 'contain',
                                alignContent: 'center',
                                marginLeft: 25,
                                marginTop: -11,
                                borderWidth: 5,
                                borderColor: '#d9defe',
                            }} />
                            <Text style={{
                                marginTop: '40px',
                                color: 'orange',
                                fontSize: 20,
                                fontWeight: 'bold',
                            }}>Ananas     $10</Text>

                            <Text style={{

                                textAlign: 'center',
                                borderWidth: 1,
                                width: 60,
                                fontSize: 18,
                                marginLeft: 60,
                                backgroundColor: 'violet',
                                color: 'white',
                                fontWeight: 'bold',
                                borderColor: 'violet',
                                borderRadius: 30,

                            }}>Add</Text>
                        </View>
                    </View>

                            {/* ananas */}
                    <View style={{
                        marginLeft: 30,
                        backgroundColor: '#d9defe',
                        marginTop: 20,
                        width: 200,
                        height: 200,
                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: 20,
                        padding: '5%',
                        // justifyContent: 'space-around',
                        //  alignItems: 'center',
                    }}>
                        <Image source={ananas} style={{

                            width: 120,
                            height: 120,
                            resizeMode: 'contain',
                            alignContent: 'center',
                            marginLeft: 25,
                            marginTop: -11,
                            borderWidth: 5,
                            borderColor: '#d9defe',
                        }} />
                        <Text style={{
                            marginLeft:-33,
                            marginTop: -23,
                            color: 'orange',
                            fontSize: 20,
                            fontWeight: 'bold',
                        }}>Ananas         $10</Text>

                        <Text style={{
                            textAlign: 'center',
                            borderWidth: 1,
                            width: 60,
                            fontSize: 18,
                            marginLeft: 60,
                            backgroundColor: 'violet',
                            color: 'white',
                            fontWeight: 'bold',
                            borderColor: 'violet',
                            borderRadius: 30,
                            top:-32,

                        }}>Add</Text>
                    </View>

                        {/* pomme */}
                    <View style={{
                        backgroundColor: '#d9defe',
                        marginTop: 20,
                        marginLeft: 30,
                        width: 200,
                        height: 200,
                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: 20,
                        padding: '5%',
                        marginLeft: 30,
                        // justifyContent: 'space-around',
                        //  alignItems: 'center',
                    }}>
                        <Image source={apple} style={{

                            width: 120,
                            height: 120,
                            resizeMode: 'contain',
                            alignContent: 'center',
                            marginLeft: 25,
                            marginTop: -11,
                            borderWidth: 5,
                            borderColor: '#d9defe',
                        }} />
                        <Text style={{
                            marginLeft:-33,
                            marginTop: -33,
                            color: 'orange',
                            fontSize: 20,
                            fontWeight: 'bold',
                        }}>Pomme        $10</Text>

                        <Text style={{
                            textAlign: 'center',
                            borderWidth: 1,
                            width: 60,
                            fontSize: 18,
                            marginLeft: 60,
                            backgroundColor: 'violet',
                            color: 'white',
                            fontWeight: 'bold',
                            borderColor: 'violet',
                            borderRadius: 30,
                            top:-29,

                        }}>Add</Text>
                    </View>
                    {/* Lettue */}
                    {<View style={{
                        backgroundColor: '#d9defe',
                        marginTop: 20,
                        marginLeft: 30,
                        width: 200,
                        height: 200,
                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: 20,
                        padding: '5%',
                        // justifyContent: 'space-around',
                        //  alignItems: 'center',
                    }}>
                        <Image source={raisin} style={{

                            width: 120,
                            height: 120,
                            resizeMode: 'contain',
                            alignContent: 'center',
                            marginLeft: 25,
                            marginTop: -11,
                            borderWidth: 5,
                            borderColor: '#d9defe',
                        }} />
                        <Text style={{
                            marginLeft:-33,
                            marginTop: '40px',
                            color: 'orange',
                            fontSize: 20,
                            fontWeight: 'bold',
                            top:-21,
                        }}>Grape          $10</Text>

                        <TouchableOpacity onPress={() => navigation.navigate('Profile1')}>
                            <Text style={{
                                textAlign: 'center',
                                borderWidth: 1,
                                width: 60,
                                fontSize: 18,
                                marginLeft: 60,
                                backgroundColor: 'violet',
                                color: 'white',
                                fontWeight: 'bold',
                                borderColor: 'violet',
                                borderRadius: 30,
                                top:-61,

                            }}>Add</Text>
                        </TouchableOpacity>
                    </View>}

                    {/* //plante */}
                    <View style={{
                        backgroundColor: '#d9defe',
                        marginLeft: 30,
                        marginTop: 20,
                        width: 200,
                        height: 200,
                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: 20,
                        padding: '5%',
                        // justifyContent: 'space-around',
                        //  alignItems: 'center',
                    }}>
                        <Image source={plante} style={{
                            top: 4,
                            width: 120,
                            height: 120,
                            resizeMode: 'contain',
                            alignContent: 'center',
                            marginLeft: 25,
                            marginTop: -11,
                            borderWidth: 5,
                            borderColor: '#d9defe',
                        }} />
                        <Text style={{
                            marginTop:-23,
                            color: 'orange',
                            fontSize: 20,
                            fontWeight: 'bold',
                        }}>Lettue     $10</Text>

                        <Text style={{
                            textAlign: 'center',
                            borderWidth: 1,
                            width: 60,
                            fontSize: 18,
                            marginLeft: 60,
                            backgroundColor: 'violet',
                            color: 'white',
                            fontWeight: 'bold',
                            borderColor: 'violet',
                            borderRadius: 30,
                            top:-31

                        }}>Add</Text>
                    </View>

                </ScrollView>

                <Text style={styles.Texte15}>Nearby Shop</Text>
                <View style={styles.im}>
                    <View style={styles.x}>
                        <View>
                            <Image source={shop} style={styles.shop} />
                        </View>
                        <View>
                            <Text>Xenter Shop</Text>
                            <Text>2356 Toltrican Street</Text>
                            <Text>9 A.M - 7 A.M</Text>
                        </View>
                    </View>
                    <View style={styles.x1}>
                        <View>
                            <Image source={sta} style={styles.shop} />
                        </View>
                        <View>
                            <Text>Fenter Shop</Text>
                            <Text>2356 Toltrican Street</Text>
                            <Text>10 A.M - 7 A.M</Text>
                        </View>
                    </View>
                    <ScrollView horizontal={true}></ScrollView>
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

        </View>


    )
};


const styles = StyleSheet.create({
    nav: {
        marginBottom: 35,
        borderRadius: 30,
    },
    img: {
        backgroundColor: 'wheat',

    },

    body: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
        justifyContent: 'center',

    },
    app: {
        // width: 320,
        // height: 'fit-content',
        // borderRadius: 30,
        flex: 1,
        // marginTop: 20,
        // marginBottom: 20,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: 'white',
        paddingLeft: '2%',
        paddingRight: '2%',
    },

    menu: {
        marginLeft: 10,
        padding: '8px',
        width: 20,
        height: 20,
        backgroundColor: '#fff',
        borderColor: '#fff',

    },
    Texte12: {
        padding: 8,
        marginLeft: -10,
        marginTop: -17,
        fontSize: 20,
    },
    Texte15: {
        padding: 8,
        top: -25,
        fontSize: 20,
        //  backgroundColor:'red',
    },
    pp: {
        marginTop: -50,
        width: 50,
        height: 50,
        marginLeft: 240,
        alignContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 50,
        borderWidth: 5,
        borderColor: '#fff',
    },
    fruits: {
        display: 'flex',
        flexDirection: 'row',
    },
    textfruits: {
        fontSize: 22,
    },
    textfruits1: {
        fontSize: 22,
        backgroundColor: '#f8dedf',
        color: '#d68182',
        borderRadius: 20,
    },


    sousHeader: {
        // backgroundColor: 'red',
        marginTop: 9,
        width: 'auto',
        height: '10%',
        display: 'flex',

    },


    Textetime: {
        marginLeft: 5,
        fontWeight: 'bold',
        width: 40
    },
    Texte24: {
        marginTop: 17,
        fontSize: 35,
        fontWeight: 'bold',
        width: 40
    },
    button: {
        backgroundColor: 'orange',
        marginLeft: 30,
        borderRadius: 20,
    },
    add: {
        marginTop: '2%',
        marginRight: '5%',
        padding: '10px',
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        backgroundColor: '#fff',
        borderRadius: 50,
        borderWidth: 5,
        borderColor: '#fff',
    },
    ViewToday: {
        marginLeft: '10px',
        marginTop: 15,
        width: '35%',
        height: '30%',
        resizeMode: 'contain',
        alignContent: 'center',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        // backgroundColor: '#000',
        borderRadius: 50,
        // borderWidth: 5,
        // borderColor: '#fff',
    },

    down: {
        marginTop: '2%',
        marginRight: 5,
        marginBottom: 5,
        // marginTop: '5px',
        padding: '8px',
        // paddingTop: '10px',
        width: 10,
        height: 10,
        resizeMode: 'contain',
        // backgroundColor: '#D3D3D3',
        // borderRadius: 50,
        // borderWidth: 5,
        // borderColor: '#fff',
    },
    Texte6: {
        marginTop: '3px',
        fontSize: 10,
        fontWeight: 'bold',
    },
    TexteToday: {
        marginTop: '6px',
        paddingLeft: '2px',
        color: '#5A595D',
        fontSize: 10,
        fontWeight: 'bold',
    },

    Textepacient: {
        marginTop: 4,
        fontSize: 16,
    },
    sousHeaderRight: {
        marginTop: 19,
        marginRight: '2%',

        width: '16%',
        height: '87%',
        resizeMode: 'contain',
        alignContent: 'center',
        borderWidth: 5,
        borderColor: '#fff',
        // backgroundColor: '#000',
    },
    avantGraphe: {
        width: '100%',
        height: '15%',
        resizeMode: 'contain',
        alignContent: 'center',
        marginBottom: 80,
        //backgroundColor: '',
        display: 'flex',
        flexDirection: 'row',
        //backgroundColor: '#000',
        // borderRadius: 50,
        borderWidth: 5,
        borderColor: '#fff',
    },
    textAvantGraphe: {
        marginTop: -20,
        fontSize: 14,

    },
    textAvantGraphei: {
        marginTop: 0,
        fontSize: 14,


    },
    sousbasLeft: {
        marginTop: '15px',
        marginLeft: 12,
        width: 150,
        height: '100%',
        resizeMode: 'contain',
        alignContent: 'center',
        //backgroundColor: 'blue',
        display: 'flex',
        flexDirection: 'column',
        //backgroundColor: '#000',
        // borderRadius: 50,
        borderWidth: 5,
        borderColor: '#fff',
    },
    petitTestAvantGraphe: {
        marginLeft: 29,
        marginTop: 20,
        width: '60%',
        height: '22%',
        resizeMode: 'contain',
        alignContent: 'center',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        fontSize: 12,
        // backgroundColor: '#000',
        borderRadius: 50,
        // borderWidth: 5,
        // borderColor: '#fff',
    },
    petitTestAvantGraphe24: {
        marginLeft: '10px',
        justifyContent: 'space-between',
        marginTop: 25,
        width: '46%',
        height: '22%',
        resizeMode: 'contain',
        alignContent: 'center',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        // backgroundColor: '#000',
        borderRadius: 50,
        // borderWidth: 5,
        // borderColor: '#fff',
    },
    x: {
        borderRadius: 20,
        borderColor: '#fedcdb',
        top: -10,
        flexDirection: 'row',
        display: 'flex',
    },
    x1: {
        top: -10,
        flexDirection: 'row',
        display: 'flex',
        marginLeft: 15,
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
    p: {
        height: 30,
        width: 30,
    }
});
