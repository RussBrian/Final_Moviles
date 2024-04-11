import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const ServiciosDisplayScreen = () => {
  return (
    <View style={styles.serviciosDisplayScreen}>
      <Image
        style={[styles.serviciosDisplayScreenChild, styles.serviciosLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-7.png")}
      />
      <Image
        style={[styles.icons8Noticias642, styles.icons8Layout2]}
        contentFit="cover"
        source={require("../assets/icons8noticias64-2.png")}
      />
      <Image
        style={[styles.icons8Men641, styles.icons8Position]}
        contentFit="cover"
        source={require("../assets/icons8men64-2.png")}
      />
      <Image
        style={[styles.serviciosDisplayScreenChild, styles.serviciosLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-7.png")}
      />
      <Image
        style={[styles.serviciosDisplayScreenInner, styles.serviciosLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-15.png")}
      />
      <Image
        style={[styles.icons8Men641, styles.icons8Position]}
        contentFit="cover"
        source={require("../assets/icons8men64-2.png")}
      />
      <Text style={styles.servicios}>{`Servicios
`}</Text>
      <Image
        style={[styles.icons8Historia64, styles.icons8Position]}
        contentFit="cover"
        source={require("../assets/icons8historia64.png")}
      />
      <Image
        style={[styles.icons8Servicio64, styles.icons8Layout1]}
        contentFit="cover"
        source={require("../assets/icons8servicio64.png")}
      />
      <Image
        style={[styles.icons8CarpetaDePelculas64, styles.icons8Layout1]}
        contentFit="cover"
        source={require("../assets/icons8carpetadepelculas64.png")}
      />
      <Image
        style={[styles.icons8Peligro64, styles.icons8Layout1]}
        contentFit="cover"
        source={require("../assets/icons8peligro64.png")}
      />
      <Image
        style={[styles.icons8IntermitenteDeAdverte, styles.icons8Layout1]}
        contentFit="cover"
        source={require("../assets/icons8intermitentedeadvertenciadepeligro64.png")}
      />
      <Image
        style={[styles.icons8HombrePolica64, styles.icons8Layout1]}
        contentFit="cover"
        source={require("../assets/icons8hombrepolica64.png")}
      />
      <Image
        style={[styles.icons8Voluntario64, styles.icons8Layout1]}
        contentFit="cover"
        source={require("../assets/icons8voluntario64.png")}
      />
      <View style={[styles.rectangleView, styles.serviciosChildShadowBox1]} />
      <Text style={[styles.servicio1, styles.servicioTypo1]}>Servicio 1</Text>
      <Image
        style={[styles.icons8Desplegable647, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-1.png")}
      />
      <Image
        style={[styles.icons8Desplegable647, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-1.png")}
      />
      <Image
        style={[styles.icons8Desplegable647, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-1.png")}
      />
      <View
        style={[
          styles.serviciosDisplayScreenChild1,
          styles.serviciosChildShadowBox1,
        ]}
      />
      <Text style={[styles.servicio11, styles.servicioTypo1]}>Servicio 1</Text>
      <Image
        style={[styles.icons8Desplegable647, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-1.png")}
      />
      <Image
        style={[styles.icons8Desplegable647, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-1.png")}
      />
      <Image
        style={[styles.icons8Desplegable647, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-1.png")}
      />
      <View
        style={[
          styles.serviciosDisplayScreenChild2,
          styles.serviciosChildShadowBox1,
        ]}
      />
      <Text style={[styles.servicio12, styles.servicioTypo1]}>Servicio 1</Text>
      <View
        style={[
          styles.serviciosDisplayScreenChild3,
          styles.serviciosChildShadowBox1,
        ]}
      />
      <Text style={[styles.servicio, styles.servicioTypo1]}>Servicio</Text>
      <Image
        style={[styles.icons8Desplegable6416, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-1.png")}
      />
      <Image
        style={[styles.icons8Desplegable6416, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-1.png")}
      />
      <Image
        style={[styles.icons8Desplegable6416, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-1.png")}
      />
      <View style={styles.serviciosChildShadowBox} />
      <Text style={styles.servicioTypo}>Servicio 1</Text>
      <Image
        style={[styles.icons8Desplegable6419, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-1.png")}
      />
      <Image
        style={[styles.icons8Desplegable6419, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-1.png")}
      />
      <Image
        style={[styles.icons8Desplegable6419, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-1.png")}
      />
      <View style={styles.serviciosChildShadowBox} />
      <Text style={styles.servicioTypo}>Servicio 3</Text>
      <Image
        style={[styles.icons8Desplegable6419, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-1.png")}
      />
      <Image
        style={[styles.icons8Desplegable6419, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-1.png")}
      />
      <Image
        style={[styles.icons8Desplegable6419, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-1.png")}
      />
      <View
        style={[
          styles.serviciosDisplayScreenChild6,
          styles.serviciosChildShadowBox1,
        ]}
      />
      <Text style={[styles.servicio4, styles.servicioTypo1]}>Servicio 4</Text>
      <Image
        style={[styles.icons8Desplegable6425, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-1.png")}
      />
      <Image
        style={[styles.icons8Desplegable6425, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-1.png")}
      />
      <Image
        style={[styles.icons8Desplegable6425, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-1.png")}
      />
      <Image
        style={styles.rectangleIcon}
        contentFit="cover"
        source={require("../assets/rectangle-32.png")}
      />
      <Text style={styles.descripcinDelServicio}>
        Descripción del servicio blablabla.
      </Text>
      <Image
        style={styles.icons8ClasificarArriba642}
        contentFit="cover"
        source={require("../assets/icons8clasificararriba64-1.png")}
      />
      <Image
        style={styles.icons8PginaPrincipal642}
        contentFit="cover"
        source={require("../assets/icons8pginaprincipal64-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  serviciosLayout: {
    height: 60,
    width: 370,
    position: "absolute",
  },
  icons8Layout2: {
    height: 25,
    width: 31,
    top: 6,
  },
  icons8Position: {
    left: 14,
    position: "absolute",
  },
  icons8Layout1: {
    width: 25,
    height: 25,
    position: "absolute",
  },
  serviciosChildShadowBox1: {
    height: 78,
    width: 291,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorLightsteelblue,
    left: 35,
    position: "absolute",
  },
  servicioTypo1: {
    height: 47,
    width: 177,
    left: 63,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    color: Color.colorMediumblue,
    fontFamily: FontFamily.manjariRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  icons8Layout: {
    height: 30,
    width: 36,
    left: 247,
    position: "absolute",
  },
  serviciosDisplayScreenChild: {
    top: -24,
    left: -10,
  },
  icons8Noticias642: {
    left: 312,
    position: "absolute",
  },
  icons8Men641: {
    height: 25,
    width: 31,
    top: 6,
  },
  serviciosDisplayScreenInner: {
    top: 588,
    left: -5,
  },
  servicios: {
    top: 92,
    left: 131,
    width: 200,
    height: 51,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorMediumblue,
    fontFamily: FontFamily.manjariRegular,
    position: "absolute",
  },
  icons8Historia64: {
    width: 24,
    height: 24,
    top: 601,
  },
  icons8Servicio64: {
    top: 600,
    left: 64,
  },
  icons8CarpetaDePelculas64: {
    left: 117,
    top: 601,
  },
  icons8Peligro64: {
    left: 174,
    top: 601,
  },
  icons8IntermitenteDeAdverte: {
    left: 222,
    top: 601,
  },
  icons8HombrePolica64: {
    left: 270,
    top: 601,
  },
  icons8Voluntario64: {
    left: 318,
    top: 601,
  },
  rectangleView: {
    top: 143,
    height: 78,
    width: 291,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorLightsteelblue,
  },
  servicio1: {
    top: 174,
    width: 177,
    left: 63,
  },
  icons8Desplegable647: {
    top: 167,
  },
  serviciosDisplayScreenChild1: {
    top: 143,
    height: 78,
    width: 291,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorLightsteelblue,
  },
  servicio11: {
    top: 174,
    width: 177,
    left: 63,
  },
  serviciosDisplayScreenChild2: {
    top: 143,
    height: 78,
    width: 291,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorLightsteelblue,
  },
  servicio12: {
    top: 174,
    width: 177,
    left: 63,
  },
  serviciosDisplayScreenChild3: {
    top: 242,
  },
  servicio: {
    top: 273,
  },
  icons8Desplegable6416: {
    top: 266,
  },
  serviciosChildShadowBox: {
    top: 341,
    height: 78,
    width: 291,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorLightsteelblue,
    left: 35,
    position: "absolute",
  },
  servicioTypo: {
    top: 372,
    height: 47,
    width: 177,
    left: 63,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    color: Color.colorMediumblue,
    fontFamily: FontFamily.manjariRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  icons8Desplegable6419: {
    top: 365,
  },
  serviciosDisplayScreenChild6: {
    top: 440,
  },
  servicio4: {
    top: 471,
  },
  icons8Desplegable6425: {
    top: 464,
  },
  rectangleIcon: {
    top: 221,
    width: 292,
    height: 205,
    left: 35,
    position: "absolute",
  },
  descripcinDelServicio: {
    top: 267,
    fontSize: 24,
    width: 204,
    left: 64,
    textAlign: "left",
    color: Color.colorMediumblue,
    fontFamily: FontFamily.manjariRegular,
    position: "absolute",
  },
  icons8ClasificarArriba642: {
    top: 161,
    height: 36,
    width: 36,
    left: 247,
    position: "absolute",
  },
  icons8PginaPrincipal642: {
    top: 5,
    left: 313,
    width: 26,
    height: 26,
    position: "absolute",
  },
  serviciosDisplayScreen: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default ServiciosDisplayScreen;
