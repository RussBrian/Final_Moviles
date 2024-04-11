import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const MiembrosScreen1 = () => {
  return (
    <View style={styles.miembrosScreen}>
      <Image
        style={[styles.miembrosScreenChild, styles.miembrosLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-7.png")}
      />
      <Image
        style={styles.icons8Noticias642}
        contentFit="cover"
        source={require("../assets/icons8noticias64-2.png")}
      />
      <Image
        style={styles.icons8Men641}
        contentFit="cover"
        source={require("../assets/icons8men64-2.png")}
      />
      <Image
        style={[styles.miembrosScreenChild, styles.miembrosLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-7.png")}
      />
      <Image
        style={[styles.miembrosScreenInner, styles.miembrosLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-15.png")}
      />
      <Image
        style={styles.icons8Men641}
        contentFit="cover"
        source={require("../assets/icons8men64-2.png")}
      />
      <Text style={styles.quieroSerVoluntario}>Quiero ser voluntario!</Text>
      <Image
        style={styles.icons8Historia64}
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
      <View style={styles.rectangleView} />
      <Text style={styles.nombre}>Nombre</Text>
      <Text style={[styles.email, styles.emailTypo]}>Email</Text>
      <View
        style={[styles.miembrosScreenChild1, styles.miembrosChildShadowBox]}
      />
      <Image
        style={[styles.icons8NuevoPost641, styles.icons8Position]}
        contentFit="cover"
        source={require("../assets/icons8nuevopost64-11.png")}
      />
      <Text
        style={[styles.correoElectrnico, styles.cdulaTypo]}
      >{`Correo Electrónico `}</Text>
      <Text style={[styles.email1, styles.emailTypo]}>Email</Text>
      <View
        style={[styles.miembrosScreenChild2, styles.miembrosChildShadowBox]}
      />
      <Text
        style={[styles.numeroTelefnico, styles.cdulaTypo]}
      >{`Numero telefónico  `}</Text>
      <Text style={[styles.email2, styles.email2Position]}>Email</Text>
      <View
        style={[styles.miembrosScreenChild3, styles.miembrosChildShadowBox]}
      />
      <Text style={[styles.cdula, styles.cdulaTypo]}>{`Cédula `}</Text>
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
        style={[styles.icons8Nombre641, styles.icons8Position]}
        contentFit="cover"
        source={require("../assets/icons8nombre64-1.png")}
      />
      <Image
        style={[styles.icons8TelfonoCelular64, styles.icons8Layout1]}
        contentFit="cover"
        source={require("../assets/icons8telfonocelular64.png")}
      />
      <Image
        style={[styles.icons8RoboDeIdentidad64, styles.email2Position]}
        contentFit="cover"
        source={require("../assets/icons8robodeidentidad64.png")}
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
  miembrosLayout: {
    height: 60,
    width: 370,
    position: "absolute",
  },
  icons8Layout: {
    width: 25,
    height: 25,
    position: "absolute",
  },
  emailTypo: {
    width: 37,
    color: Color.colorBlack,
    height: 20,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.manjariRegular,
  },
  miembrosChildShadowBox: {
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
    position: "absolute",
  },
  icons8Position: {
    left: 74,
    height: 31,
    width: 24,
    position: "absolute",
  },
  cdulaTypo: {
    height: 23,
    width: 111,
    color: Color.colorDimgray,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.manjariRegular,
    position: "absolute",
  },
  email2Position: {
    top: 403,
    position: "absolute",
  },
  rectangleIconPosition: {
    top: 502,
    position: "absolute",
  },
  icons8Layout1: {
    height: 31,
    width: 31,
  },
  miembrosScreenChild: {
    top: -24,
    left: -10,
  },
  icons8Noticias642: {
    left: 312,
    height: 25,
    top: 6,
    width: 31,
    position: "absolute",
  },
  icons8Men641: {
    left: 14,
    height: 25,
    width: 31,
    top: 6,
    position: "absolute",
  },
  miembrosScreenInner: {
    top: 588,
    left: -5,
  },
  quieroSerVoluntario: {
    top: 90,
    left: 82,
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
    height: 24,
    width: 24,
    top: 601,
    left: 14,
    position: "absolute",
  },
  icons8Servicio64: {
    top: 600,
    left: 64,
  },
  icons8CarpetaDePelculas64: {
    left: 117,
    top: 601,
    width: 25,
  },
  icons8Peligro64: {
    left: 174,
    top: 601,
    width: 25,
  },
  icons8IntermitenteDeAdverte: {
    left: 222,
    top: 601,
    width: 25,
  },
  icons8HombrePolica64: {
    left: 270,
    top: 601,
    width: 25,
  },
  icons8Voluntario64: {
    left: 318,
    top: 601,
    width: 25,
  },
  rectangleView: {
    top: 141,
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
    left: 63,
    position: "absolute",
  },
  nombre: {
    top: 157,
    width: 44,
    height: 20,
    fontSize: FontSize.size_xs,
    left: 107,
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
    left: 114,
    top: 235,
    position: "absolute",
  },
  miembrosScreenChild1: {
    top: 224,
    left: 63,
    height: 48,
  },
  icons8NuevoPost641: {
    height: 31,
    top: 235,
  },
  correoElectrnico: {
    top: 245,
    left: 107,
    width: 111,
    color: Color.colorDimgray,
  },
  email1: {
    top: 319,
    left: 115,
    position: "absolute",
  },
  miembrosScreenChild2: {
    top: 308,
    left: 64,
  },
  numeroTelefnico: {
    top: 329,
    left: 108,
  },
  email2: {
    width: 37,
    color: Color.colorBlack,
    height: 20,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.manjariRegular,
    left: 114,
  },
  miembrosScreenChild3: {
    top: 392,
    left: 63,
    height: 48,
  },
  cdula: {
    top: 414,
    left: 114,
  },
  rectangleIcon: {
    left: 121,
    width: 107,
    height: 50,
  },
  icons8EmojiDeMarcaDeVerif: {
    left: 161,
    width: 27,
    height: 42,
  },
  icons8Nombre641: {
    top: 148,
    height: 31,
  },
  icons8TelfonoCelular64: {
    top: 316,
    left: 70,
    height: 31,
    position: "absolute",
  },
  icons8RoboDeIdentidad64: {
    left: 73,
    height: 31,
    width: 31,
  },
  icons8PginaPrincipal643: {
    top: 5,
    left: 317,
    width: 26,
    height: 26,
    position: "absolute",
  },
  miembrosScreen: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default MiembrosScreen1;
