import {
  Image,
  StyleSheet,
  Platform,
  Text,
  ScrollView,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGlobalContext } from "@/context/GlobalProvider";
import Card from "@/components/Card";

export default function HomeScreen() {
  const { name } = useGlobalContext();
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full h-full px-4 my-6">
          <View className="flex flex-row justify-between items-center">
            <Text className="text-2xl font-bold">System Overview</Text>
            <Text className="text-md text-gray-500 font-light">
              Last Updated: just now
            </Text>
          </View>
          {/* Todo: Create another view>Card just like below and pass data as props */}
          <View className="flex flex-row justify-between items-center my-4 w-full">
            {/* Soil Moisture, Soil pH */}
            <Card />
            <Card />
          </View>
          {/* Another View>Card for EC Level and Temperature */}


        {/* Create a Status Component inside components folder, photo whatsapp pe hogi */}
        
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
