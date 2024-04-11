import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const CerrarSesinScreen = () => {
  return (
    <View style={styles.cerrarSesinScreen}>
      <View style={[styles.cerrarSesinScreenChild, styles.cerrarPosition1]} />
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
        source={require("../assets/icons8noticias64-11.png")}
      />
      <Image
        style={[styles.icons8Marcapginas641, styles.icons8Layout1]}
        contentFit="cover"
        source={require("../assets/icons8marcapginas64-11.png")}
      />
      <Image
        style={[styles.icons8LazoMarcapginas641, styles.icons8Position]}
        contentFit="cover"
        source={require("../assets/icons8lazomarcapginas64-12.png")}
      />
      <Image
        style={[styles.icons8Salida641, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8salida64-11.png")}
      />
      <Image
        style={[styles.cerrarSesinScreenItem, styles.cerrarPosition1]}
        contentFit="cover"
        source={require("../assets/rectangle-61.png")}
      />
      <Image
        style={styles.icons8Men642}
        contentFit="cover"
        source={require("../assets/icons8men64-21.png")}
      />
      <Text
        style={[styles.fulanitoDeTal, styles.situacionesTypo]}
      >{`Fulanito de tal
`}</Text>
      <Text
        style={[styles.noticiasEspecficas, styles.icons8Salida642Position]}
      >{`Noticias Específicas `}</Text>
      <Text style={[styles.reportarSituacin, styles.icons8Salida642Position]}>
        Reportar situación
      </Text>
      <Image
        style={[styles.icons8Mapa641, styles.icons8Position]}
        contentFit="cover"
        source={require("../assets/icons8mapa64-11.png")}
      />
      <Image
        style={[styles.icons8VuelvaAIntroducirEl, styles.icons8Layout1]}
        contentFit="cover"
        source={require("../assets/icons8vuelvaaintroducirelcdigopin64-12.png")}
      />
      <Image
        style={styles.cerrarSesinScreenInner}
        contentFit="cover"
        source={require("../assets/ellipse-32.png")}
      />
      <Image
        style={styles.rectangleIcon}
        contentFit="cover"
        source={require("../assets/rectangle-27.png")}
      />
      <Image
        style={[styles.cerrarSesinScreenChild1, styles.cerrarChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-11.png")}
      />
      <Text style={[styles.no, styles.noTypo]}>No</Text>
      <Image
        style={[styles.cerrarSesinScreenChild2, styles.cerrarPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-11.png")}
      />
      <Text style={[styles.si, styles.noTypo]}>{`Si
`}</Text>
      <Text style={[styles.deseaCerrarSesin, styles.cerrarPosition]}>
        Desea Cerrar Sesión?
      </Text>
      <Image
        style={[styles.icons8Salida642, styles.icons8Salida642Position]}
        contentFit="cover"
        source={require("../assets/icons8salida64-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cerrarPosition1: {
    width: 316,
    left: 0,
    top: 0,
    position: "absolute",
  },
  situacionesTypo: {
    height: 51,
    width: 200,
    textAlign: "left",
    fontFamily: FontFamily.manjariRegular,
    fontSize: FontSize.size_base,
  },
  icons8Layout1: {
    width: 39,
    position: "absolute",
  },
  icons8Position: {
    left: 15,
    height: 38,
    position: "absolute",
  },
  icons8Layout: {
    width: 40,
    height: 38,
  },
  icons8Salida642Position: {
    left: 55,
    position: "absolute",
  },
  cerrarChildLayout: {
    height: 34,
    width: 92,
    top: 410,
  },
  noTypo: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorMediumblue,
    fontFamily: FontFamily.manjariRegular,
  },
  cerrarPosition: {
    left: 80,
    position: "absolute",
  },
  cerrarSesinScreenChild: {
    backgroundColor: Color.colorLightsteelblue,
    height: 640,
  },
  cerrarSesin: {
    top: 585,
    color: Color.colorMediumblue,
    width: 200,
    textAlign: "left",
    fontFamily: FontFamily.manjariRegular,
    fontSize: FontSize.size_base,
    left: 66,
    position: "absolute",
  },
  cambiarContrasea: {
    top: 503,
    color: Color.colorMediumblue,
    width: 200,
    textAlign: "left",
    fontFamily: FontFamily.manjariRegular,
    fontSize: FontSize.size_base,
    left: 66,
    position: "absolute",
  },
  mapaDeSituaciones: {
    top: 434,
    color: Color.colorMediumblue,
    width: 200,
    textAlign: "left",
    fontFamily: FontFamily.manjariRegular,
    fontSize: FontSize.size_base,
    left: 66,
    position: "absolute",
  },
  misSituaciones: {
    top: 359,
    left: 58,
    color: Color.colorMediumblue,
    width: 200,
    textAlign: "left",
    fontFamily: FontFamily.manjariRegular,
    fontSize: FontSize.size_base,
    position: "absolute",
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
    position: "absolute",
  },
  cerrarSesinScreenItem: {
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
    width: 200,
    textAlign: "left",
    fontFamily: FontFamily.manjariRegular,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  noticiasEspecficas: {
    top: 198,
    height: 51,
    width: 200,
    textAlign: "left",
    fontFamily: FontFamily.manjariRegular,
    fontSize: FontSize.size_base,
    color: Color.colorMediumblue,
  },
  reportarSituacin: {
    top: 284,
    height: 51,
    width: 200,
    textAlign: "left",
    fontFamily: FontFamily.manjariRegular,
    fontSize: FontSize.size_base,
    color: Color.colorMediumblue,
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
  cerrarSesinScreenInner: {
    top: 18,
    left: 12,
    width: 100,
    height: 100,
    position: "absolute",
  },
  rectangleIcon: {
    top: 298,
    left: 44,
    width: 272,
    height: 212,
    position: "absolute",
  },
  cerrarSesinScreenChild1: {
    left: 209,
    position: "absolute",
  },
  no: {
    left: 241,
    height: 42,
    width: 144,
    top: 417,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  cerrarSesinScreenChild2: {
    height: 34,
    width: 92,
    top: 410,
  },
  si: {
    left: 114,
    height: 42,
    width: 144,
    top: 417,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  deseaCerrarSesin: {
    top: 365,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorMediumblue,
    fontFamily: FontFamily.manjariRegular,
    left: 80,
    height: 38,
    width: 200,
  },
  icons8Salida642: {
    top: 309,
    width: 40,
    height: 38,
  },
  cerrarSesinScreen: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 640,
  },
});

export default CerrarSesinScreen;
