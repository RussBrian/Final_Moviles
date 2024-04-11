import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const LogInScreen = () => {
  return (
    <View style={styles.logInScreen}>
      <Text style={[styles.iniciarSesin, styles.iniciarSesinTypo]}>
        Iniciar Sesión
      </Text>
      <View style={[styles.logInScreenChild, styles.logShadowBox]} />
      <Text style={[styles.correoElectrnico, styles.emailTypo]}>
        Correo Electrónico
      </Text>
      <Text style={[styles.email, styles.emailTypo]}>Email</Text>
      <View style={[styles.logInScreenItem, styles.logShadowBox]} />
      <Image
        style={[styles.icons8Contrasea641, styles.icons8Position]}
        contentFit="cover"
        source={require("../assets/icons8contrasea64-1.png")}
      />
      <Image
        style={[styles.icons8NuevoPost641, styles.icons8Position]}
        contentFit="cover"
        source={require("../assets/icons8nuevopost64-1.png")}
      />
      <Text style={styles.contrasea}>Contraseña</Text>
      <Image
        style={styles.logInScreenInner}
        contentFit="cover"
        source={require("../assets/rectangle-3.png")}
      />
      <Image
        style={styles.icons8EmojiDeMarcaDeVerif}
        contentFit="cover"
        source={require("../assets/icons8emojidemarcadeverificacin48-1.png")}
      />
      <Text style={[styles.nuevoUsuarioCrear, styles.iniciarSesinTypo]}>
        Nuevo usuario? crear nueva cuenta
      </Text>
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iniciarSesinTypo: {
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
  logShadowBox: {
    height: 47,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorLightsteelblue,
    left: 61,
    position: "absolute",
  },
  emailTypo: {
    height: 20,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.manjariRegular,
    position: "absolute",
  },
  icons8Position: {
    width: 26,
    left: 74,
    position: "absolute",
  },
  iniciarSesin: {
    top: 191,
    left: 114,
    fontSize: FontSize.size_xl,
    width: 132,
    height: 29,
  },
  logInScreenChild: {
    top: 253,
    width: 235,
  },
  correoElectrnico: {
    top: 271,
    width: 112,
    left: 107,
    height: 20,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
  },
  email: {
    top: 351,
    left: 115,
    color: Color.colorBlack,
    width: 39,
  },
  logInScreenItem: {
    top: 340,
    width: 237,
  },
  icons8Contrasea641: {
    top: 345,
    height: 31,
  },
  icons8NuevoPost641: {
    top: 259,
    height: 32,
  },
  contrasea: {
    top: 357,
    color: Color.colorDimgray,
    width: 70,
    height: 25,
    fontSize: FontSize.size_xs,
    left: 107,
    textAlign: "left",
    fontFamily: FontFamily.manjariRegular,
    position: "absolute",
  },
  logInScreenInner: {
    top: 444,
    left: 117,
    width: 107,
    height: 50,
    position: "absolute",
  },
  icons8EmojiDeMarcaDeVerif: {
    top: 445,
    left: 156,
    width: 29,
    height: 44,
    position: "absolute",
  },
  nuevoUsuarioCrear: {
    top: 548,
    left: 67,
    fontSize: FontSize.size_mini,
    width: 256,
    height: 39,
  },
  ellipseIcon: {
    top: -76,
    left: -84,
    borderRadius: Border.br_12xl,
    width: 452,
    height: 215,
    position: "absolute",
  },
  logInScreen: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default LogInScreen;
