import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const CambiarContraseaScreen = () => {
  const [claveAnterior, setClaveAnterior] = useState('');
  const [claveNueva, setClaveNueva] = useState('');
  const [confirmacionClaveNueva, setConfirmacionClaveNueva] = useState('');

  const cambiarClave = async () => {
    if (claveNueva !== confirmacionClaveNueva) {
      Alert.alert('Error', 'La confirmación de la contraseña no coincide.');
      return;
    }

    const token = await AsyncStorage.getItem('userToken');
    if (!token) {
      Alert.alert('Error', 'No se ha encontrado el token de autenticación.');
      return;
    }

    try {
      const response = await axios.post('https://adamix.net/defensa_civil/def/cambiar_clave.php', {
        token,
        clave_anterior: claveAnterior,
        clave_nueva: claveNueva,
      });

      if (response.data.exito) {
        Alert.alert('Éxito', 'La contraseña ha sido cambiada con éxito.');
      } else {
        Alert.alert('Error', response.data.mensaje);
      }
    } catch (error) {
      console.error('Error al cambiar la clave:', error);
      Alert.alert('Error', 'Ha ocurrido un error al intentar cambiar la contraseña.');
    }
  };

  return (
    <View style={styles.cambiarContraseaScreen}>
      <TextInput
        style={styles.input}
        placeholder="Contraseña Anterior"
        value={claveAnterior}
        onChangeText={setClaveAnterior}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Nueva Contraseña"
        value={claveNueva}
        onChangeText={setClaveNueva}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirme Nueva Contraseña"
        value={confirmacionClaveNueva}
        onChangeText={setConfirmacionClaveNueva}
        secureTextEntry
      />
      <Button title="Cambiar Contraseña" onPress={cambiarClave} />
    </View>
  );
};

const styles = StyleSheet.create({
  cambiarContraseaScreen: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
  },
});

export default CambiarContraseaScreen;
