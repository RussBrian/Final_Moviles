
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import LogInScreen from "./screens/LogInScreen";
import CreateNewAccountScreen from "./screens/CreateNewAccountScreen";
import InicioMenuScreen from "./screens/InicioMenuScreen";
import NoticiasEspecificasScreen from "./screens/NoticiasEspecificasScreen";
import ReportarSituacionScreen from "./screens/ReportarSituacionScreen";
import MisSituacionesGeneralScreen from "./screens/MisSituacionesGeneralScreen";
import MapaDeSituacionesScreen from "./screens/MapaDeSituacionesScreen";
import MisSituacionesDisplayScreen from "./screens/MisSituacionesDisplayScreen";
import CambiarContraseaScreen from "./screens/CambiarContraseaScreen";
import CerrarSesinScreen from "./screens/CerrarSesinScreen";
import InicioScreen from "./screens/InicioScreen";
import HistoriaScreen from "./screens/HistoriaScreen";
import ServiciosGeneralScreen from "./screens/ServiciosGeneralScreen";
import ServiciosDisplayScreen from "./screens/ServiciosDisplayScreen";
import MiembrosScreen from "./screens/MiembrosScreen";
import MiembrosScreen1 from "./screens/MiembrosScreen1";
import MiembrosScreen2 from "./screens/MiembrosScreen2";
import VideosScreen from "./screens/VideosScreen";
import AlberguesScreen from "./screens/AlberguesScreen";
import MedidasScreen from "./screens/MedidasScreen";

import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, Pressable, TouchableOpacity } from "react-native";
const drawer = createDrawerNavigator();
const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Manjari-Regular": require("./assets/fonts/Manjari-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <drawer.Navigator initialRouteName="ServiciosGeneralScreen">
            <drawer.Screen
              name="LogInScreen"
              component={LogInScreen}
              
            />
            <drawer.Screen
              name="CreateNewAccountScreen"
              component={CreateNewAccountScreen}
              
            />
            <drawer.Screen
              name="InicioMenuScreen"
              component={InicioMenuScreen}
              
            />
            <drawer.Screen
              name="NoticiasEspecificasScreen"
              component={NoticiasEspecificasScreen}
              
            />
            <drawer.Screen
              name="ReportarSituacionScreen"
              component={ReportarSituacionScreen}
              
            />
            <drawer.Screen
              name="MisSituacionesGeneralScreen"
              component={MisSituacionesGeneralScreen}
             
            />
            <drawer.Screen
              name="MapaDeSituacionesScreen"
              component={MapaDeSituacionesScreen}
           
            />
            <drawer.Screen
              name="MisSituacionesDisplayScreen"
              component={MisSituacionesDisplayScreen}
              
            />
            <drawer.Screen
              name="CambiarContraseaScreen"
              component={CambiarContraseaScreen}
              
            />
            <drawer.Screen
              name="CerrarSesinScreen"
              component={CerrarSesinScreen}
             
            />
            <drawer.Screen
              name="InicioScreen"
              component={InicioScreen}
              
            />
            <drawer.Screen
              name="HistoriaScreen"
              component={HistoriaScreen}
              
            />
            <drawer.Screen
              name="ServiciosGeneralScreen"
              component={ServiciosGeneralScreen}
              
            />
            <drawer.Screen
              name="ServiciosDisplayScreen"
              component={ServiciosDisplayScreen}
              
            />
            <drawer.Screen
              name="MiembrosScreen"
              component={MiembrosScreen}
              
            />
            <drawer.Screen
              name="MiembrosScreen1"
              component={MiembrosScreen1}
             
            />
            <drawer.Screen
              name="MiembrosScreen2"
              component={MiembrosScreen2}
              
            />
            <drawer.Screen
              name="VideosScreen"
              component={VideosScreen}
              
            />
            <drawer.Screen
              name="AlberguesScreen"
              component={AlberguesScreen}
              
            />
            <drawer.Screen
              name="MedidasScreen"
              component={MedidasScreen}
              
            />
          </drawer.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
