import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const HistoriaScreen = () => {
  return (
    <View style={styles.container}>
      {/* Imagen centrada en la parte superior */}
      <Image
        source={require("../assets/icon.png")}
        style={styles.image}
        resizeMode="contain" // Asegúrate de que la imagen se ajuste sin deformarse
      />
      {/* Texto debajo de la imagen */}
      <Text style={styles.text}>
        Aquí va el texto representativo de la historia o cualquier otro contenido que desees añadir.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', // Centra horizontalmente en el contenedor
    justifyContent: 'flex-start', // Alinea el contenido hacia la parte superior
    paddingTop: 20, // Añade algo de espacio en la parte superior
    backgroundColor: '#fff', // Fondo blanco para la vista
  },
  image: {
    width: '90%', // Ocupa el 90% del ancho del contenedor
    height: 200, // Altura fija para la imagen
    marginVertical: 20, // Añade espacio vertical antes y después de la imagen
  },
  text: {
    fontSize: 16, // Tamaño de fuente para el texto
    color: '#333', // Color del texto
    paddingHorizontal: 20, // Añade espacio horizontal para el texto
    textAlign: 'center', // Centra el texto
  },
});

export default HistoriaScreen;
