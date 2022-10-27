import React,{useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Touchable } from 'react-native';

export default function Peruibe({navigation}) {
    useEffect(
        ()=>{
            function teste(){
                console.warn("Teste da useEffect");
            }
        },[]
    );
    return (
      <View style={styles.bloco}>
        <Text>Peruíbe</Text>
      </View>
    );
}

const styles = StyleSheet.create ({
    bloco:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});