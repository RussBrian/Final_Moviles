import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const MedidasScreen = () => {
  return (
    <View style={styles.medidasScreen}>
      <Image
        style={[styles.medidasScreenChild, styles.medidasLayout]}
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
        style={[styles.medidasScreenChild, styles.medidasLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-7.png")}
      />
      <Image
        style={[styles.icons8CarpetaDePelculas64, styles.icons8Layout2]}
        contentFit="cover"
        source={require("../assets/icons8carpetadepelculas64.png")}
      />
      <Image
        style={[styles.medidasScreenInner, styles.medidasLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-15.png")}
      />
      <Image
        style={[styles.icons8Men641, styles.icons8Position]}
        contentFit="cover"
        source={require("../assets/icons8men64-2.png")}
      />
      <Text style={styles.medidasPreventivas}>Medidas preventivas</Text>
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
      <View style={[styles.rectangleView, styles.medidasChildShadowBox1]} />
      <Text style={[styles.servicio1, styles.servicioTypo]}>Servicio 1</Text>
      <Image
        style={[styles.icons8Desplegable647, styles.icons8Layout1]}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-1.png")}
      />
      <Image
        style={[styles.icons8Desplegable647, styles.icons8Layout1]}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-1.png")}
      />
      <Image
        style={[styles.icons8Desplegable647, styles.icons8Layout1]}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-1.png")}
      />
      <View
        style={[styles.medidasScreenChild1, styles.medidasChildShadowBox1]}
      />
      <Text style={[styles.servicio11, styles.servicioTypo]}>Servicio 1</Text>
      <Image
        style={[styles.icons8Desplegable647, styles.icons8Layout1]}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-1.png")}
      />
      <Image
        style={[styles.icons8Desplegable647, styles.icons8Layout1]}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-1.png")}
      />
      <Image
        style={[styles.icons8Desplegable647, styles.icons8Layout1]}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-1.png")}
      />
      <View
        style={[styles.medidasScreenChild2, styles.medidasChildShadowBox1]}
      />
      <Text style={[styles.miniDescripcionDe, styles.miniTypo1]}>
        Mini descripcion de la medida.
      </Text>
      <Text style={[styles.medida1, styles.medidaTypo]}>Medida 1</Text>
      <View
        style={[styles.medidasScreenChild3, styles.medidasChildShadowBox1]}
      />
      <Text style={[styles.miniDescripcionDe1, styles.miniTypo1]}>
        Mini descripcion de la medida.
      </Text>
      <Image
        style={[styles.icons8Medida642, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8medida64-2.png")}
      />
      <Text style={[styles.medida2, styles.medidaTypo]}>Medida 2</Text>
      <View style={styles.medidasChildShadowBox} />
      <Text style={[styles.servicio12, styles.servicio12Position]}>
        Servicio 1
      </Text>
      <Image
        style={[styles.icons8Desplegable6419, styles.icons8Layout1]}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-1.png")}
      />
      <Image
        style={[styles.icons8Desplegable6419, styles.icons8Layout1]}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-1.png")}
      />
      <Image
        style={[styles.icons8Desplegable6419, styles.icons8Layout1]}
        contentFit="cover"
        source={require("../assets/icons8desplegable64-1.png")}
      />
      <View style={styles.medidasChildShadowBox} />
      <Text style={[styles.miniDescripcionDe2, styles.miniTypo]}>
        Mini descripcion de la medida.
      </Text>
      <Text style={[styles.medida3, styles.medidaTypo]}>Medida 3</Text>
      <View
        style={[styles.medidasScreenChild6, styles.medidasChildShadowBox1]}
      />
      <Text style={[styles.miniDescripcionDe3, styles.miniTypo]}>
        Mini descripcion de la medida.
      </Text>
      <Image
        style={[styles.icons8Medida644, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8medida64-2.png")}
      />
      <Text style={[styles.medida4, styles.medidaTypo]}>Medida 4</Text>
      <Image
        style={[styles.icons8Medida641, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8medida64-2.png")}
      />
      <Image
        style={[styles.icons8Medida643, styles.servicio12Position]}
        contentFit="cover"
        source={require("../assets/icons8medida64-2.png")}
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
  medidasLayout: {
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
  medidasChildShadowBox1: {
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
    left: 42,
    position: "absolute",
  },
  servicioTypo: {
    height: 47,
    width: 177,
    left: 70,
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
  icons8Layout1: {
    height: 30,
    width: 36,
    left: 254,
    position: "absolute",
  },
  miniTypo1: {
    height: 40,
    width: 90,
    fontSize: FontSize.size_smi,
    left: 164,
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
  medidaTypo: {
    left: 57,
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
  icons8Layout: {
    width: 33,
    left: 266,
    height: 30,
  },
  servicio12Position: {
    top: 379,
    position: "absolute",
  },
  miniTypo: {
    left: 158,
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
    position: "absolute",
  },
  medidasScreenChild: {
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
  icons8CarpetaDePelculas64: {
    left: 117,
    top: 601,
  },
  medidasScreenInner: {
    top: 588,
    left: -5,
  },
  medidasPreventivas: {
    top: 85,
    left: 87,
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
    top: 150,
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
    left: 42,
  },
  servicio1: {
    top: 181,
    height: 47,
    width: 177,
    left: 70,
    position: "absolute",
  },
  icons8Desplegable647: {
    top: 174,
  },
  medidasScreenChild1: {
    top: 150,
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
    left: 42,
  },
  servicio11: {
    top: 181,
    height: 47,
    width: 177,
    left: 70,
    position: "absolute",
  },
  medidasScreenChild2: {
    top: 150,
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
    left: 42,
  },
  miniDescripcionDe: {
    top: 174,
  },
  medida1: {
    top: 174,
  },
  medidasScreenChild3: {
    top: 249,
  },
  miniDescripcionDe1: {
    top: 268,
  },
  icons8Medida642: {
    top: 277,
    position: "absolute",
  },
  medida2: {
    top: 280,
  },
  medidasChildShadowBox: {
    top: 348,
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
    left: 42,
    position: "absolute",
  },
  servicio12: {
    height: 47,
    width: 177,
    left: 70,
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
  icons8Desplegable6419: {
    top: 372,
  },
  miniDescripcionDe2: {
    top: 372,
  },
  medida3: {
    top: 378,
  },
  medidasScreenChild6: {
    top: 447,
  },
  miniDescripcionDe3: {
    top: 469,
  },
  icons8Medida644: {
    top: 478,
    position: "absolute",
  },
  medida4: {
    top: 474,
  },
  icons8Medida641: {
    top: 174,
    position: "absolute",
  },
  icons8Medida643: {
    width: 33,
    left: 266,
    height: 30,
  },
  icons8PginaPrincipal642: {
    top: 5,
    left: 317,
    width: 26,
    height: 26,
    position: "absolute",
  },
  medidasScreen: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default MedidasScreen;
