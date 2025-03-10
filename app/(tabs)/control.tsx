import {
  StyleSheet,
  Image,
  Platform,
  Text,
  View,
  ScrollView,
  Switch,
} from "react-native";
import Slider from "@react-native-community/slider";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
export default function TabTwoScreen() {
  // TODO: Move state to context
  const [autoMode, setAutoMode] = useState(false);
  const [waterPump, setWaterPump] = useState(false);
  const [waterAmount, setWaterAmount] = useState(0);
  const [fertilizerAmount, setFertilizerAmount] = useState(0);
  const [fertilizerSystem, setFertilizerSystem] = useState(false);
  const toggleAutoMode = () => setAutoMode((previousState) => !previousState);

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full h-full px-4 my-6">
          <View className="flex flex-row justify-between items-center">
            <Text className="font-bold text-2xl">System Control</Text>
            <View className="flex flex-row items-center gap-5">
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={autoMode ? "#f5dd4b" : "#f4f3f4"}
                onValueChange={toggleAutoMode}
                value={autoMode}
              />
              <Text>Auto Mode</Text>
            </View>
          </View>
          <Text>
            {autoMode
              ? "System is running in automatic mode based on sensor data"
              : "Manual control mode enabled"}
          </Text>

          <View className="flex flex-col gap-4 border border-gray-400 rounded-lg p-4 my-4">
            {/* Water Amount */}
            <View className="flex flex-row justify-between items-center my-4 w-full">
              <Text className="font-bold">💧 Water Pump</Text>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={waterPump ? "#f5dd4b" : "#f4f3f4"}
                onValueChange={() =>
                  setWaterPump((previousState) => !previousState)
                }
                value={waterPump}
                disabled={autoMode}
              />
            </View>
            <View>
              <Text>Water Amount: {waterAmount}%</Text>
              <Slider
                style={{ width: "100%", height: 40 }}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#000000"
                maximumTrackTintColor="#c9c9c7"
                value={waterAmount}
                onSlidingComplete={(value) => setWaterAmount(value)}
                disabled={!waterPump}
                step={1}
              />
            </View>

            {/* Fertilizer System */}
            <View className="flex flex-row justify-between items-center my-4 w-full">
              <Text className="font-bold">💧 Water Pump</Text>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={fertilizerSystem ? "#f5dd4b" : "#f4f3f4"}
                onValueChange={() =>
                  setFertilizerSystem((previousState) => !previousState)
                }
                value={fertilizerSystem}
                disabled={autoMode}
              />
            </View>
            <View>
              <Text>Fertilizer System: {fertilizerAmount}%</Text>
              <Slider
                style={{ width: "100%", height: 40 }}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#000000"
                maximumTrackTintColor="#c9c9c7"
                value={fertilizerAmount}
                onSlidingComplete={(value) => setFertilizerAmount(value)}
                disabled={!fertilizerSystem}
                step={1}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
