import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const MapaDeSituacionesScreen = () => {
  return (
    <View style={styles.mapaDeSituacionesScreen}>
      <Image
        style={styles.mapaDeSituacionesScreenChild}
        contentFit="cover"
        source={require("../assets/rectangle-7.png")}
      />
      <Image
        style={[styles.icons8Noticias642, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8noticias64-2.png")}
      />
      <Image
        style={[styles.icons8Men641, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8men64-2.png")}
      />
      <Image
        style={styles.mapaDeSituacionesScreenChild}
        contentFit="cover"
        source={require("../assets/rectangle-7.png")}
      />
      <Image
        style={[styles.icons8Men641, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8men64-2.png")}
      />
      <View style={[styles.icons8Marcapginas642, styles.icons8Position]} />
      <Text style={styles.mapaDeSituaciones}>Mapa de situaciones</Text>
      <Text style={[styles.situacionesEnProceso, styles.situacionesTypo]}>
        Situaciones en proceso.
      </Text>
      <Text style={[styles.situacionesResueltas, styles.situacionesTypo]}>
        Situaciones resueltas.
      </Text>
      <Image
        style={[styles.icons8Mapa642, styles.icons8Position]}
        contentFit="cover"
        source={require("../assets/icons8mapa64-21.png")}
      />
      <Image
        style={styles.m11Icon}
        contentFit="cover"
        source={require("../assets/m1-1.png")}
      />
      <Image
        style={styles.icons8Bsqueda641}
        contentFit="cover"
        source={require("../assets/icons8bsqueda64-1.png")}
      />
      <Image
        style={styles.mapaDeSituacionesScreenInner}
        contentFit="cover"
        source={require("../assets/rectangle-10.png")}
      />
      <Text style={styles.buscarTypo}>{`Buscar
`}</Text>
      <Image
        style={styles.icons8Bsqueda641}
        contentFit="cover"
        source={require("../assets/icons8bsqueda64-1.png")}
      />
      <Image
        style={styles.mapaDeSituacionesScreenInner}
        contentFit="cover"
        source={require("../assets/rectangle-10.png")}
      />
      <Text style={styles.buscarTypo}>{`Buscar
`}</Text>
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <View
        style={[
          styles.mapaDeSituacionesScreenChild1,
          styles.rectangleViewLayout,
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icons8Layout: {
    width: 31,
    height: 25,
    top: 6,
    position: "absolute",
  },
  icons8Position: {
    width: 26,
    left: 317,
    position: "absolute",
  },
  situacionesTypo: {
    fontSize: FontSize.size_base,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    height: 51,
    width: 200,
    textAlign: "left",
    color: Color.colorMediumblue,
    fontFamily: FontFamily.manjariRegular,
    left: 73,
    position: "absolute",
  },
  rectangleViewLayout: {
    height: 32,
    width: 25,
    left: 32,
    position: "absolute",
  },
  mapaDeSituacionesScreenChild: {
    top: -24,
    left: -10,
    width: 370,
    height: 60,
    position: "absolute",
  },
  icons8Noticias642: {
    left: 312,
    height: 25,
  },
  icons8Men641: {
    left: 14,
    height: 25,
  },
  icons8Marcapginas642: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 25,
    top: 6,
    left: 317,
  },
  mapaDeSituaciones: {
    top: 70,
    fontSize: FontSize.size_xl,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    height: 51,
    width: 200,
    textAlign: "left",
    color: Color.colorMediumblue,
    fontFamily: FontFamily.manjariRegular,
    left: 73,
    position: "absolute",
  },
  situacionesEnProceso: {
    top: 455,
  },
  situacionesResueltas: {
    top: 544,
  },
  icons8Mapa642: {
    top: 5,
    height: 26,
  },
  m11Icon: {
    top: 184,
    left: 15,
    width: 329,
    height: 215,
    position: "absolute",
  },
  icons8Bsqueda641: {
    top: 121,
    left: 290,
    width: 27,
    height: 25,
    position: "absolute",
  },
  mapaDeSituacionesScreenInner: {
    top: 122,
    left: 48,
    width: 232,
    height: 24,
    position: "absolute",
  },
  buscarTypo: {
    color: Color.colorDimgray,
    fontSize: FontSize.size_smi,
    left: 59,
    top: 133,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    height: 51,
    width: 200,
    textAlign: "left",
    fontFamily: FontFamily.manjariRegular,
    position: "absolute",
  },
  rectangleView: {
    top: 449,
    backgroundColor: "#f51515",
  },
  mapaDeSituacionesScreenChild1: {
    top: 537,
    backgroundColor: "#07e939",
  },
  mapaDeSituacionesScreen: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default MapaDeSituacionesScreen;
