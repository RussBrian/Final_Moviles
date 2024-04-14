import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import axios from "axios";

const ServiciosGeneralScreen = () => {
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    axios
      .get("https://adamix.net/defensa_civil/def/servicios.php")
      .then(response => {
        if (response.data && response.data.datos) {
          setServicios(response.data.datos);
        }
      })
      .catch(error => {
        console.error("Error al obtener los servicios:", error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Servicios</Text>
      <ScrollView style={styles.scrollView}>
        {servicios.map(servicio => (
          <View key={servicio.id} style={styles.servicioContainer}>
            <Text style={styles.servicioNombre}>{servicio.nombre}</Text>
            <Text style={styles.servicioDescripcion}>{servicio.descripcion}</Text>
            <Image source={{ uri: servicio.foto }} style={styles.servicioImagen} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  scrollView: {
    flex: 1,
    width: "100%",
  },
  servicioContainer: {
    marginBottom: 30,
  },
  servicioNombre: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  servicioDescripcion: {
    fontSize: 16,
    marginBottom: 10,
    textAlign:'justify'
  },
  servicioImagen: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
});

export default ServiciosGeneralScreen;