import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const CreateNewAccountScreen = () => {
  return (
    <View style={styles.createNewAccountScreen}>
      <Image
        style={styles.createNewAccountScreenChild}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Text style={styles.crearNuevaCuenta}>{`Crear nueva cuenta
`}</Text>
      <View
        style={[
          styles.createNewAccountScreenItem,
          styles.rectangleViewShadowBox,
        ]}
      />
      <Text style={styles.nombre}>Nombre</Text>
      <Text style={[styles.email, styles.emailTypo]}>Email</Text>
      <View style={styles.createNewAccountScreenInner} />
      <Image
        style={[styles.icons8NuevoPost641, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8nuevopost64-11.png")}
      />
      <Text
        style={[styles.correoElectrnico, styles.contraseaTypo]}
      >{`Correo Electrónico `}</Text>
      <Text style={[styles.email1, styles.emailTypo]}>Email</Text>
      <View style={[styles.rectangleView, styles.rectangleViewShadowBox]} />
      <Image
        style={[styles.icons8Contrasea642, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8contrasea64-2.png")}
      />
      <Text style={[styles.contrasea, styles.contraseaTypo]}>{`Contraseña
`}</Text>
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
        style={[styles.icons8Nombre641, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8nombre64-1.png")}
      />
      <Image
        style={styles.icons8IzquierdaEnCrculo2}
        contentFit="cover"
        source={require("../assets/icons8izquierdaencrculo264-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleViewShadowBox: {
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
    position: "absolute",
  },
  emailTypo: {
    width: 37,
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.manjariRegular,
    position: "absolute",
  },
  icons8Layout: {
    height: 31,
    width: 24,
    left: 79,
    position: "absolute",
  },
  contraseaTypo: {
    color: Color.colorDimgray,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.manjariRegular,
    position: "absolute",
  },
  rectangleIconPosition: {
    top: 499,
    position: "absolute",
  },
  createNewAccountScreenChild: {
    top: -76,
    left: -84,
    borderRadius: Border.br_12xl,
    width: 452,
    height: 215,
    position: "absolute",
  },
  crearNuevaCuenta: {
    top: 180,
    left: 84,
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
  createNewAccountScreenItem: {
    top: 243,
    left: 68,
    height: 47,
  },
  nombre: {
    top: 259,
    width: 44,
    height: 20,
    fontSize: FontSize.size_xs,
    left: 112,
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
  email: {
    left: 119,
    top: 337,
    height: 20,
  },
  createNewAccountScreenInner: {
    top: 326,
    height: 48,
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
    left: 68,
    position: "absolute",
  },
  icons8NuevoPost641: {
    top: 337,
  },
  correoElectrnico: {
    top: 347,
    width: 111,
    height: 23,
    left: 112,
    color: Color.colorDimgray,
  },
  email1: {
    top: 426,
    left: 118,
    height: 19,
  },
  rectangleView: {
    top: 415,
    left: 67,
  },
  icons8Contrasea642: {
    top: 419,
  },
  contrasea: {
    top: 432,
    left: 111,
    width: 65,
    height: 24,
  },
  rectangleIcon: {
    left: 123,
    width: 107,
    height: 50,
  },
  icons8EmojiDeMarcaDeVerif: {
    left: 163,
    width: 27,
    height: 42,
  },
  icons8Nombre641: {
    top: 250,
  },
  icons8IzquierdaEnCrculo2: {
    top: 38,
    left: 39,
    width: 29,
    height: 37,
    position: "absolute",
  },
  createNewAccountScreen: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default CreateNewAccountScreen;
