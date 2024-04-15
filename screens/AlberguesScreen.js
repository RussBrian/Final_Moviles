import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Modal, Button } from 'react-native';
import axios from 'axios'; // Assuming axios is installed

const AlberguesScreen = () => {
  const [shelters, setShelters] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedShelter, setSelectedShelter] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    fetchShelters();
  }, []);

  const fetchShelters = async () => {
    try {
      const response = await axios.get('https://adamix.net/defensa_civil/def/albergues.php');
      setShelters(response.data.datos);
    } catch (error) {
      console.error('Error fetching shelters:', error);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredShelters = shelters.filter(shelter =>
    shelter.ciudad.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openShelterDetails = (shelter) => {
    setSelectedShelter(shelter);
    setModalVisible(true);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => openShelterDetails(item)}>
      <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
        <Text>{item.ciudad}</Text>
        <Text>{item.edificio}</Text>
        <Text>{item.coordinador}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <TextInput
        style={{ height: 40, borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 }}
        placeholder="Buscar por ciudad"
        onChangeText={handleSearch}
        value={searchQuery}
      />
      <FlatList
        data={filteredShelters}
        renderItem={renderItem}
        keyExtractor={(item) => item.codigo}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>{selectedShelter?.ciudad}</Text>
            <Text>{selectedShelter?.edificio}</Text>
            <Text>Coordinator: {selectedShelter?.coordinador}</Text>
            <Text>Telefono: {selectedShelter?.telefono}</Text>
            <Text>Capacidad: {selectedShelter?.capacidad}</Text>
            
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AlberguesScreen;