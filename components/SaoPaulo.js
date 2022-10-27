import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Touchable } from 'react-native';

export default function SaoPaulo({navigation}) {
    return (
      <View style={styles.bloco}>
        <Text>Cidade São Paulo</Text>

        <TouchableOpacity
          onPress={()=>navigation.navigate("Peruibe")}
        >
          <Text>
            Peruíbe
          </Text>
        </TouchableOpacity>
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