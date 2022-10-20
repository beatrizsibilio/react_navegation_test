import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
    return (
      <View style={styles.bloco}>
        <Text>Olá mundo</Text>
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