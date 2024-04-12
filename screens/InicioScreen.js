import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const [activeImage, setActiveImage] = useState(0);
  const images = [
    { source: require('../assets/icon.png') },
    { source: require('../assets/icon.png') },
    { source: require('../assets/icon.png') },
  ];

  const handleImageChange = (direction) => {
    if (direction === 'left') {
      setActiveImage(prevActiveImage => (prevActiveImage === 0 ? images.length - 1 : prevActiveImage - 1));
    } else if (direction === 'right') {
      setActiveImage(prevActiveImage => (prevActiveImage === images.length - 1 ? 0 : prevActiveImage + 1));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput placeholder="Buscar" style={styles.searchInput} />
        <TouchableOpacity onPress={() => {}}>
          <Image source={require('../assets/icon.png')} style={styles.searchIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.carousel}>
        <Image source={images[activeImage].source} style={styles.carouselImage} />

        <TouchableOpacity style={styles.carouselArrowLeft} onPress={() => handleImageChange('left')}>
          <Image source={require('../assets/icon.png')} style={styles.carouselArrowIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.carouselArrowRight} onPress={() => handleImageChange('right')}>
          <Image source={require('../assets/icon.png')} style={styles.carouselArrowIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.actionBar}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Inicio</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Configuración</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Ayuda</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  carousel: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
  },
  carouselImage: {
    width: Dimensions.get('window').width,
    height: '100%',
  },
  carouselArrowLeft: {
    position: 'absolute',
    left: 20,
    top: '50%',
    transform: [{ translateY: -50 }],
  },
  carouselArrowRight: {
    position: 'absolute',
    right: 20,
    top: '50%',
    transform: [{ translateY: -50 }],
  },
  carouselArrowIcon: {
    width: 30,
    height: 30,
  },
  actionBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  actionButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButtonText: {
    fontSize: 16,
  },
});

export default App;