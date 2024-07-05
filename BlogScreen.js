import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const BlogScreen = () => {
  const navigation = useNavigation(); // Initialize navigation object

  return (
    <ImageBackground
      source={require("../assets/backgroundimg.png")}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <SafeAreaView style={styles.container}>
          {/* Top Row Container */}
          <View style={styles.topRow}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Image
                source={require("../assets/logo.png")}
                style={styles.logo}
              />
            </TouchableOpacity>
            <Text style={styles.titleText}>Blogs</Text>
            <View style={styles.iconContainer}>
              <Ionicons
                name="notifications-sharp"
                size={24}
                color="black"
                style={styles.notificationIcon}
              />
              <MaterialIcons name="settings" size={24} color="black" />
            </View>
          </View>

          {/* First Blog Box */}
          <View style={styles.box}>
            <View style={styles.boxTextContainer}>
              <Text style={styles.boxTextBold}>
                Why the Current Generation is More Prone to Lifestyle Disorders
              </Text>
              <Text style={styles.boxText}>
                {"\n"}
                In today's fast-paced world, lifestyle disorders have become
                increasingly common, particularly among the younger generation.
                Factors such as sedentary behavior, poor dietary choices, and
                high-stress levels contribute
              </Text>
            </View>
            <Image
              source={require("../assets/blog1.png")}
              style={styles.blogImage}
            />
          </View>
          {/* Second Blog Box */}
          <View style={styles.box}>
            <View style={styles.boxTextContainer}>
              <Text style={styles.boxTextBold}>
                Patterns of Lifestyle Changes to Combat Modern Disorders
              </Text>
              <Text style={styles.boxText}>
                {"\n"}
                The rise in lifestyle disorders among today's generation calls
                for an urgent shift in daily habits and behaviors. By adopting
                positive lifestyle changes, individuals can significantly reduce
                their risk of developing chronic health
              </Text>
            </View>
            <Image
              source={require("../assets/blog2.png")}
              style={styles.blogImage}
            />
          </View>

          {/* Third Blog Box */}
          <View style={styles.box}>
            <View style={styles.boxTextContainer}>
              <Text style={styles.boxTextBold}>
                The Impact of Modern Lifestyles on Health: Understanding
                Lifestyle Disorders
              </Text>
              <Text style={styles.boxText}>
                {"\n"}
                Modern lifestyles are drastically different from those of
                previous generations, characterized by increased reliance on
                technology, fast food, and sedentary behaviors.
              </Text>
            </View>
            <Image
              source={require("../assets/blog3.png")}
              style={styles.blogImage}
            />
          </View>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.7)", // Light overlay with 70% opacity
  },
  container: {
    flex: 1,
    paddingTop: 50, // Adjust this value to give some top padding
    paddingHorizontal: 20, // Adjust this value for horizontal spacing
    alignItems: "center", // Center content horizontally
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center", // Align items vertically in the row
    justifyContent: "space-between", // Space out items evenly
    width: "100%", // Take the full width of the container
    paddingHorizontal: 20, // Add horizontal padding for better spacing
    marginBottom: 20, // Optional margin bottom for spacing
  },
  logo: {
    width: 55,
    height: 55,
    resizeMode: "contain",
  },
  titleText: {
    color: "#254336",
    fontSize: 25,
    fontWeight: "bold",
    marginRight: -40,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  notificationIcon: {
    padding: 10, // Optional padding for better touch area
    marginRight: 20, // Adjust this value to move the icon to the left
  },
  box: {
    backgroundColor: "#25433640", // Background color with opacity
    height: 250, // Adjust height as needed
    width: "90%", // Adjust width as needed
    marginTop: 20, // Optional margin for spacing
    borderRadius: 10, // Optional border radius
    flexDirection: "row", // Arrange content horizontally
    alignItems: "center", // Center content vertically
    padding: 10, // Add padding inside the box
    marginBottom: 20,
  },
  boxTextContainer: {
    flex: 1, // Take available space
  },
  boxTextBold: {
    color: "#254336",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  boxText: {
    color: "#254336",
    fontSize: 16,
    fontWeight: "500",
    marginTop: -7,
  },
  blogImage: {
    width: 150, // Adjust width as needed
    height: 230, // Adjust height as needed
    marginLeft: 10, // Optional margin to separate text and image
  },
  scrollContainer: {
    flexGrow: 1,
    //alignItems: "center",
    paddingBottom: 20, // Adjust this value to give some bottom padding for the last section
  },
});

export default BlogScreen;
