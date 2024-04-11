import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const MisSituacionesDisplayScreen = () => {
  return (
    <View style={styles.misSituacionesDisplayScreen}>
      <Image
        style={styles.misSituacionesDisplayScreenChild}
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
        style={styles.misSituacionesDisplayScreenChild}
        contentFit="cover"
        source={require("../assets/rectangle-7.png")}
      />
      <Image
        style={[styles.icons8Men641, styles.icons8Layout2]}
        contentFit="cover"
        source={require("../assets/icons8men64-2.png")}
      />
      <View style={[styles.icons8Marcapginas642, styles.icons8Layout1]} />
      <Image
        style={[styles.icons8LazoMarcapginas641, styles.icons8Layout1]}
        contentFit="cover"
        source={require("../assets/icons8lazomarcapginas64-11.png")}
      />
      <Text style={[styles.misSituaciones, styles.talText]}>{`Mis situaciones
`}</Text>
      <View
        style={[styles.misSituacionesDisplayScreenInner, styles.misShadowBox]}
      />
      <Text style={[styles.talSituacin, styles.talLayout]}>Tal situación</Text>
      <Text style={[styles.text, styles.textTypo]}>00/00/0000</Text>
      <Text style={[styles.talSituacin1, styles.talLayout]}>Tal situación</Text>
      <Text style={[styles.text1, styles.textTypo]}>00/00/0000</Text>
      <Text style={[styles.talSituacin2, styles.talLayout]}>Tal situación</Text>
      <Text style={[styles.text2, styles.textTypo]}>00/00/0000</Text>
      <View style={[styles.rectangleView, styles.misShadowBox]} />
      <Text style={[styles.talSituacin3, styles.talLayout]}>Tal situación</Text>
      <Text style={[styles.text3, styles.talLayout]}>00/00/0000</Text>
      <Image
        style={[styles.icons8Desplegable644, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-4.png")}
      />
      <View
        style={[
          styles.misSituacionesDisplayScreenChild1,
          styles.misChildPosition,
        ]}
      />
      <Text style={[styles.talSituacin4, styles.textTypo]}>Tal situación</Text>
      <Text style={[styles.text4, styles.textTypo]}>00/00/0000</Text>
      <Image
        style={[styles.icons8Desplegable646, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-4.png")}
      />
      <View
        style={[styles.misSituacionesDisplayScreenChild2, styles.misShadowBox]}
      />
      <Text style={[styles.talSituacin5, styles.talLayout]}>Tal situación</Text>
      <Text style={[styles.text5, styles.text5Position]}>00/00/0000</Text>
      <Image
        style={[styles.icons8Desplegable645, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-4.png")}
      />
      <View
        style={[
          styles.misSituacionesDisplayScreenChild3,
          styles.misChildPosition,
        ]}
      />
      <Image
        style={[styles.rectangleIcon, styles.misChildPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-23.png")}
      />
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-31.png")}
      />
      <Text style={[styles.descripcinDeLa, styles.misSituacionesTypo]}>
        Descripción de la situacion blablabla.
      </Text>
      <Text style={[styles.enProceso, styles.text6Typo]}>En proceso</Text>
      <Text style={[styles.text6, styles.text6Position]}>0001</Text>
      <Image
        style={[styles.icons8ClasificarArriba641, styles.text6Position]}
        contentFit="cover"
        source={require("../assets/icons8clasificararriba64-1.png")}
      />
      <Image
        style={[styles.icons8Comentario641, styles.text5Position]}
        contentFit="cover"
        source={require("../assets/icons8comentario64-1.png")}
      />
      <Text style={[styles.comentario1, styles.talLayout]}>Comentario1</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  icons8Layout2: {
    height: 25,
    width: 31,
    top: 6,
    position: "absolute",
  },
  icons8Layout1: {
    width: 26,
    position: "absolute",
  },
  talText: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
  },
  misShadowBox: {
    height: 78,
    width: 291,
    backgroundColor: Color.colorLightsteelblue,
    left: 39,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  talLayout: {
    height: 47,
    width: 177,
    textAlign: "left",
    fontFamily: FontFamily.manjariRegular,
    position: "absolute",
  },
  textTypo: {
    height: 46,
    width: 177,
    left: 57,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    color: Color.colorMediumblue,
    fontFamily: FontFamily.manjariRegular,
  },
  icons8Layout: {
    height: 31,
    left: 265,
    width: 36,
    position: "absolute",
  },
  misChildPosition: {
    width: 291,
    left: 39,
    position: "absolute",
  },
  text5Position: {
    top: 384,
    position: "absolute",
  },
  misSituacionesTypo: {
    textAlign: "left",
    fontFamily: FontFamily.manjariRegular,
    color: Color.colorMediumblue,
    position: "absolute",
  },
  text6Typo: {
    fontSize: FontSize.size_xs,
    height: 46,
    width: 177,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    color: Color.colorMediumblue,
    fontFamily: FontFamily.manjariRegular,
  },
  text6Position: {
    left: 276,
    position: "absolute",
  },
  misSituacionesDisplayScreenChild: {
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
  icons8Marcapginas642: {
    left: 317,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 26,
    height: 25,
    top: 6,
  },
  icons8LazoMarcapginas641: {
    top: 4,
    height: 29,
    left: 312,
  },
  misSituaciones: {
    top: 88,
    left: 95,
    width: 200,
    height: 51,
    textAlign: "left",
    fontFamily: FontFamily.manjariRegular,
    color: Color.colorMediumblue,
    position: "absolute",
    fontSize: FontSize.size_xl,
  },
  misSituacionesDisplayScreenInner: {
    top: 159,
  },
  talSituacin: {
    left: 57,
    top: 206,
    width: 177,
    color: Color.colorMediumblue,
    fontSize: FontSize.size_xl,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
  },
  text: {
    fontSize: FontSize.size_mini,
    top: 174,
    height: 46,
    position: "absolute",
  },
  talSituacin1: {
    left: 57,
    top: 206,
    width: 177,
    color: Color.colorMediumblue,
    fontSize: FontSize.size_xl,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
  },
  text1: {
    fontSize: FontSize.size_mini,
    top: 174,
    height: 46,
    position: "absolute",
  },
  talSituacin2: {
    left: 57,
    top: 206,
    width: 177,
    color: Color.colorMediumblue,
    fontSize: FontSize.size_xl,
  },
  text2: {
    fontSize: FontSize.size_mini,
    top: 174,
    height: 46,
    position: "absolute",
  },
  rectangleView: {
    top: 261,
  },
  talSituacin3: {
    top: 308,
    left: 57,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    color: Color.colorMediumblue,
    width: 177,
    fontSize: FontSize.size_xl,
  },
  text3: {
    top: 275,
    fontSize: FontSize.size_mini,
    left: 57,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    color: Color.colorMediumblue,
    width: 177,
  },
  icons8Desplegable644: {
    top: 285,
  },
  misSituacionesDisplayScreenChild1: {
    top: 477,
    height: 79,
    backgroundColor: Color.colorLightsteelblue,
    width: 291,
    left: 39,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  talSituacin4: {
    top: 525,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  text4: {
    top: 492,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  icons8Desplegable646: {
    top: 502,
  },
  misSituacionesDisplayScreenChild2: {
    top: 369,
  },
  talSituacin5: {
    top: 416,
    left: 57,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    color: Color.colorMediumblue,
    width: 177,
    fontSize: FontSize.size_xl,
  },
  text5: {
    height: 46,
    width: 177,
    left: 57,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    color: Color.colorMediumblue,
    fontFamily: FontFamily.manjariRegular,
    fontSize: FontSize.size_mini,
  },
  icons8Desplegable645: {
    top: 394,
  },
  misSituacionesDisplayScreenChild3: {
    top: 237,
    height: 213,
    backgroundColor: Color.colorLightsteelblue,
    width: 291,
    left: 39,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  rectangleIcon: {
    top: 378,
    height: 73,
    width: 291,
    left: 39,
  },
  ellipseIcon: {
    top: 262,
    width: 100,
    height: 100,
    left: 57,
    position: "absolute",
  },
  descripcinDeLa: {
    top: 281,
    left: 185,
    fontSize: FontSize.size_base,
    width: 127,
    height: 37,
  },
  enProceso: {
    top: 239,
    left: 57,
    position: "absolute",
  },
  text6: {
    top: 245,
    fontSize: FontSize.size_xs,
    height: 46,
    width: 177,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    color: Color.colorMediumblue,
    fontFamily: FontFamily.manjariRegular,
  },
  icons8ClasificarArriba641: {
    top: 188,
    height: 36,
    width: 36,
    left: 276,
  },
  icons8Comentario641: {
    left: 50,
    width: 20,
    height: 20,
  },
  comentario1: {
    top: 390,
    left: 72,
    fontSize: FontSize.size_3xs,
    color: Color.colorThistle,
  },
  misSituacionesDisplayScreen: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default MisSituacionesDisplayScreen;
