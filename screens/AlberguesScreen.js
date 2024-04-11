import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const AlberguesScreen = () => {
  return (
    <View style={styles.alberguesScreen}>
      <Image
        style={[styles.alberguesScreenChild, styles.alberguesLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-7.png")}
      />
      <Image
        style={[styles.icons8Noticias642, styles.icons8Layout1]}
        contentFit="cover"
        source={require("../assets/icons8noticias64-2.png")}
      />
      <Image
        style={[styles.icons8Men641, styles.icons8Layout1]}
        contentFit="cover"
        source={require("../assets/icons8men64-2.png")}
      />
      <Image
        style={[styles.alberguesScreenChild, styles.alberguesLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-7.png")}
      />
      <Image
        style={[styles.icons8CarpetaDePelculas64, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8carpetadepelculas64.png")}
      />
      <Image
        style={[styles.alberguesScreenInner, styles.alberguesLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-15.png")}
      />
      <Image
        style={[styles.icons8Men641, styles.icons8Layout1]}
        contentFit="cover"
        source={require("../assets/icons8men64-2.png")}
      />
      <Text style={styles.albergues}>Albergues</Text>
      <Image
        style={[styles.icons8Historia64, styles.rectangleIconLayout]}
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
      <Image
        style={[styles.ellipseIcon, styles.alberguesChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-15.png")}
      />
      <Image
        style={[styles.alberguesScreenChild1, styles.alberguesChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-15.png")}
      />
      <Image
        style={[styles.alberguesScreenChild2, styles.alberguesChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-15.png")}
      />
      <Text style={styles.albergueTal}>{`2019
Albergue tal.`}</Text>
      <Text style={[styles.abergueTal, styles.abergueTypo]}>{`2019
Abergue tal.`}</Text>
      <Text style={[styles.abergueTal1, styles.abergueTypo]}>{`2019
Abergue tal.`}</Text>
      <Image
        style={styles.icons8Bsqueda645}
        contentFit="cover"
        source={require("../assets/icons8bsqueda64-1.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-10.png")}
      />
      <Text style={styles.buscarTypo}>{`Buscar
`}</Text>
      <Image
        style={styles.icons8Bsqueda645}
        contentFit="cover"
        source={require("../assets/icons8bsqueda64-1.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-14.png")}
      />
      <Text style={styles.buscarTypo}>{`Buscar
`}</Text>
      <Image
        style={[styles.orden2Icon, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/orden-1.png")}
      />
      <Image
        style={styles.icons8PginaPrincipal643}
        contentFit="cover"
        source={require("../assets/icons8pginaprincipal64-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  alberguesLayout: {
    height: 60,
    width: 370,
    position: "absolute",
  },
  icons8Layout1: {
    width: 31,
    top: 6,
    height: 25,
    position: "absolute",
  },
  icons8Layout: {
    width: 25,
    position: "absolute",
  },
  rectangleIconLayout: {
    height: 24,
    position: "absolute",
  },
  alberguesChildLayout: {
    height: 90,
    width: 90,
    position: "absolute",
  },
  abergueTypo: {
    left: 143,
    height: 39,
    width: 112,
    fontSize: FontSize.size_mini,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    color: Color.colorMediumblue,
    fontFamily: FontFamily.manjariRegular,
    position: "absolute",
  },
  alberguesScreenChild: {
    top: -24,
    left: -10,
  },
  icons8Noticias642: {
    height: 25,
    left: 312,
  },
  icons8Men641: {
    left: 14,
    height: 25,
  },
  icons8CarpetaDePelculas64: {
    left: 117,
    top: 601,
    height: 25,
  },
  alberguesScreenInner: {
    top: 584,
    left: -5,
  },
  albergues: {
    top: 62,
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
    left: 142,
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
    height: 25,
  },
  icons8Peligro64: {
    left: 174,
    top: 601,
    height: 25,
  },
  icons8IntermitenteDeAdverte: {
    left: 222,
    top: 601,
    height: 25,
  },
  icons8HombrePolica64: {
    left: 270,
    top: 601,
    height: 25,
  },
  icons8Voluntario64: {
    left: 318,
    top: 601,
    height: 25,
  },
  ellipseIcon: {
    top: 164,
    left: 32,
  },
  alberguesScreenChild1: {
    top: 415,
    left: 30,
  },
  alberguesScreenChild2: {
    top: 290,
    left: 28,
  },
  albergueTal: {
    top: 201,
    height: 39,
    width: 112,
    fontSize: FontSize.size_mini,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    color: Color.colorMediumblue,
    fontFamily: FontFamily.manjariRegular,
    left: 142,
    position: "absolute",
  },
  abergueTal: {
    top: 315,
  },
  abergueTal1: {
    top: 449,
  },
  icons8Bsqueda645: {
    top: 101,
    left: 301,
    width: 27,
    height: 25,
    position: "absolute",
  },
  rectangleIcon: {
    top: 102,
    left: 59,
    width: 232,
  },
  buscarTypo: {
    color: Color.colorDimgray,
    fontSize: FontSize.size_smi,
    left: 70,
    top: 113,
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
  orden2Icon: {
    top: 103,
    left: 15,
    height: 21,
  },
  icons8PginaPrincipal643: {
    top: 5,
    width: 26,
    height: 26,
    left: 312,
    position: "absolute",
  },
  alberguesScreen: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default AlberguesScreen;
