import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import insertUsuario from '../db/insert';

const CreateAccountScreen = () => {
  const navigation = useNavigation();
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');

  const handleSave = async () => {
    // Aquí deberías añadir las validaciones o manejo de errores según sea necesario
    await insertUsuario(nombre, correo, clave);
    // Redirigir al inicio de sesión después de guardar exitosamente
    navigation.navigate('LogInScreen');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image source={require('../assets/splash.png')} style={styles.backArrow} />
        <Text style={styles.backButtonText}>Volver</Text>
      </TouchableOpacity>
      <Image source={require('../assets/icon.png')} style={styles.logo} />
      <Text style={styles.title}>Crear nueva cuenta</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        autoCapitalize="words"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        value={correo}
        onChangeText={setCorreo}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry={true}
        value={clave}
        onChangeText={setClave}
      />
      <Button title="Guardar" style={styles.saveButton} onPress={handleSave} />

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backArrow: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  saveButton: {
    width: 300,
    height: 40,
    backgroundColor: '#007bff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});

export default CreateAccountScreen;
