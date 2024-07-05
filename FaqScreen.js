import React, { useState } from "react";
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

const FaqScreen = () => {
  const navigation = useNavigation(); // Initialize navigation object

  const faqs = [
    {
      question: "What is MyEasyPharma?",
      answer:
        "MyEasyPharma is a digital platform that offers personalized health solutions to prevent lifestyle disorders and NCDs through a combination of AI technology and personal health coaching.",
    },
    {
      question: "How does MyEasyPharma help prevent lifestyle diseases?",
      answer:
        "By analyzing your daily health inputs like stress levels, sleep quality, and calorie intake, MyEasyPharma provides tailored advice and solutions designed to improve your overall health and prevent diseases.",
    },
    {
      question: "Who can benefit from using MyEasyPharma?",
      answer:
        "Working professionals looking to manage their health proactively will find our services particularly beneficial, especially those interested in personalized health monitoring and advice.",
    },
    {
      question: "How do I sign up for MyEasyPharma?",
      answer:
        "Visit our website or download our mobile app, and sign up by creating an account. You'll be guided through a simple setup process to start tracking your health data.",
    },
    {
      question: "What are the benefits of MyEasyPharma?",
      answer:
        "MyEasyPharma offers personalized health insights, tracks your health metrics, provides wellness tips, and connects you with health professionals to ensure you stay on top of your health goals.",
    },
    {
      question: "What makes MyEasyPharma different from other health apps?",
      answer:
        "Unlike standard health apps, MyEasyPharma combines AI-driven insights with personal coaching from health experts to offer customized, actionable health plans.",
    },
    {
      question: "What does MyEasyPharma cost?",
      answer:
        "We offer various subscription plans tailored to different needs and budgets. Details are available on our pricing page.",
    },
    {
      question: "Who has access to my health records?",
      answer:
        "Your health data is accessible only to you and your chosen health coach, unless you opt to share it with other health providers.",
    },
    {
      question: "How secure is my personal health data?",
      answer:
        "We use the latest encryption technologies to ensure your data is stored securely and comply with all relevant health data protection regulations. ",
    },
    {
      question: "What is your privacy policy regarding data sharing?",
      answer:
        "We do not share your data with any third parties without your explicit consent. More details are available in our privacy policy.",
    },
    {
      question: "How can MyEasyPharma help me manage work-related stress?",
      answer:
        "MyEasyPharma provides tools to monitor your stress levels and offers customized strategies, such as guided meditation or time management tips, based on your specific stress triggers identified through the app.",
    },
    {
      question:
        "Are there specific features in MyEasyPharma that target stress reduction?",
      answer:
        "Yes, we offer features like stress tracking, mindfulness exercises, and personalized relaxation techniques guided by our health coaches to specifically help reduce stress.",
    },
    {
      question:
        "How does MyEasyPharma customize stress management approaches for different professions?",
      answer:
        "Based on the data you input, including your profession and daily schedules, MyEasyPharma tailors stress management plans that fit your specific career demands and lifestyle, ensuring relevance and effectiveness.",
    },
  ];

  // Initialize state with only the first question expanded
  const [expanded, setExpanded] = useState({ 0: true });

  const toggleExpand = (index) => {
    setExpanded({
      ...expanded,
      [index]: !expanded[index],
    });
  };

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
            <Text style={styles.titleText}>FAQs</Text>
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
            {/* FAQ Content */}
            <View style={styles.content}>
              {faqs.map((faq, index) => (
                <View key={index} style={styles.faqContainer}>
                  {/* Question Row */}
                  <TouchableOpacity
                    style={styles.questionRow}
                    onPress={() => toggleExpand(index)}
                  >
                    <Text style={styles.questionText}>{faq.question}</Text>
                    <Ionicons
                      name={expanded[index] ? "chevron-up" : "chevron-down"}
                      size={24}
                      color="#254336"
                    />
                  </TouchableOpacity>
                  {/* Answer Row */}
                  {expanded[index] && (
                    <View style={styles.answerRow}>
                      <Text style={styles.answerText}>{faq.answer}</Text>
                    </View>
                  )}
                </View>
              ))}
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
    marginRight: 90,
  },
  titleText: {
    color: "#254336",
    fontSize: 25,
    fontWeight: "bold",
    marginRight: 50,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    paddingBottom: 20, // Adjust this value to give some bottom padding for the last section
  },
  content: {
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  faqContainer: {
    marginBottom: 15,
  },
  questionRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#25433640",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  questionText: {
    flex: 1,
    color: "#254336",
    fontSize: 20,
    fontWeight: "700",
  },
  answerRow: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 8,
    marginTop: 5,
  },
  answerText: {
    color: "#254336",
    fontSize: 20,
    fontWeight: "500",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  notificationIcon: {
    padding: 10,
  },
  settingsIcon: {
    padding: 10,
    marginLeft: 10, // Adjust spacing between icons
  },
});

export default FaqScreen;
