import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }: { navigation: any }) {
    return (
        <View style={styles.container}>
            <View style={styles.rectangle}>
                <Text style={styles.titleText}>TESLA MODEL Y</Text>
                <Image source={require('./image.png')} style={styles.image} />
                <View style={styles.line} />
                <View style={styles.stationContainer}>
                    <MaterialCommunityIcons name="ev-station" size={40} color="#E1E1E1" />
                    <Text style={styles.text}> STATION 8</Text>
                </View>
                <View style={styles.batteryContainer}>
                    <MaterialCommunityIcons name="battery-charging" size={40} color="green"/>
                    <Text style={styles.text}> 46%</Text>
                </View>
                <Text style={styles.subtitleText}>REMAINING CHARGE TIME:</Text>
                <Text style={styles.text}>1H : 34M</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#041B2A',
    },
    rectangle: {
        width: '95%', 
        height: '95%', 
        backgroundColor: '#0F2635', 
        justifyContent: 'flex-start',
        alignItems: 'center', 
        paddingTop: 60,
    },
    line: {
        height: 1,
        backgroundColor: '#E1E1E1',
        width: '90%',
        marginTop: 20,
        marginBottom: 20,
    },
    titleText: {
        fontSize: 32,
        fontFamily: 'Azonix',
        color: '#E1E1E1',
        marginBottom: 20,
    },
    subtitleText: {
        fontSize: 24,
        fontFamily: 'Azonix',
        color: '#E1E1E1',
        marginTop: 20,
    },
    text: {
        fontSize: 28,
        fontFamily: 'Azonix',
        color: '#E1E1E1',
    },
    image: {
        width: 350,
        height: 150,
        marginTop: 20,
        marginBottom: 20,
    },
    stationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    batteryContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
});