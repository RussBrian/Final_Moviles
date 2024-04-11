import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const ReportarSituacionScreen = () => {
  return (
    <View style={styles.reportarSituacionScreen}>
      <Image
        style={styles.reportarSituacionScreenChild}
        contentFit="cover"
        source={require("../assets/rectangle-7.png")}
      />
      <Image
        style={[styles.icons8Noticias642, styles.icons8Position]}
        contentFit="cover"
        source={require("../assets/icons8noticias64-2.png")}
      />
      <Image
        style={[styles.icons8Men641, styles.icons8Position]}
        contentFit="cover"
        source={require("../assets/icons8men64-2.png")}
      />
      <Image
        style={styles.reportarSituacionScreenChild}
        contentFit="cover"
        source={require("../assets/rectangle-7.png")}
      />
      <Image
        style={[styles.icons8Men641, styles.icons8Position]}
        contentFit="cover"
        source={require("../assets/icons8men64-2.png")}
      />
      <Image
        style={[styles.icons8Marcapginas642, styles.icons8Position]}
        contentFit="cover"
        source={require("../assets/icons8marcapginas64-2.png")}
      />
      <View
        style={[
          styles.reportarSituacionScreenInner,
          styles.reportarChildShadowBox,
        ]}
      />
      <View style={[styles.rectangleView, styles.reportarChildShadowBox]} />
      <Text style={[styles.descripcinDeLa, styles.imagenDeLaTypo]}>
        Descripción de la situación
      </Text>
      <View
        style={[
          styles.reportarSituacionScreenChild1,
          styles.reportarChildShadowBox,
        ]}
      />
      <Text style={[styles.imagenDeLa, styles.imagenDeLaTypo]}>
        Imagen de la situación
      </Text>
      <View
        style={[
          styles.reportarSituacionScreenChild2,
          styles.reportarChildShadowBox,
        ]}
      />
      <Text style={[styles.reportarSituacin, styles.imagenDeLaTypo]}>
        Reportar situación
      </Text>
      <Image
        style={styles.icons8Mapa642}
        contentFit="cover"
        source={require("../assets/icons8mapa64-2.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-3.png")}
      />
      <Image
        style={[styles.icons8EmojiDeMarcaDeVerif, styles.rectangleIconPosition]}
        contentFit="cover"
        source={require("../assets/icons8emojidemarcadeverificacin48-11.png")}
      />
      <Image
        style={styles.icons8CuadroDeTexto641}
        contentFit="cover"
        source={require("../assets/icons8cuadrodetexto64-1.png")}
      />
      <Image
        style={[styles.icons8Texto641, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8texto64-1.png")}
      />
      <Image
        style={[styles.icons8Foto641, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8foto64-1.png")}
      />
      <Text style={[styles.tituloDeLa, styles.imagenDeLaTypo]}>
        Titulo de la situación
      </Text>
      <Text style={[styles.localizacinDeLa, styles.imagenDeLaTypo]}>
        Localización de la situación
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  icons8Position: {
    height: 25,
    top: 6,
    position: "absolute",
  },
  reportarChildShadowBox: {
    height: 47,
    width: 235,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorLightsteelblue,
    left: 58,
    position: "absolute",
  },
  imagenDeLaTypo: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    fontFamily: FontFamily.manjariRegular,
    position: "absolute",
  },
  rectangleIconPosition: {
    top: 534,
    position: "absolute",
  },
  icons8Layout: {
    width: 29,
    height: 29,
    left: 66,
    position: "absolute",
  },
  reportarSituacionScreenChild: {
    top: -24,
    left: -10,
    width: 370,
    height: 60,
    position: "absolute",
  },
  icons8Noticias642: {
    left: 312,
    width: 31,
    height: 25,
    top: 6,
  },
  icons8Men641: {
    left: 14,
    width: 31,
    height: 25,
    top: 6,
  },
  icons8Marcapginas642: {
    left: 317,
    width: 26,
    height: 25,
    top: 6,
  },
  reportarSituacionScreenInner: {
    top: 151,
  },
  rectangleView: {
    top: 244,
  },
  descripcinDeLa: {
    top: 260,
    height: 22,
    width: 153,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    fontFamily: FontFamily.manjariRegular,
    fontSize: FontSize.size_xs,
    left: 106,
  },
  reportarSituacionScreenChild1: {
    top: 337,
  },
  imagenDeLa: {
    top: 353,
    height: 22,
    width: 153,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    fontFamily: FontFamily.manjariRegular,
    fontSize: FontSize.size_xs,
    left: 106,
  },
  reportarSituacionScreenChild2: {
    top: 430,
  },
  reportarSituacin: {
    top: 88,
    left: 95,
    fontSize: FontSize.size_xl,
    color: Color.colorMediumblue,
    width: 200,
    height: 51,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    fontFamily: FontFamily.manjariRegular,
  },
  icons8Mapa642: {
    top: 437,
    width: 25,
    height: 29,
    left: 66,
    position: "absolute",
  },
  rectangleIcon: {
    left: 122,
    width: 107,
    height: 50,
  },
  icons8EmojiDeMarcaDeVerif: {
    left: 162,
    width: 27,
    height: 42,
  },
  icons8CuadroDeTexto641: {
    top: 160,
    left: 63,
    width: 30,
    height: 30,
    position: "absolute",
  },
  icons8Texto641: {
    top: 253,
  },
  icons8Foto641: {
    top: 349,
  },
  tituloDeLa: {
    top: 167,
    width: 128,
    height: 15,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    fontFamily: FontFamily.manjariRegular,
    fontSize: FontSize.size_xs,
    left: 106,
  },
  localizacinDeLa: {
    top: 445,
    height: 22,
    width: 153,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    fontFamily: FontFamily.manjariRegular,
    fontSize: FontSize.size_xs,
    left: 106,
  },
  reportarSituacionScreen: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default ReportarSituacionScreen;
