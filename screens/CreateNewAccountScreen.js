import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import { useAuth } from 'screens/AuthProvider.js';

const getSpecificNews = async (authProvider) => {
  try {
    const uri = 'https://adamix.net/defensa_civil/def/noticias_especificas.php';
    const requestData = { token: authProvider.token };
    const response = await axios.post(uri, requestData);

    if (response.status === 200) {
      const responseData = response.data;
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

const NewsComponent = () => {
  const { token } = useAuth();
  const [specificNews, setSpecificNews] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (token) {
        const news = await getSpecificNews({ token });
        setSpecificNews(news);
      }
    };
    fetchData();
  }, [token]);

  return (
    <View>
      <Text>Specific News:</Text>
      {specificNews ? (
        <Text>{specificNews}</Text>
      ) : (
        <Text>No specific news available</Text>
      )}
    </View>
  );
};

export default NewsComponent;
