import { Text, Pressable, View, Image } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons"

export default function Index() {
  return (
    <View className="w-full flex flex-row items-center justify-between">
      <Pressable
        className="w-10 h-10 bg-white rounded-full flex  
      justify-center items-center"
      >
        <Image 
        className="w-10 h-10 rounded-full"
        source={require("../../assets/logo.jpeg")} />
      </Pressable>

      <View className="flex flex-col items-center justify-center">
        <Text className="text-center text-sm text-slate-800">Localizações</Text>

        <View className="flex-row items-center justify-center gap-1">
          <Feather name="map-pin" size={14} color="#FF0000" />
          <Text className="text-lg font-bold">Sorocaba</Text>
        </View>
      </View>


      <Pressable
        className="w-10 h-10 bg-white rounded-full flex 
      justify-center items-center"
      >
        <Feather name="bell" size={20} color="#121212" />
      </Pressable>
    </View>
  );
}
