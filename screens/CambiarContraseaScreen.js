import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const CambiarContraseaScreen = () => {
  return (
    <View style={styles.cambiarContraseaScreen}>
      <Image
        style={styles.cambiarContraseaScreenChild}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={styles.icons8VuelvaAIntroducirEl}
        contentFit="cover"
        source={require("../assets/icons8vuelvaaintroducirelcdigopin64-11.png")}
      />
      <Image
        style={styles.icons8Men642}
        contentFit="cover"
        source={require("../assets/icons8men64-2.png")}
      />
      <Text style={styles.cambiarContrasea}>Cambiar Contraseña</Text>
      <Image
        style={styles.cambiarContraseaScreenItem}
        contentFit="cover"
        source={require("../assets/rectangle-1.png")}
      />
      <Text style={styles.contraseaAnterior}>Contraseña Anterior</Text>
      <Text style={[styles.email, styles.emailTypo]}>Email</Text>
      <View
        style={[
          styles.cambiarContraseaScreenInner,
          styles.rectangleViewShadowBox,
        ]}
      />
      <Text style={[styles.nuevaContrasea, styles.nuevaTypo]}>
        Nueva Contraseña
      </Text>
      <Text style={[styles.email1, styles.emailTypo]}>Email</Text>
      <View style={[styles.rectangleView, styles.rectangleViewShadowBox]} />
      <Image
        style={[styles.icons8Contrasea642, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8contrasea64-2.png")}
      />
      <Image
        style={[styles.icons8Contrasea644, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8contrasea64-2.png")}
      />
      <Image
        style={[styles.icons8Contrasea643, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8contrasea64-2.png")}
      />
      <Text
        style={[styles.confirmeNuevaContrasea, styles.nuevaTypo]}
      >{`Confirme Nueva Contraseña
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
    </View>
  );
};

const styles = StyleSheet.create({
  emailTypo: {
    width: 37,
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.manjariRegular,
    position: "absolute",
  },
  rectangleViewShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorLightsteelblue,
    width: 235,
    position: "absolute",
  },
  nuevaTypo: {
    height: 23,
    color: Color.colorDimgray,
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
  rectangleIconPosition: {
    top: 499,
    position: "absolute",
  },
  cambiarContraseaScreenChild: {
    top: -71,
    left: -83,
    borderRadius: Border.br_12xl,
    width: 452,
    height: 215,
    position: "absolute",
  },
  icons8VuelvaAIntroducirEl: {
    top: 4,
    left: 311,
    width: 39,
    height: 39,
    position: "absolute",
  },
  icons8Men642: {
    top: 12,
    left: 11,
    width: 31,
    height: 25,
    position: "absolute",
  },
  cambiarContrasea: {
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
  cambiarContraseaScreenItem: {
    top: 243,
    height: 47,
    width: 235,
    left: 68,
    position: "absolute",
  },
  contraseaAnterior: {
    top: 259,
    width: 118,
    height: 18,
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
    top: 337,
    left: 119,
    height: 20,
  },
  cambiarContraseaScreenInner: {
    top: 326,
    height: 48,
    left: 68,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorLightsteelblue,
  },
  nuevaContrasea: {
    top: 347,
    width: 111,
    left: 112,
    height: 23,
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
    height: 47,
  },
  icons8Contrasea642: {
    top: 419,
  },
  icons8Contrasea644: {
    top: 339,
  },
  icons8Contrasea643: {
    top: 251,
  },
  confirmeNuevaContrasea: {
    top: 432,
    left: 111,
    width: 156,
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
  cambiarContraseaScreen: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default CambiarContraseaScreen;
