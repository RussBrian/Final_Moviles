import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import * as ImagePicker from 'react-native-image-picker';

const ReportarSituacionScreen = () => {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');  
  const [latitud, setLatitud] = useState('');
  const [longitud, setLongitud] = useState('');
  const [imageBase64, setImageBase64] = useState('');

  const pickImage = () => {
    const options = {
      noData: true,
      mediaType: 'photo',
      includeBase64: true,
    };

    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.base64) {
        setImageBase64(response.base64);
      }
    });
  };

  const reportarSituacion = async () => {
    const token = await AsyncStorage.getItem('userToken');

    if (!token) {
      Alert.alert('Error', 'No se ha encontrado el token de autenticación.');
      return;
    }

    const formData = new FormData();
    formData.append('titulo', titulo);
    formData.append('descripcion', descripcion);
    formData.append('foto', `data:image/jpeg;base64,${imageBase64}`);
    formData.append('latitud', latitud);
    formData.append('longitud', longitud);
    formData.append('token', token);

    try {
      const response = await axios.post('https://adamix.net/defensa_civil/def/nueva_situacion.php', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.exito) {
        Alert.alert('Éxito', 'La situación ha sido reportada con éxito.');
      } else {
        Alert.alert('Error', response.data.mensaje);
      }
    } catch (error) {
      console.error('Error al reportar la situación:', error);
      Alert.alert('Error', 'Ha ocurrido un error al intentar reportar la situación.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Título de la situación"
        value={titulo}
        onChangeText={setTitulo}
      />
      <TextInput
        style={styles.input}
        placeholder="Descripción de la situación"
        value={descripcion}
        onChangeText={setDescripcion}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Latitud"
        value={latitud}
        onChangeText={setLatitud}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Longitud"
        value={longitud}
        onChangeText={setLongitud}
        keyboardType="numeric"
      />
      {imageBase64 ? (
        <Image source={{ uri: `data:image/jpeg;base64,${imageBase64}` }} style={styles.image} />
      ) : null}
      <Button title="Seleccionar Imagen" onPress={pickImage} />
      <Button title="Reportar Situación" onPress={reportarSituacion} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
  image: {
    width: 100,
    height: 100, 
    backgroundColor: '#ccc',
  },
});

export default ReportarSituacionScreen;
