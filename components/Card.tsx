import {View, Text} from 'react-native'
import * as Progress from 'react-native-progress';

// TODO: Use Props to make this component reusable
export default function Card() {
  return (
    <View className="border p-2 rounded-lg my-4 pb-5 w-[48%]">
      <View className="flex flex-row justify-between items-center my-4">
        <Text className="font-medium text-xl ">Soil Moisture</Text>
        <Text className="text-xl">💧</Text>
      </View>
      <View className="flex flex-row justify-between items-center my-4">
        <Text className="font-bold text-2xl">65%</Text>
        <Text className="py-1 px-3 rounded-2xl bg-green-200 text-green-800">
          Optimal
        </Text>
      </View>
      <Progress.Bar progress={0.65} width={null} color="black" />
    </View>
  );
}
