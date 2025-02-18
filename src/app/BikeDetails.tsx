import { View, Text, Image, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import bikesData from '../db.json';

export interface BikeProps {
  id: string;
  name: string;
  price: number;
  brand: string;
  kilometer: number;
  rating: number;
  image: string;
  desc: string;  
}

export default function BikeDetails() {
  const [bikes, setBikes] = useState<BikeProps[]>([]);
  
  useEffect(() => {
    setBikes(bikesData.bikes); 
  }, []);

  
  const bike = bikes[0];  

  if (!bike) {
    return <Text>Loading...</Text>; 
  }

  return (
    <ScrollView className="p-4">
      <View className="space-y-4">
        <Image 
          source={{ uri: bike.image }} 
          className="w-full h-60 rounded-xl"
          resizeMode="cover" 
        />
        <Text className="text-2xl font-bold">{bike.name}</Text>
        <Text className="text-xl text-green-700">R$ {bike.price}</Text>
        <Text className="text-lg text-black">{bike.brand} - {bike.kilometer} km</Text>
        <Text className="text-sm text-gray-600">{bike.desc}</Text>
      </View>
    </ScrollView>
  );
}
