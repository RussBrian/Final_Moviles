import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, Image } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MisSituacionesGeneralScreen = () => {
  const [situaciones, setSituaciones] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //const token = '';

  useEffect(() => {
    const fetchSituaciones = async () => {
      setIsLoading(true);
      try {
        const token = await AsyncStorage.getItem('userToken');
        if (!token) {
          throw new Error('Token no disponible');
        }
        const response = await axios.get('https://adamix.net/defensa_civil/def/situaciones.php', {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.data.exito) {
          setSituaciones(response.data.datos);
        } else {
          Alert.alert("Error", response.data.mensaje || "No se pudieron obtener las situaciones.");
        }
      } catch (error) {
        Alert.alert("Error", error.message || "Error al obtener situaciones.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchSituaciones();
  }, []);

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <ScrollView style={styles.container}>
      {situaciones.length > 0 ? situaciones.map((situacion, index) => (
        <View key={index} style={styles.situacionItem}>
          <Text style={styles.title}>{situacion.titulo}</Text>
          <Text>{situacion.descripcion}</Text>
          <Image style={styles.image} source={{ uri: situacion.foto }} />
          <Text>{`Fecha: ${situacion.fecha}`}</Text>
          <Text>{`Estado: ${situacion.estado}`}</Text>
        </View>
      )) : (
        <Text style={styles.noData}>No has reportado ninguna situación aún.</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  situacionItem: {
    marginVertical: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 4,
    marginVertical: 8,
  },
  noData: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
});

export default MisSituacionesGeneralScreen;
