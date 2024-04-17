import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importar AsyncStorage
import { useNavigation } from '@react-navigation/native'; 

const App = () => {
  const [cedula, setCedula] = useState('');
  const [clave, setClave] = useState('');
  const navigation = useNavigation();

  const iniciarSesion = async () => {
    const formData = new FormData();
    formData.append('cedula', cedula);
    formData.append('clave', clave);

    try {
      const response = await fetch('https://adamix.net/defensa_civil/def/iniciar_sesion.php', {
        method: 'POST',
        body: formData,
      });
      const json = await response.json();
      if (json.exito) {
        const token = json.datos.token; 
        console.log('Token del usuario:', json.datos.token);
        Alert.alert("Éxito", "Inicio de sesión exitoso!");

        // Almacenar el token en AsyncStorage
        await AsyncStorage.setItem('userToken', token);

       navigation.navigate('Noticias Especificas', { token: token }); // Pasar el token a NoticiasEspecificasScreen
      } else {
        Alert.alert("Error", json.mensaje);
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      Alert.alert("Error", "Error al intentar conectar con el servidor");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Cédula"
        value={cedula}
        onChangeText={setCedula}
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Clave"
        value={clave}
        onChangeText={setClave}
        style={styles.input}
        secureTextEntry
      />
      <Button title="Iniciar Sesión" onPress={iniciarSesion} />
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
    height: 50,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
});

export default App;
