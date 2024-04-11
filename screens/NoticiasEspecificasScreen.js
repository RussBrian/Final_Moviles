import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const NoticiasEspecificasScreen = () => {
  return (
    <View style={styles.noticiasEspecificasScreen}>
      <View
        style={[styles.noticiasEspecificasScreenChild, styles.noticiasLayout]}
      />
      <Image
        style={styles.icons8Bsqueda641}
        contentFit="cover"
        source={require("../assets/icons8bsqueda64-1.png")}
      />
      <Image
        style={styles.noticiasEspecificasScreenItem}
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
        style={[styles.noticia11, styles.noticiaLayout]}
        contentFit="cover"
        source={require("../assets/noticia-1-1.png")}
      />
      <View
        style={[styles.noticiasEspecificasScreenInner, styles.noticiasLayout]}
      />
      <Image
        style={[styles.noticia12, styles.noticiaLayout]}
        contentFit="cover"
        source={require("../assets/noticia-1-1.png")}
      />
      <Image
        style={styles.rectangleIcon}
        contentFit="cover"
        source={require("../assets/rectangle-10.png")}
      />
      <Text style={styles.buscarTypo}>{`Buscar
`}</Text>
      <View
        style={[styles.noticiasEspecificasScreenChild, styles.noticiasLayout]}
      />
      <Image
        style={styles.icons8Bsqueda641}
        contentFit="cover"
        source={require("../assets/icons8bsqueda64-1.png")}
      />
      <Image
        style={styles.noticiasEspecificasScreenItem}
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
        style={[styles.noticia11, styles.noticiaLayout]}
        contentFit="cover"
        source={require("../assets/noticia-1-1.png")}
      />
      <View
        style={[styles.noticiasEspecificasScreenInner, styles.noticiasLayout]}
      />
      <Image
        style={[styles.noticia12, styles.noticiaLayout]}
        contentFit="cover"
        source={require("../assets/noticia-1-1.png")}
      />
      <Image
        style={styles.rectangleIcon}
        contentFit="cover"
        source={require("../assets/rectangle-10.png")}
      />
      <Text style={styles.buscarTypo}>{`Buscar
`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  noticiasLayout: {
    height: 242,
    backgroundColor: Color.colorThistle,
    width: 232,
    left: 64,
    position: "absolute",
  },
  icons8Layout: {
    width: 31,
    top: 6,
    height: 25,
    position: "absolute",
  },
  noticiaLayout: {
    height: 215,
    width: 165,
    left: 97,
    position: "absolute",
  },
  noticiasEspecificasScreenChild: {
    top: 101,
  },
  icons8Bsqueda641: {
    top: 62,
    left: 306,
    width: 27,
    height: 25,
    position: "absolute",
  },
  noticiasEspecificasScreenItem: {
    top: -24,
    left: -10,
    width: 370,
    height: 60,
    position: "absolute",
  },
  icons8Noticias642: {
    left: 312,
  },
  icons8Men641: {
    left: 14,
  },
  noticia11: {
    top: 115,
  },
  noticiasEspecificasScreenInner: {
    top: 368,
  },
  noticia12: {
    top: 382,
  },
  rectangleIcon: {
    top: 63,
    height: 24,
    width: 232,
    left: 64,
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
    color: Color.colorDimgray,
    fontFamily: FontFamily.manjariRegular,
    fontSize: FontSize.size_smi,
    left: 75,
    top: 74,
    position: "absolute",
  },
  noticiasEspecificasScreen: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default NoticiasEspecificasScreen;
