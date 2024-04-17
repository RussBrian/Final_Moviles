import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const getSpecificNews = async (token) => {
  try {
    const uri = 'https://adamix.net/defensa_civil/def/noticias_especificas.php';
    const requestData = { token };
    console.log('Sending request with token:', token);
    const response = await axios.post(uri, requestData);

    if (response.status === 200) {
      const responseData = response.data;
      console.log('Response data:', responseData);
      if (responseData.exito === true) {
        return responseData.datos;
      }
    }
    return null;
  } catch (error) {
    console.error('Error fetching specific news:', error);
    return null;
  }
};

const NoticiasEspecificasScreen = ({ route }) => {
  const token = route.params.token;
  const [specificNews, setSpecificNews] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (token) {
        const news = await getSpecificNews(token);
        console.log('Received specific news:', news);
        setSpecificNews(news); // Corregir aquí, estabalecer el estado specificNews con el valor de las noticias
      }
    };
    fetchData();
  }, [token]);

  return (
    <View>
      <Text>Specific News:</Text>
      {specificNews ? (
        <Text>{specificNews}</Text> // Corregir aquí, usar specificNews en lugar de getSpecificNews
      ) : (
        <Text>No specific news available</Text>
      )}
    </View>
  );
};

export default NoticiasEspecificasScreen;
