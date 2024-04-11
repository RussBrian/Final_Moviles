const Stack = createNativeStackNavigator();
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

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

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
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="LogInScreen"
              component={LogInScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreateNewAccountScreen"
              component={CreateNewAccountScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InicioMenuScreen"
              component={InicioMenuScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NoticiasEspecificasScreen"
              component={NoticiasEspecificasScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ReportarSituacionScreen"
              component={ReportarSituacionScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MisSituacionesGeneralScreen"
              component={MisSituacionesGeneralScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MapaDeSituacionesScreen"
              component={MapaDeSituacionesScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MisSituacionesDisplayScreen"
              component={MisSituacionesDisplayScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CambiarContraseaScreen"
              component={CambiarContraseaScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CerrarSesinScreen"
              component={CerrarSesinScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InicioScreen"
              component={InicioScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HistoriaScreen"
              component={HistoriaScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ServiciosGeneralScreen"
              component={ServiciosGeneralScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ServiciosDisplayScreen"
              component={ServiciosDisplayScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MiembrosScreen"
              component={MiembrosScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MiembrosScreen1"
              component={MiembrosScreen1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MiembrosScreen2"
              component={MiembrosScreen2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VideosScreen"
              component={VideosScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AlberguesScreen"
              component={AlberguesScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MedidasScreen"
              component={MedidasScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
