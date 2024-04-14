import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, ActivityIndicator } from 'react-native';
import axios from 'axios';

const NoticiasGeneralScreen = () => {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://adamix.net/defensa_civil/def/noticias.php')
      .then(response => {
        if (response.data && response.data.datos) {
          setNoticias(response.data.datos);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al obtener las noticias:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Noticias</Text>
      <ScrollView style={styles.scrollView}>
        {noticias.map((noticia, index) => (
          <View key={noticia.id} style={styles.noticiaContainer}>
            <Text style={styles.noticiaTitulo}>{noticia.titulo}</Text>
            <Text style={styles.noticiaFecha}>{noticia.fecha}</Text>
            <Text style={styles.noticiaDescripcion}>{noticia.contenido}</Text>
            <Image source={{ uri: noticia.foto }} style={styles.noticiaImagen} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  noticiaContainer: {
    marginBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
    paddingBottom: 20,
  },
  noticiaTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  noticiaFecha: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 10,
  },
  noticiaDescripcion: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'justify',
  },
  noticiaImagen: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 5,
  },
});

export default NoticiasGeneralScreen;
