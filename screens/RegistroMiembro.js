import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { Snackbar } from 'react-native-paper';
import axios from 'axios';

const RegistroMiembro = () => {
  const [cedula, setCedula] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [clave, setClave] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMensaje, setSnackbarMensaje] = useState('');

  const handleSubmit = async () => {
    try {
      const data = {
        cedula: cedula,
        nombre: nombre,
        apellido: apellido,
        clave: clave,
        correo: correo,
        telefono: telefono
      };
  
      await axios.post('https://adamix.net/defensa_civil/def/registro.php', data);
  
      setSnackbarMensaje('Registro exitoso');
      setSnackbarVisible(true);
      setCedula('');
      setNombre('');
      setApellido('');
      setClave('');
      setCorreo('');
      setTelefono('');
    } catch (error) {
      setSnackbarMensaje('Error al registrar: ' + error.message);
      setSnackbarVisible(true);
    }
  };
  

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Cédula"
        value={cedula}
        onChangeText={setCedula}
      />
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Apellido"
        value={apellido}
        onChangeText={setApellido}
      />
      <TextInput
        style={styles.input}
        placeholder="Clave"
        secureTextEntry={true}
        value={clave}
        onChangeText={setClave}
      />
      <TextInput
        style={styles.input}
        placeholder="Correo"
        value={correo}
        onChangeText={setCorreo}
      />
      <TextInput
        style={styles.input}
        placeholder="Teléfono"
        value={telefono}
        onChangeText={setTelefono}
      />
      <Button title="Registrar" onPress={handleSubmit} />
      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
      >
        {snackbarMensaje}
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});

export default RegistroMiembro;
