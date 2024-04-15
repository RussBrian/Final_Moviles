import * as React from "react";
import { StyleSheet, View, Text, ScrollView, ActivityIndicator } from "react-native";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importa AsyncStorage aquí

const NoticiasEspecificasScreen = () => {
  const [noticias, setNoticias] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchNoticias = async () => {
      setIsLoading(true); 
      try {
        const token = 'de79b39025bf9d291d13f9faa83dc1de' //await AsyncStorage.getItem('userToken');  Obtiene el token
        if (token) {
          const response = await axios({
            method: 'get',
            url: 'https://adamix.net/defensa_civil/def/noticias_especificas.php',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setNoticias(response.data.datos);
        } else {
          console.log('No hay token disponible');
        }
      } catch (error) {
        console.error('Error fetching noticias:', error);
      }
      setIsLoading(false);
    };
  
    fetchNoticias();
  }, []);

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  if (!noticias) {
    return <Text>No hay noticias disponibles</Text>;
  }

  return (
    <ScrollView style={styles.noticiasEspecificasScreen}>
      {noticias.map((noticia, index) => (
        <View key={index} style={styles.noticiaContainer}>
          <Text style={styles.titulo}>{noticia.titulo}</Text>
          <Text>{noticia.descripcion}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  noticiasEspecificasScreen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  noticiaContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  // ... otros estilos que necesites
});

export default NoticiasEspecificasScreen;
