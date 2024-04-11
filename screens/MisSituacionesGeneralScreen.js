import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const MisSituacionesGeneralScreen = () => {
  return (
    <View style={styles.misSituacionesGeneralScreen}>
      <Image
        style={styles.misSituacionesGeneralScreenChild}
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
        style={styles.misSituacionesGeneralScreenChild}
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
        style={[styles.misSituacionesGeneralScreenInner, styles.misShadowBox]}
      />
      <Text style={[styles.talSituacin, styles.talLayout]}>Tal situación</Text>
      <Text style={[styles.text, styles.textTypo]}>00/00/0000</Text>
      <Image
        style={styles.icons8Desplegable641}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-1.png")}
      />
      <Text style={[styles.talSituacin1, styles.talLayout]}>Tal situación</Text>
      <Text style={[styles.text1, styles.textTypo]}>00/00/0000</Text>
      <Image
        style={styles.icons8Desplegable641}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-1.png")}
      />
      <Text style={[styles.talSituacin2, styles.talLayout]}>Tal situación</Text>
      <Text style={[styles.text2, styles.textTypo]}>00/00/0000</Text>
      <Image
        style={styles.icons8Desplegable641}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-1.png")}
      />
      <View style={[styles.rectangleView, styles.misShadowBox]} />
      <Text style={[styles.talSituacin3, styles.talLayout]}>Tal situación</Text>
      <Text style={[styles.text3, styles.talLayout]}>00/00/0000</Text>
      <Image
        style={[styles.icons8Desplegable644, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-4.png")}
      />
      <View style={styles.misSituacionesGeneralScreenChild1} />
      <Text style={[styles.talSituacin4, styles.textTypo]}>Tal situación</Text>
      <Text style={[styles.text4, styles.textTypo]}>00/00/0000</Text>
      <Image
        style={[styles.icons8Desplegable646, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-4.png")}
      />
      <View
        style={[styles.misSituacionesGeneralScreenChild2, styles.misShadowBox]}
      />
      <Text style={[styles.talSituacin5, styles.talLayout]}>Tal situación</Text>
      <Text style={[styles.text5, styles.textTypo]}>00/00/0000</Text>
      <Image
        style={[styles.icons8Desplegable645, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-4.png")}
      />
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
    left: 57,
    textAlign: "left",
    color: Color.colorMediumblue,
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
    position: "absolute",
  },
  icons8Layout: {
    height: 31,
    width: 36,
    left: 265,
    position: "absolute",
  },
  misSituacionesGeneralScreenChild: {
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
    color: Color.colorMediumblue,
    fontFamily: FontFamily.manjariRegular,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  misSituacionesGeneralScreenInner: {
    top: 159,
  },
  talSituacin: {
    top: 206,
    width: 177,
    left: 57,
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
  },
  icons8Desplegable641: {
    top: 184,
    height: 30,
    width: 36,
    left: 265,
    position: "absolute",
  },
  talSituacin1: {
    top: 206,
    width: 177,
    left: 57,
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
  },
  talSituacin2: {
    top: 206,
    width: 177,
    left: 57,
    fontSize: FontSize.size_xl,
  },
  text2: {
    fontSize: FontSize.size_mini,
    top: 174,
    height: 46,
  },
  rectangleView: {
    top: 261,
  },
  talSituacin3: {
    top: 308,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    fontSize: FontSize.size_xl,
  },
  text3: {
    top: 275,
    fontSize: FontSize.size_mini,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
  },
  icons8Desplegable644: {
    top: 285,
  },
  misSituacionesGeneralScreenChild1: {
    top: 477,
    height: 79,
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
  talSituacin4: {
    top: 525,
    fontSize: FontSize.size_xl,
  },
  text4: {
    top: 492,
    fontSize: FontSize.size_mini,
  },
  icons8Desplegable646: {
    top: 502,
  },
  misSituacionesGeneralScreenChild2: {
    top: 369,
  },
  talSituacin5: {
    top: 416,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    fontSize: FontSize.size_xl,
  },
  text5: {
    top: 384,
    fontSize: FontSize.size_mini,
  },
  icons8Desplegable645: {
    top: 394,
  },
  misSituacionesGeneralScreen: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default MisSituacionesGeneralScreen;
