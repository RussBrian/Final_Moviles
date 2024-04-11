import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const MiembrosScreen = () => {
  return (
    <View style={styles.miembrosScreen}>
      <Image
        style={[styles.miembrosScreenChild, styles.miembrosLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-7.png")}
      />
      <Image
        style={[styles.icons8Noticias642, styles.icons8Layout3]}
        contentFit="cover"
        source={require("../assets/icons8noticias64-2.png")}
      />
      <Image
        style={[styles.icons8Men641, styles.icons8Position]}
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
        style={[styles.icons8Men641, styles.icons8Position]}
        contentFit="cover"
        source={require("../assets/icons8men64-2.png")}
      />
      <Text style={styles.miembros}>Miembros</Text>
      <Image
        style={[styles.icons8Historia64, styles.icons8Position]}
        contentFit="cover"
        source={require("../assets/icons8historia64.png")}
      />
      <Image
        style={[styles.icons8Servicio64, styles.icons8Layout2]}
        contentFit="cover"
        source={require("../assets/icons8servicio64.png")}
      />
      <Image
        style={[styles.icons8CarpetaDePelculas64, styles.icons8Layout2]}
        contentFit="cover"
        source={require("../assets/icons8carpetadepelculas64.png")}
      />
      <Image
        style={[styles.icons8Peligro64, styles.icons8Layout2]}
        contentFit="cover"
        source={require("../assets/icons8peligro64.png")}
      />
      <Image
        style={[styles.icons8IntermitenteDeAdverte, styles.icons8Layout2]}
        contentFit="cover"
        source={require("../assets/icons8intermitentedeadvertenciadepeligro64.png")}
      />
      <Image
        style={[styles.icons8HombrePolica64, styles.icons8Layout2]}
        contentFit="cover"
        source={require("../assets/icons8hombrepolica64.png")}
      />
      <Image
        style={[styles.icons8Voluntario64, styles.icons8Layout2]}
        contentFit="cover"
        source={require("../assets/icons8voluntario64.png")}
      />
      <View style={styles.miembrosChildShadowBox3} />
      <Text style={styles.servicioTypo3}>Servicio 1</Text>
      <Image
        style={[styles.icons8Desplegable6422, styles.icons8Layout1]}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-1.png")}
      />
      <Image
        style={[styles.icons8Desplegable6422, styles.icons8Layout1]}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-1.png")}
      />
      <Image
        style={[styles.icons8Desplegable6422, styles.icons8Layout1]}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-1.png")}
      />
      <View style={styles.miembrosChildShadowBox3} />
      <Text style={styles.servicioTypo3}>Servicio 1</Text>
      <Image
        style={[styles.icons8Desplegable6422, styles.icons8Layout1]}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-1.png")}
      />
      <Image
        style={[styles.icons8Desplegable6422, styles.icons8Layout1]}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-1.png")}
      />
      <Image
        style={[styles.icons8Desplegable6422, styles.icons8Layout1]}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-1.png")}
      />
      <View style={styles.miembrosChildShadowBox3} />
      <Text style={[styles.datosRelevantes, styles.datosTypo1]}>
        Datos relevantes
      </Text>
      <Text style={[styles.nombre, styles.nombreTypo1]}>{`Nombre `}</Text>
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <View style={styles.miembrosChildShadowBox2} />
      <Text style={styles.servicioTypo2}>Servicio 1</Text>
      <Image
        style={[styles.icons8Desplegable6428, styles.nombre1Position]}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-1.png")}
      />
      <Image
        style={[styles.icons8Desplegable6428, styles.nombre1Position]}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-1.png")}
      />
      <Image
        style={[styles.icons8Desplegable6428, styles.nombre1Position]}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-1.png")}
      />
      <View style={styles.miembrosChildShadowBox2} />
      <Text style={styles.servicioTypo2}>Servicio 1</Text>
      <Image
        style={[styles.icons8Desplegable6428, styles.nombre1Position]}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-1.png")}
      />
      <Image
        style={[styles.icons8Desplegable6428, styles.nombre1Position]}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-1.png")}
      />
      <Image
        style={[styles.icons8Desplegable6428, styles.nombre1Position]}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-1.png")}
      />
      <View style={styles.miembrosChildShadowBox2} />
      <Text style={[styles.datosRelevantes1, styles.nombre1Position]}>
        Datos relevantes
      </Text>
      <Text style={[styles.nombre1, styles.nombre1Position]}>{`Nombre `}</Text>
      <Image
        style={[styles.miembrosScreenChild6, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <View style={styles.miembrosChildShadowBox1} />
      <Text style={styles.servicioTypo1}>Servicio 1</Text>
      <Image
        style={[styles.icons8Desplegable6434, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-1.png")}
      />
      <Image
        style={[styles.icons8Desplegable6434, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-1.png")}
      />
      <Image
        style={[styles.icons8Desplegable6434, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-1.png")}
      />
      <View style={styles.miembrosChildShadowBox1} />
      <Text style={styles.servicioTypo1}>Servicio 1</Text>
      <Image
        style={[styles.icons8Desplegable6434, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-1.png")}
      />
      <Image
        style={[styles.icons8Desplegable6434, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-1.png")}
      />
      <Image
        style={[styles.icons8Desplegable6434, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-1.png")}
      />
      <View style={styles.miembrosChildShadowBox1} />
      <Text style={[styles.datosRelevantes2, styles.datosTypo]}>
        Datos relevantes
      </Text>
      <Text style={[styles.nombre2, styles.nombreTypo]}>{`Nombre `}</Text>
      <Image
        style={[styles.miembrosScreenChild10, styles.miembrosChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <View style={styles.miembrosChildShadowBox} />
      <Text style={styles.servicioTypo}>Servicio 1</Text>
      <Image
        style={[styles.icons8Desplegable6440, styles.nombre3Position]}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-1.png")}
      />
      <Image
        style={[styles.icons8Desplegable6440, styles.nombre3Position]}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-1.png")}
      />
      <Image
        style={[styles.icons8Desplegable6440, styles.nombre3Position]}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-1.png")}
      />
      <View style={styles.miembrosChildShadowBox} />
      <Text style={styles.servicioTypo}>Servicio 1</Text>
      <Image
        style={[styles.icons8Desplegable6440, styles.nombre3Position]}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-1.png")}
      />
      <Image
        style={[styles.icons8Desplegable6440, styles.nombre3Position]}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-1.png")}
      />
      <Image
        style={[styles.icons8Desplegable6440, styles.nombre3Position]}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-1.png")}
      />
      <View style={styles.miembrosChildShadowBox} />
      <Text style={[styles.datosRelevantes3, styles.nombre3Position]}>
        Datos relevantes
      </Text>
      <Text style={[styles.nombre3, styles.nombre3Position]}>{`Nombre `}</Text>
      <Image
        style={[styles.miembrosScreenChild14, styles.miembrosChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Image
        style={[styles.icons8PginaPrincipal642, styles.icons8Position1]}
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
  icons8Layout3: {
    height: 25,
    width: 31,
    top: 6,
  },
  icons8Position: {
    left: 14,
    position: "absolute",
  },
  icons8Layout2: {
    width: 25,
    height: 25,
    position: "absolute",
  },
  icons8Layout1: {
    height: 30,
    width: 36,
    left: 241,
  },
  datosTypo1: {
    height: 40,
    width: 90,
    fontSize: FontSize.size_smi,
    left: 151,
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
  nombreTypo1: {
    left: 44,
    height: 47,
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
    fontSize: FontSize.size_xl,
  },
  ellipseIconLayout: {
    width: 60,
    left: 247,
    height: 60,
    position: "absolute",
  },
  nombre1Position: {
    top: 276,
    position: "absolute",
  },
  icons8Layout: {
    left: 239,
    height: 30,
    width: 36,
  },
  datosTypo: {
    left: 149,
    height: 40,
    width: 90,
    fontSize: FontSize.size_smi,
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
  nombreTypo: {
    left: 42,
    height: 47,
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
    fontSize: FontSize.size_xl,
  },
  miembrosChildPosition: {
    left: 245,
    width: 60,
    height: 60,
    position: "absolute",
  },
  nombre3Position: {
    top: 494,
    position: "absolute",
  },
  icons8Position1: {
    left: 312,
    position: "absolute",
  },
  miembrosScreenChild: {
    top: -24,
    left: -10,
  },
  icons8Noticias642: {
    left: 312,
    position: "absolute",
  },
  icons8Men641: {
    height: 25,
    width: 31,
    top: 6,
  },
  miembrosScreenInner: {
    top: 588,
    left: -5,
  },
  miembros: {
    top: 92,
    left: 131,
    width: 200,
    height: 51,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    color: Color.colorMediumblue,
    fontFamily: FontFamily.manjariRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  icons8Historia64: {
    width: 24,
    height: 24,
    top: 601,
  },
  icons8Servicio64: {
    top: 600,
    left: 64,
  },
  icons8CarpetaDePelculas64: {
    left: 117,
    top: 601,
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
  miembrosChildShadowBox3: {
    height: 78,
    width: 291,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorLightsteelblue,
    left: 29,
    top: 143,
    position: "absolute",
  },
  servicioTypo3: {
    height: 47,
    width: 177,
    left: 57,
    top: 174,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    color: Color.colorMediumblue,
    fontFamily: FontFamily.manjariRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  icons8Desplegable6422: {
    top: 167,
    position: "absolute",
  },
  datosRelevantes: {
    top: 167,
    position: "absolute",
  },
  nombre: {
    top: 167,
    position: "absolute",
  },
  ellipseIcon: {
    top: 154,
  },
  miembrosChildShadowBox2: {
    top: 252,
    height: 78,
    width: 291,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorLightsteelblue,
    left: 29,
    position: "absolute",
  },
  servicioTypo2: {
    top: 283,
    height: 47,
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
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  icons8Desplegable6428: {
    height: 30,
    width: 36,
    left: 241,
  },
  datosRelevantes1: {
    height: 40,
    width: 90,
    fontSize: FontSize.size_smi,
    left: 151,
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
  nombre1: {
    left: 44,
    height: 47,
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
    fontSize: FontSize.size_xl,
  },
  miembrosScreenChild6: {
    top: 263,
  },
  miembrosChildShadowBox1: {
    left: 27,
    top: 361,
    height: 78,
    width: 291,
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
  servicioTypo1: {
    left: 55,
    top: 392,
    height: 47,
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
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  icons8Desplegable6434: {
    top: 385,
    position: "absolute",
  },
  datosRelevantes2: {
    top: 385,
    position: "absolute",
  },
  nombre2: {
    top: 385,
    position: "absolute",
  },
  miembrosScreenChild10: {
    top: 372,
  },
  miembrosChildShadowBox: {
    top: 470,
    left: 27,
    height: 78,
    width: 291,
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
  servicioTypo: {
    top: 501,
    left: 55,
    height: 47,
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
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  icons8Desplegable6440: {
    left: 239,
    height: 30,
    width: 36,
  },
  datosRelevantes3: {
    left: 149,
    height: 40,
    width: 90,
    fontSize: FontSize.size_smi,
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
  nombre3: {
    left: 42,
    height: 47,
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
    fontSize: FontSize.size_xl,
  },
  miembrosScreenChild14: {
    top: 481,
  },
  icons8PginaPrincipal642: {
    width: 26,
    height: 26,
    top: 6,
    left: 312,
  },
  miembrosScreen: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default MiembrosScreen;
