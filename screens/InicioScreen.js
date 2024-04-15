import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';


const App = () => {
  const [cedula, setCedula] = useState('');
  const [clave, setClave] = useState('');

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
        Alert.alert("Éxito", "Inicio de sesión exitoso!");
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
      <TouchableOpacity onPress={iniciarSesion} style={styles.button}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default App;
