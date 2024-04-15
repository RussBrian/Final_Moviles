
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
import MapaAlberguesScreen from "./screens/MapaAlberguesScreen";
import CambiarContraseaScreen from "./screens/CambiarContraseaScreen";
import CerrarSesinScreen from "./screens/CerrarSesinScreen";
import InicioScreen from "./screens/InicioScreen";
import HistoriaScreen from "./screens/HistoriaScreen";
import ServiciosGeneralScreen from "./screens/ServiciosGeneralScreen";
import NoticiasGeneralScreen from "./screens/NoticiasGeneralScreen";
import MiembrosScreen from "./screens/MiembrosScreen";
import VideosScreen from "./screens/VideosScreen";
import AlberguesScreen from "./screens/AlberguesScreen";
import MedidasScreen from "./screens/MedidasScreen";
import RegistroMiembroScreen from "./screens/RegistroMiembroScreen";

import { createDrawerNavigator } from '@react-navigation/drawer';
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
              name="Inicio"
              component={InicioMenuScreen}
              
            />
            <drawer.Screen
              name="Historia"
              component={HistoriaScreen}
              
            />
            <drawer.Screen
              name="Servicios"
              component={ServiciosGeneralScreen}
              
            />
            <drawer.Screen
              name="Noticias"
              component={NoticiasGeneralScreen}
              
            />
            <drawer.Screen
              name="Videos"
              component={VideosScreen}
              
            />
              <drawer.Screen
              name="Albergues"
              component={AlberguesScreen}
              
            />
            <drawer.Screen
              name="Mapas de Albergues"
              component={MapaAlberguesScreen}
             
            />
            <drawer.Screen
              name="Medidas Preventivas"
              component={MedidasScreen}
           
            />
            <drawer.Screen
              name="Miembros"
              component={MiembrosScreen}
              
            />
            <drawer.Screen
              name="Quiero ser Voluntario"
              component={RegistroMiembroScreen}
              
            />
            <drawer.Screen
              name="Acerca de"
              component={HistoriaScreen} //Modificar el screen
             
            />
            <drawer.Screen
              name="Iniciar Sesion"
              component={InicioScreen}
              
            />
            <drawer.Screen
              name="Noticias Especificas"
              component={NoticiasEspecificasScreen}
              
            />
            <drawer.Screen
              name="Reportar Situacion"
              component={ReportarSituacionScreen}
              
            />
            <drawer.Screen
              name="Mis situaciones"
              component={MisSituacionesGeneralScreen}
              
            />
            <drawer.Screen
              name="Mapa de situaciones"
              component={MapaDeSituacionesScreen}
              
            />
            <drawer.Screen
              name="Cambiar Contraseña"
              component={CambiarContraseaScreen}
             
            />
            
          </drawer.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
