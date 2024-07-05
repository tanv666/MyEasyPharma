import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialIcons } from "@expo/vector-icons";

const AboutUsScreen = () => {
  const navigation = useNavigation();

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
            <Text style={styles.titleText}> About Us</Text>
            <View style={styles.iconContainer}>
              <Ionicons
                name="notifications-sharp"
                size={24}
                color="black"
                style={styles.notificationIcon}
              />
              <MaterialIcons
                name="settings"
                size={24}
                color="black"
                style={styles.settingsIcon}
              />
            </View>
          </View>
          {/* Content Container */}
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.contentContainer}>
              <Text style={styles.descriptionText}>
                MyEasyPharma is at the forefront of merging technology with
                healthcare to innovate preventive health measures for working
                professionals.
              </Text>
              {/* Vision Section */}
              <View style={styles.section}>
                {/* Vision Title */}
                <View style={styles.titleContainer}>
                  <Text style={styles.sectionTitle}>Vision</Text>
                  <Image
                    source={require("../assets/vision.png")}
                    style={styles.vision}
                  />
                </View>
                {/* Vision Text */}
                <Text style={styles.sectionText}>
                  At MyEasyPharma, our vision is to pioneer a shift in global
                  health paradigms, focusing not just on treating illnesses but
                  on preventing them before they occur. We primarily aim for
                  improved employee health which leads to increased and enhanced
                  efficiency at the workplace.
                </Text>
              </View>
              {/* What We Do Section */}
              <View style={styles.section}>
                {/* What We Do Title */}
                <View style={styles.titleContainer}>
                  <Text style={styles.sectionTitle}>What We Do</Text>
                  <Image
                    source={require("../assets/steth.png")}
                    style={styles.stethImage}
                  />
                </View>
                {/* What We Do Text */}
                <Text style={styles.sectionText}>
                  We provide comprehensive professional health advice on
                  parameters such as diet, physical activity, ideal screen time,
                  and others, which reduces susceptibility to workplace-induced
                  lifestyle disorders.
                </Text>
              </View>
              {/* Mission Section */}
              <View style={styles.section}>
                {/* Mission Title */}
                <View style={styles.titleContainer}>
                  <Text style={styles.sectionTitle}>Mission</Text>
                  <Image
                    source={require("../assets/mission.png")}
                    style={styles.missionImage}
                  />
                </View>
                {/* Mission Text */}
                <Text style={styles.sectionText}>
                  Through our efforts, we aim to reduce the burden of chronic
                  diseases and elevate public health standards through
                  specialized and well-curated corporate wellness programs.
                </Text>
              </View>
            </View>
          </ScrollView>
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
    justifyContent: "center", // Center content vertically
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center", // Align items vertically in the row
    justifyContent: "space-between", // Space evenly between items
    marginBottom: 20, // Optional margin bottom for spacing
  },
  logo: {
    width: 55,
    height: 55,
    resizeMode: "contain",
    marginRight: 50,
  },
  titleText: {
    color: "#254336",
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 40,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    paddingBottom: 20, // Adjust this value to give some bottom padding for the last section
  },
  contentContainer: {
    width: "100%",
    alignItems: "center",
  },
  descriptionText: {
    color: "#254336",
    fontSize: 24,
    fontWeight: "500",
    marginTop: 20,
    marginHorizontal: 20,
    lineHeight: 29,
    textAlign: "center",
  },
  section: {
    width: "100%",
    marginTop: 20,
    alignItems: "center",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    width: "90%",
  },
  sectionTitle: {
    color: "#254336",
    fontSize: 27,
    fontWeight: "bold",
  },
  vision: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  stethImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  missionImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  sectionText: {
    color: "#254336",
    fontSize: 22,
    marginTop: 10,
    marginHorizontal: 20,
    //textAlign: "center",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "auto", // Move icons to the right
    marginRight: 20, // Adjust spacing between icons and title
  },
  notificationIcon: {
    padding: 10,
    marginLeft: 40,
  },
  settingsIcon: {
    padding: 10,
    marginLeft: 10, // Adjust spacing between icons
  },
});

export default AboutUsScreen;
