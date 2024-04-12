import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Modal,
  WebView,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Example icons

const VideosScreen = ({ navigation }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const videos = [
    {
      id: '1',
      url: 'https://www.youtube.com/watch?v=jNQXAC9IVRw',
    },
    {
      id: '2',
      url: 'https://www.youtube.com/watch?v=yQwJ02b4h_U',
    },
    {
      id: '3',
      url: 'https://www.youtube.com/watch?v=55_y9VduF_g',
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleMenu}>
          <MaterialIcons name="menu" size={24} style={styles.menuIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Videos</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <MaterialIcons name="home" size={24} style={styles.homeIcon} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.videosContainer}>
        {videos.map((video) => (
          <View key={video.id} style={styles.videoContainer}>
            <WebView
              ref={videoRef}
              source={{ uri: video.url }}
              style={styles.video}
              allowsFullscreenVideo={true}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              onError={(syntheticEvent) => {
                console.log('WebView error:', syntheticEvent.nativeEvent);
              }}
            />
          </View>
        ))}
      </ScrollView>

      <Modal visible={isMenuOpen} animationType="fade" transparent>
        <View style={styles.menuContainer}>
          <ScrollView style={styles.menuScrollView}>
            <TouchableOpacity onPress={() => navigation.navigate('News')}>
              <Text style={styles.menuItem}>Noticias Específicas</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Report')}>
              <Text style={styles.menuItem}>Reportar situación</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('MySituations')}>
              <Text style={styles.menuItem}>Mis situaciones</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Map')}>
              <Text style={styles.menuItem}>Mapa de situaciones</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
              <Text style={styles.menuItem}>Configuración</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}}>
              <Text style={styles.menuItem}>Salir</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuIcon: {
    marginRight: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  homeIcon: {
    marginLeft: 20,
  },
  videosContainer: {
    flex: 1,
  },
  videoContainer: {
    marginBottom: 20,
  },
  video: {
    width: '100%',
    height: 200,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuContainer: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10, 
    padding: 20,
  },
  menuItem: {
    fontSize: 18,
    padding: 10,
    borderBottomWidth: 1, 
    borderBottomColor: '#ccc', 
  },
});

export default VideosScreen;