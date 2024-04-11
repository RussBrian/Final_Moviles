import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const HistoriaScreen = () => {
  return (
    <View style={styles.historiaScreen}>
      <Image
        style={[styles.historiaScreenChild, styles.historiaLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-7.png")}
      />
      <Image
        style={[styles.icons8Noticias642, styles.icons8Layout3]}
        contentFit="cover"
        source={require("../assets/icons8noticias64-2.png")}
      />
      <Image
        style={[styles.icons8Men641, styles.icons8Layout3]}
        contentFit="cover"
        source={require("../assets/icons8men64-2.png")}
      />
      <Image
        style={[styles.historiaScreenChild, styles.historiaLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-7.png")}
      />
      <Image
        style={[styles.historiaScreenInner, styles.historiaLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-15.png")}
      />
      <Image
        style={[styles.icons8Men641, styles.icons8Layout3]}
        contentFit="cover"
        source={require("../assets/icons8men64-2.png")}
      />
      <Text style={styles.historia}>Historia</Text>
      <Image
        style={[styles.icons8Historia64, styles.icons8Layout1]}
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
      <View style={[styles.icons8Historia641, styles.icons8Layout1]} />
      <Image
        style={[styles.ellipseIcon, styles.historiaChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Image
        style={[styles.historiaScreenChild1, styles.historiaChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Image
        style={[styles.historiaScreenChild2, styles.historiaChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Image
        style={[styles.historiaScreenChild3, styles.historiaChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Image
        style={[styles.historiaScreenChild4, styles.historiaChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Image
        style={[styles.historiaScreenChild5, styles.historiaChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Text
        style={[styles.talCosaBlablabllaContainer, styles.talContainerTypo1]}
      >
        <Text style={styles.text}>{`2019
`}</Text>
        <Text style={styles.talCosaBlablablla}>tal cosa blablablla.</Text>
      </Text>
      <Text
        style={[styles.talCosaBlablabllaContainer1, styles.talContainerTypo1]}
      >
        <Text style={styles.text}>{`2019
`}</Text>
        <Text style={styles.talCosaBlablablla}>tal cosa blablablla.</Text>
      </Text>
      <Text
        style={[styles.talCosaBlablabllaContainer2, styles.talContainerTypo1]}
      >
        <Text style={styles.text}>{`2019
`}</Text>
        <Text style={styles.talCosaBlablablla}>tal cosa blablablla.</Text>
      </Text>
      <Text
        style={[styles.talCosaBlablabllaContainer3, styles.talContainerTypo]}
      >
        <Text style={styles.text}>{`2019
`}</Text>
        <Text style={styles.talCosaBlablablla}>tal cosa blablablla.</Text>
      </Text>
      <Text
        style={[styles.talCosaBlablabllaContainer4, styles.talContainerTypo]}
      >
        <Text style={styles.text}>{`2019
`}</Text>
        <Text style={styles.talCosaBlablablla}>tal cosa blablablla.</Text>
      </Text>
      <Text
        style={[styles.talCosaBlablabllaContainer5, styles.talContainerTypo]}
      >
        <Text style={styles.text}>{`2019
`}</Text>
        <Text style={styles.talCosaBlablablla}>tal cosa blablablla.</Text>
      </Text>
      <Image
        style={styles.icons8Bsqueda643}
        contentFit="cover"
        source={require("../assets/icons8bsqueda64-1.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.icons8Layout1]}
        contentFit="cover"
        source={require("../assets/rectangle-10.png")}
      />
      <Text style={styles.buscarTypo}>{`Buscar
`}</Text>
      <Image
        style={styles.icons8Bsqueda643}
        contentFit="cover"
        source={require("../assets/icons8bsqueda64-1.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.icons8Layout1]}
        contentFit="cover"
        source={require("../assets/rectangle-14.png")}
      />
      <Text style={styles.buscarTypo}>{`Buscar
`}</Text>
      <Image
        style={[styles.orden1Icon, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/orden-1.png")}
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
  historiaLayout: {
    height: 60,
    width: 370,
    position: "absolute",
  },
  icons8Layout3: {
    width: 31,
    height: 25,
    top: 6,
    position: "absolute",
  },
  icons8Layout1: {
    height: 24,
    position: "absolute",
  },
  icons8Layout: {
    width: 25,
    position: "absolute",
  },
  historiaChildLayout: {
    width: 60,
    height: 60,
    position: "absolute",
  },
  historiaChildPosition: {
    left: 240,
    width: 60,
    height: 60,
    position: "absolute",
  },
  talContainerTypo1: {
    height: 39,
    width: 112,
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
  talContainerTypo: {
    textAlign: "right",
    height: 39,
    width: 112,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    color: Color.colorMediumblue,
    fontFamily: FontFamily.manjariRegular,
    position: "absolute",
  },
  historiaScreenChild: {
    top: -24,
    left: -10,
  },
  icons8Noticias642: {
    left: 312,
    height: 25,
  },
  icons8Men641: {
    left: 14,
    height: 25,
  },
  historiaScreenInner: {
    top: 588,
    left: -5,
  },
  historia: {
    top: 67,
    left: 147,
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
    position: "absolute",
  },
  icons8Historia64: {
    width: 24,
    height: 24,
    top: 601,
    left: 14,
  },
  icons8Servicio64: {
    top: 600,
    left: 64,
    height: 25,
  },
  icons8CarpetaDePelculas64: {
    left: 117,
    top: 601,
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
  icons8Historia641: {
    left: 319,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 24,
    height: 24,
    top: 6,
  },
  ellipseIcon: {
    top: 143,
    left: 45,
    width: 60,
  },
  historiaScreenChild1: {
    top: 482,
  },
  historiaScreenChild2: {
    top: 344,
  },
  historiaScreenChild3: {
    top: 422,
    left: 47,
  },
  historiaScreenChild4: {
    top: 290,
    left: 45,
    width: 60,
  },
  historiaScreenChild5: {
    top: 214,
  },
  text: {
    fontSize: FontSize.size_xs,
  },
  talCosaBlablablla: {
    fontSize: FontSize.size_3xs,
  },
  talCosaBlablabllaContainer: {
    top: 164,
    left: 119,
  },
  talCosaBlablabllaContainer1: {
    top: 443,
    left: 119,
  },
  talCosaBlablabllaContainer2: {
    top: 305,
    left: 115,
  },
  talCosaBlablabllaContainer3: {
    top: 235,
    left: 114,
  },
  talCosaBlablabllaContainer4: {
    top: 503,
    left: 112,
  },
  talCosaBlablabllaContainer5: {
    top: 363,
    left: 119,
  },
  icons8Bsqueda643: {
    top: 99,
    left: 306,
    width: 27,
    height: 25,
    position: "absolute",
  },
  rectangleIcon: {
    top: 100,
    width: 232,
    left: 64,
  },
  buscarTypo: {
    color: Color.colorDimgray,
    fontSize: FontSize.size_smi,
    left: 75,
    top: 111,
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
  orden1Icon: {
    top: 101,
    left: 20,
    height: 21,
  },
  icons8PginaPrincipal642: {
    left: 307,
    width: 26,
    height: 26,
    top: 6,
    position: "absolute",
  },
  historiaScreen: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default HistoriaScreen;
