import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const HistoriaScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/icon.png")}
        style={styles.image}
        resizeMode="contain"
      />
       <Text style={styles.text}>
        <Text style={styles.heading}>Historia de la Defensa Civil:</Text>
        {"\n\n"}
        La historia de la Defensa Civil de la República Dominicana se remonta a sus inicios en la década de 1960. Fue creada como respuesta a la necesidad de contar con un organismo especializado en la prevención y atención de desastres naturales y emergencias en el país. Su creación se enmarca en un contexto donde la República Dominicana, al igual que otras naciones del Caribe y América Latina, enfrentaba constantes amenazas por fenómenos como huracanes, terremotos, inundaciones y otros eventos catastróficos.
        {"\n\n"}
        El 22 de noviembre de 1962, el entonces presidente dominicano, Joaquín Balaguer, emitió el decreto ley número 245 que creaba oficialmente la Defensa Civil en el país. Este organismo tenía como objetivo principal coordinar las acciones de prevención, mitigación y respuesta ante desastres naturales, así como promover la educación y concienciación pública sobre la importancia de la preparación para emergencias.
        {"\n\n"}
        Desde su fundación, la Defensa Civil ha tenido que enfrentar numerosos desafíos y situaciones de emergencia. En las décadas posteriores a su creación, el país ha experimentado varios eventos sísmicos y climáticos significativos, que han puesto a prueba la capacidad de respuesta del organismo y de la sociedad dominicana en su conjunto.
        {"\n\n"}
        Uno de los momentos más críticos en la historia reciente de la Defensa Civil fue el paso del huracán David en 1979 y el huracán Georges en 1998. Estos fenómenos meteorológicos dejaron un rastro de destrucción y pérdidas humanas en su paso por la República Dominicana, lo que resaltó la importancia de contar con una institución preparada y capacitada para hacer frente a tales situaciones.
        {"\n\n"}
        A lo largo de los años, la Defensa Civil ha evolucionado en términos de estructura, capacitación y tecnología, adaptándose a las cambiantes necesidades y desafíos que plantean los desastres naturales y las emergencias. Se ha fortalecido la colaboración con otros organismos nacionales e internacionales, así como con la sociedad civil y el sector privado, para mejorar la capacidad de respuesta y reducir el impacto de los desastres en la población y el país en general.
        {"\n\n"}
        Hoy en día, la Defensa Civil de la República Dominicana juega un papel crucial en la protección de la vida y los bienes de los dominicanos ante situaciones de emergencia. A través de la prevención, la preparación y la respuesta oportuna, continúa trabajando para garantizar la seguridad y el bienestar de la población en caso de desastres naturales y otras emergencias.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: '90%',
    height: 200,
    marginVertical: 20,
  },
  text: {
    fontSize: 16,
    color: '#333',
    paddingHorizontal: 20,
    textAlign: 'center',
  },
});

export default HistoriaScreen;
