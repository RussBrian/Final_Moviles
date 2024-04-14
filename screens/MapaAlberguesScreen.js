import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import axios from 'axios';

const MapaAlberguesScreen = () => {
  const [albergue, setAlbergue] = useState([]);

  useEffect(() => {
    fetchAlbergues();
  }, []);

  const fetchAlbergues = async () => {
    try {
      const response = await axios.get('https://adamix.net/defensa_civil/def/albergues.php');
      setAlbergue(response.data.datos);
    } catch (error) {
      console.error('Error fetching shelters:', error);
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 18.475,
          longitude: -69.9,
          latitudeDelta: 0.2,
          longitudeDelta: 0.2,
        }}
      >
        {albergue.map((albergue, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: parseFloat(albergue.lng),
              longitude: parseFloat(albergue.lat),
            }}
          >
            <Callout>
              <View>
                <Text>{albergue.edificio}</Text>
                <Text>{albergue.ciudad}</Text>
                <Text>{albergue.coordinador}</Text>
                <Text>{albergue.telefono}</Text>
                <Text>{albergue.capacidad}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MapaAlberguesScreen;
