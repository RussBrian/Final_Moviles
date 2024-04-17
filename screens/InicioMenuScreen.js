import React, { useState } from "react";
import { StyleSheet, View, Text, Image, ScrollView, Dimensions } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const { width } = Dimensions.get("window");

const images = [
  require("../assets/slide1.webp"),
  require("../assets/slide2.jpg"),
  require("../assets/silde3.jpg"),
];

const InicioMenuScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const contentOffset = event.nativeEvent.contentOffset.x;

    const index = Math.floor(contentOffset / slideSize);
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        style={styles.scrollView}
      >
        {images.map((image, index) => (
          <View key={index} style={styles.imageContainer}>
            <Image source={image} style={styles.image} />
          </View>
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              index === activeIndex ? styles.paginationDotActive : null,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  scrollView: {
    width: width,
    height: "100%",
  },
  imageContainer: {
    width: width * 0.8, // Reduciendo el tamaño de la imagen
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: width * 0.1, // Espacio entre imágenes
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10, // Bordes redondeados
  },
  pagination: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    marginHorizontal: 5,
  },
  paginationDotActive: {
    backgroundColor: "#FFF",
  },
});

export default InicioMenuScreen;
