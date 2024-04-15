import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const MedidasScreen = () => {
  const [emergencyData, setEmergencyData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://adamix.net/defensa_civil/def/medidas_preventivas.php');
      const data = await response.json();
      setEmergencyData(data.datos);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.foto }} style={styles.image} />
      <Text style={styles.title}>{item.titulo}</Text>
      <Text style={styles.descripcion}>{item.descripcion}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={emergencyData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  descripcion:{
    textAlign:'justify',
    fontSize:15
  }
});

export default MedidasScreen;