import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const AcercaDeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/icon.png")}
        style={styles.image}
        resizeMode="contain"
      />
        <Text style={styles.text}>
        <Text style={styles.heading}>Integrantes del Grupo SGRM</Text>
        {"\n\n"}
        <Text style={styles.member}>Samuel Elias Jimenez 2022-0632</Text>
        {"\n\n"}
        <Text style={styles.member}>Mariel Isabel Santana Pujols 2021-1790</Text>
        {"\n\n"}
        <Text style={styles.member}>Jose Gabriel Cabral 2022-1117</Text>
        {"\n\n"}
        <Text style={styles.member}>Russel Brian Martinez Veloz 2021-1742</Text>
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 20,
      backgroundColor: '#fff',
    },
    image: {
      width: '90%',
      height: 200,
      marginVertical: 20,
    },
    text: {
      fontSize: 16,
      color: '#333',
      paddingHorizontal: 20,
      textAlign: 'center',
    },
    heading: {
      fontWeight: 'bold',
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 2,
    },
    member: {
      textShadowColor: 'rgba(0, 0, 0, 0.5)',
      textShadowOffset: { width: 0.5, height: 0.5 },
      textShadowRadius: 1,
    },
  });
  

export default AcercaDeScreen;
