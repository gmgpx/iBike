import { View, Text, Image, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import { BikeProps } from '../components/trending';
import { useLocalSearchParams } from "expo-router";


// export interface BikeData {
//   id: string;
//   name: string;
//   price: number;
//   brand: string;
//   kilometer: number;
//   rating: number;
//   image: string;
//   desc: string;  
// }

export default function BikeDetails() {
  const { id, name, price, brand, kilometer, rating, image } = useLocalSearchParams();

  if (!id) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView className="p-4">
      <View className="space-y-4">
        <Image
          source={{ uri: image }}
          className="w-full h-60 rounded-xl"
          resizeMode="cover"
        />
        <Text className="text-2xl font-bold">{name}</Text>
        <Text className="text-xl text-green-700">R$ {price}</Text>
        <Text className="text-lg text-black">{brand} - {kilometer} km</Text>
        <Text className="text-sm text-gray-600">{rating}</Text>
      </View>
    </ScrollView>
  );
}
