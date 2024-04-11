import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const InicioMenuScreen = () => {
  return (
    <View style={styles.inicioMenuScreen}>
      <View style={[styles.inicioMenuScreenChild, styles.inicioPosition]} />
      <Text style={[styles.cerrarSesin, styles.situacionesTypo]}>{`Cerrar sesión
`}</Text>
      <Text style={[styles.cambiarContrasea, styles.situacionesTypo]}>
        Cambiar contraseña
      </Text>
      <Text
        style={[styles.mapaDeSituaciones, styles.situacionesTypo]}
      >{`Mapa de situaciones
`}</Text>
      <Text
        style={[styles.misSituaciones, styles.situacionesTypo]}
      >{`Mis situaciones

`}</Text>
      <Image
        style={styles.icons8Noticias641}
        contentFit="cover"
        source={require("../assets/icons8noticias64-1.png")}
      />
      <Image
        style={[styles.icons8Marcapginas641, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8marcapginas64-1.png")}
      />
      <Image
        style={[styles.icons8LazoMarcapginas641, styles.icons8Position]}
        contentFit="cover"
        source={require("../assets/icons8lazomarcapginas64-1.png")}
      />
      <Image
        style={styles.icons8Salida641}
        contentFit="cover"
        source={require("../assets/icons8salida64-1.png")}
      />
      <Image
        style={[styles.inicioMenuScreenItem, styles.inicioPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-6.png")}
      />
      <Image
        style={styles.icons8Men642}
        contentFit="cover"
        source={require("../assets/icons8men64-2.png")}
      />
      <Text
        style={[styles.fulanitoDeTal, styles.situacionesTypo]}
      >{`Fulanito de tal
`}</Text>
      <Text
        style={[styles.noticiasEspecficas, styles.reportarSituacinTypo]}
      >{`Noticias Específicas `}</Text>
      <Text style={[styles.reportarSituacin, styles.reportarSituacinTypo]}>
        Reportar situación
      </Text>
      <Image
        style={[styles.icons8Mapa641, styles.icons8Position]}
        contentFit="cover"
        source={require("../assets/icons8mapa64-1.png")}
      />
      <Image
        style={[styles.icons8VuelvaAIntroducirEl, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8vuelvaaintroducirelcdigopin64-1.png")}
      />
      <Image
        style={styles.inicioMenuScreenInner}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inicioPosition: {
    width: 316,
    left: 0,
    top: 0,
    position: "absolute",
  },
  situacionesTypo: {
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
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  icons8Layout: {
    width: 39,
    position: "absolute",
  },
  icons8Position: {
    left: 15,
    height: 38,
    position: "absolute",
  },
  reportarSituacinTypo: {
    left: 55,
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
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  inicioMenuScreenChild: {
    backgroundColor: Color.colorLightsteelblue,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 640,
  },
  cerrarSesin: {
    top: 585,
    color: Color.colorMediumblue,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    height: 51,
    width: 200,
    textAlign: "left",
    fontFamily: FontFamily.manjariRegular,
    fontSize: FontSize.size_base,
    left: 66,
  },
  cambiarContrasea: {
    top: 503,
    color: Color.colorMediumblue,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    height: 51,
    width: 200,
    textAlign: "left",
    fontFamily: FontFamily.manjariRegular,
    fontSize: FontSize.size_base,
    left: 66,
  },
  mapaDeSituaciones: {
    top: 434,
    color: Color.colorMediumblue,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    height: 51,
    width: 200,
    textAlign: "left",
    fontFamily: FontFamily.manjariRegular,
    fontSize: FontSize.size_base,
    left: 66,
  },
  misSituaciones: {
    top: 359,
    left: 58,
    color: Color.colorMediumblue,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    height: 51,
    width: 200,
    textAlign: "left",
    fontFamily: FontFamily.manjariRegular,
    fontSize: FontSize.size_base,
  },
  icons8Noticias641: {
    top: 185,
    left: 11,
    height: 38,
    width: 38,
    position: "absolute",
  },
  icons8Marcapginas641: {
    top: 271,
    left: 10,
    height: 38,
  },
  icons8LazoMarcapginas641: {
    top: 346,
    width: 34,
  },
  icons8Salida641: {
    top: 572,
    left: 18,
    width: 40,
    height: 38,
    position: "absolute",
  },
  inicioMenuScreenItem: {
    height: 137,
  },
  icons8Men642: {
    top: 6,
    left: 280,
    width: 31,
    height: 25,
    position: "absolute",
  },
  fulanitoDeTal: {
    top: 62,
    left: 130,
    color: Color.colorWhitesmoke,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    height: 51,
    width: 200,
    textAlign: "left",
    fontFamily: FontFamily.manjariRegular,
    fontSize: FontSize.size_base,
  },
  noticiasEspecficas: {
    top: 198,
  },
  reportarSituacin: {
    top: 284,
  },
  icons8Mapa641: {
    top: 421,
    width: 38,
  },
  icons8VuelvaAIntroducirEl: {
    top: 496,
    left: 16,
    height: 39,
  },
  inicioMenuScreenInner: {
    top: 18,
    left: 12,
    width: 100,
    height: 100,
    position: "absolute",
  },
  inicioMenuScreen: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 640,
  },
});

export default InicioMenuScreen;
