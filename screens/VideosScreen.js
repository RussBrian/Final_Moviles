import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const VideosScreen = () => {
  return (
    <View style={styles.videosScreen}>
      <Image
        style={[styles.videosScreenChild, styles.videosLayout]}
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
        style={[styles.videosScreenChild, styles.videosLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-7.png")}
      />
      <Image
        style={styles.icons8PginaPrincipal642}
        contentFit="cover"
        source={require("../assets/icons8pginaprincipal64-1.png")}
      />
      <Image
        style={[styles.icons8CarpetaDePelculas64, styles.icons8Layout1]}
        contentFit="cover"
        source={require("../assets/icons8carpetadepelculas64.png")}
      />
      <Image
        style={[styles.videosScreenInner, styles.videosLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-15.png")}
      />
      <Image
        style={[styles.icons8Men641, styles.icons8Layout2]}
        contentFit="cover"
        source={require("../assets/icons8men64-2.png")}
      />
      <Text style={styles.videos}>{`Videos
`}</Text>
      <Image
        style={[styles.icons8Historia64, styles.icons8Layout]}
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
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <Image
        style={[styles.icons8Bsqueda641, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8bsqueda64-11.png")}
      />
      <Image
        style={[styles.noticia11, styles.noticiaLayout]}
        contentFit="cover"
        source={require("../assets/noticia-1-11.png")}
      />
      <View style={[styles.videosScreenChild1, styles.videosChildPosition]} />
      <Image
        style={[styles.noticia12, styles.noticiaLayout]}
        contentFit="cover"
        source={require("../assets/noticia-1-11.png")}
      />
      <Image
        style={styles.rectangleIcon}
        contentFit="cover"
        source={require("../assets/rectangle-101.png")}
      />
      <Text style={styles.buscarTypo}>{`Buscar
`}</Text>
      <Image
        style={styles.rectangleViewPosition}
        contentFit="cover"
        source={require("../assets/rectangle-111.png")}
      />
      <Image
        style={[styles.icons8Bsqueda641, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8bsqueda64-11.png")}
      />
      <Image
        style={styles.videosChildPosition}
        contentFit="cover"
        source={require("../assets/rectangle-13.png")}
      />
      <Image
        style={styles.rectangleIcon}
        contentFit="cover"
        source={require("../assets/rectangle-101.png")}
      />
      <Text style={styles.buscarTypo}>{`Buscar
`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  videosLayout: {
    height: 60,
    width: 370,
    position: "absolute",
  },
  icons8Layout2: {
    height: 25,
    width: 31,
    top: 6,
    position: "absolute",
  },
  icons8Layout1: {
    width: 25,
    height: 25,
    position: "absolute",
  },
  icons8Layout: {
    height: 24,
    position: "absolute",
  },
  rectangleViewPosition: {
    height: 199,
    width: 254,
    left: 42,
    top: 131,
    position: "absolute",
  },
  noticiaLayout: {
    height: 177,
    width: 181,
    left: 78,
    position: "absolute",
  },
  videosChildPosition: {
    height: 198,
    top: 351,
    width: 254,
    left: 42,
    position: "absolute",
  },
  videosScreenChild: {
    top: -24,
    left: -10,
  },
  icons8Noticias642: {
    left: 312,
  },
  icons8Men641: {
    left: 14,
  },
  icons8PginaPrincipal642: {
    top: 5,
    left: 313,
    width: 26,
    height: 26,
    position: "absolute",
  },
  icons8CarpetaDePelculas64: {
    left: 117,
    top: 601,
  },
  videosScreenInner: {
    top: 591,
    left: -5,
  },
  videos: {
    top: 63,
    left: 147,
    fontSize: FontSize.size_xl,
    color: Color.colorMediumblue,
    width: 200,
    height: 51,
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
  icons8Historia64: {
    width: 24,
    top: 601,
    left: 14,
  },
  icons8Servicio64: {
    top: 600,
    left: 64,
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
    backgroundColor: Color.colorThistle,
  },
  icons8Bsqueda641: {
    top: 88,
    left: 308,
    width: 29,
  },
  noticia11: {
    top: 142,
  },
  videosScreenChild1: {
    backgroundColor: Color.colorThistle,
  },
  noticia12: {
    top: 361,
  },
  rectangleIcon: {
    top: 89,
    left: 45,
    width: 251,
    height: 23,
    position: "absolute",
  },
  buscarTypo: {
    height: 52,
    width: 218,
    color: Color.colorDimgray,
    fontSize: FontSize.size_smi,
    left: 57,
    top: 99,
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
  videosScreen: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default VideosScreen;
