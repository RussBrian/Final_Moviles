import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const InicioScreen = () => {
  return (
    <View style={styles.inicioScreen}>
      <Image
        style={styles.icons8Bsqueda641}
        contentFit="cover"
        source={require("../assets/icons8bsqueda64-1.png")}
      />
      <Image
        style={[styles.inicioScreenChild, styles.rectangleIconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-7.png")}
      />
      <Image
        style={[styles.icons8Noticias642, styles.icons8Layout2]}
        contentFit="cover"
        source={require("../assets/icons8noticias64-2.png")}
      />
      <Image
        style={[styles.icons8Men641, styles.icons8Layout2]}
        contentFit="cover"
        source={require("../assets/icons8men64-2.png")}
      />
      <Image
        style={[styles.inicioScreenItem, styles.inicioScreenItemLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-10.png")}
      />
      <Text style={[styles.buscar, styles.buscarTypo]}>{`Buscar
`}</Text>
      <Image
        style={styles.icons8Bsqueda641}
        contentFit="cover"
        source={require("../assets/icons8bsqueda64-1.png")}
      />
      <Image
        style={[styles.inicioScreenChild, styles.rectangleIconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-7.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-15.png")}
      />
      <Image
        style={[styles.icons8Men641, styles.icons8Layout2]}
        contentFit="cover"
        source={require("../assets/icons8men64-2.png")}
      />
      <Image
        style={[styles.inicioScreenItem, styles.inicioScreenItemLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-14.png")}
      />
      <Text style={[styles.buscar1, styles.buscarTypo]}>{`Buscar
`}</Text>
      <Image
        style={styles.inicioScreenChild2}
        contentFit="cover"
        source={require("../assets/rectangle-29.png")}
      />
      <Image
        style={[styles.icons8Adelante641, styles.icons8Layout1]}
        contentFit="cover"
        source={require("../assets/icons8adelante64-1.png")}
      />
      <Image
        style={[styles.icons8Atrs641, styles.icons8Layout1]}
        contentFit="cover"
        source={require("../assets/icons8atrs64-1.png")}
      />
      <Text style={[styles.inicio, styles.buscarTypo]}>{`Inicio
`}</Text>
      <Image
        style={styles.icons8PginaPrincipal641}
        contentFit="cover"
        source={require("../assets/icons8pginaprincipal64-1.png")}
      />
      <Image
        style={[styles.icons8Historia64, styles.inicioScreenItemLayout]}
        contentFit="cover"
        source={require("../assets/icons8historia64.png")}
      />
      <Image
        style={[styles.icons8Servicio64, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8servicio64.png")}
      />
      <Image
        style={[styles.icons8CarpetaDePelculas64, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8carpetadepelculas64.png")}
      />
      <Image
        style={[styles.icons8Peligro64, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8peligro64.png")}
      />
      <Image
        style={[styles.icons8IntermitenteDeAdverte, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8intermitentedeadvertenciadepeligro64.png")}
      />
      <Image
        style={[styles.icons8HombrePolica64, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8hombrepolica64.png")}
      />
      <Image
        style={[styles.icons8Voluntario64, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8voluntario64.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleIconLayout: {
    height: 60,
    width: 370,
    position: "absolute",
  },
  icons8Layout2: {
    width: 31,
    top: 6,
    height: 25,
    position: "absolute",
  },
  inicioScreenItemLayout: {
    height: 24,
    position: "absolute",
  },
  buscarTypo: {
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
  icons8Layout1: {
    height: 35,
    width: 35,
    top: 318,
    position: "absolute",
  },
  icons8Layout: {
    width: 25,
    height: 25,
    position: "absolute",
  },
  icons8Bsqueda641: {
    top: 146,
    left: 295,
    width: 27,
    height: 25,
    position: "absolute",
  },
  inicioScreenChild: {
    top: -24,
    left: -10,
  },
  icons8Noticias642: {
    left: 312,
  },
  icons8Men641: {
    left: 14,
  },
  inicioScreenItem: {
    top: 147,
    left: 53,
    width: 232,
  },
  buscar: {
    color: Color.colorDimgray,
    fontSize: FontSize.size_smi,
    top: 158,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    height: 51,
    width: 200,
    textAlign: "left",
    fontFamily: FontFamily.manjariRegular,
    left: 64,
  },
  rectangleIcon: {
    top: 588,
    left: -5,
  },
  buscar1: {
    color: Color.colorDimgray,
    fontSize: FontSize.size_smi,
    top: 158,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    height: 51,
    width: 200,
    textAlign: "left",
    fontFamily: FontFamily.manjariRegular,
    left: 64,
  },
  inicioScreenChild2: {
    top: 236,
    left: 42,
    width: 266,
    height: 199,
    position: "absolute",
  },
  icons8Adelante641: {
    left: 317,
  },
  icons8Atrs641: {
    left: -2,
  },
  inicio: {
    top: 96,
    left: 147,
    fontSize: FontSize.size_xl,
    color: Color.colorMediumblue,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    height: 51,
    width: 200,
    textAlign: "left",
    fontFamily: FontFamily.manjariRegular,
  },
  icons8PginaPrincipal641: {
    top: 5,
    left: 323,
    width: 26,
    height: 26,
    position: "absolute",
  },
  icons8Historia64: {
    width: 24,
    top: 601,
    left: 14,
  },
  icons8Servicio64: {
    top: 600,
    left: 64,
    width: 25,
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
  inicioScreen: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default InicioScreen;
