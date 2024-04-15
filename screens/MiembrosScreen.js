import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import axios from 'axios';

const MiembrosScreen = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const response = await axios.get('https://adamix.net/defensa_civil/def/miembros.php');
      setMembers(response.data.datos);
    } catch (error) {
      console.error('Error tratando de mostrar a los miembros: ', error);
    }
  };

  const renderMemberItem = ({ item }) => (
    <View style={styles.memberItem}>
      <Image source={{ uri: item.foto }} style={styles.memberImage} />
      <Text style={styles.memberName}>{item.nombre}</Text>
      <Text style={styles.memberPosition}>{item.cargo}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={members}
        renderItem={renderMemberItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  memberItem: {
    
    alignItems: 'center',
    padding: 10,
  },
  memberImage: {
    width: 400,
    height: 400,
    borderRadius: 25,
    marginRight: 10,
  },
  memberName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  memberPosition: {
    fontSize: 19,
    color: '#666',
  },
});

export default MiembrosScreen;