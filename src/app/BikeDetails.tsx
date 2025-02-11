import { View, Text, Image, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'expo-router';

export default function BikeDetails() {
  const { id } = useSearchParams(); // Obtém o id da moto da URL
  const [bike, setBike] = useState(null);

  useEffect(() => {
    async function fetchBikeDetails() {
      const response = await fetch(`http://10.109.28.64:3000/bikes/${id}`);
      const data = await response.json();
      setBike(data);
    }

    fetchBikeDetails();
  }, [id]);

  if (!bike) {
    return (
      <View>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <View>
        <Image source={{ uri: bike.image }} className="w-full h-60" />
        <Text className="text-2xl font-bold">{bike.name}</Text>
        <Text className="text-xl">R$ {bike.price}</Text>
        <Text className="text-lg">{bike.brand} - {bike.kilometer} km</Text>
        <Text className="text-sm">{bike.description}</Text>
      </View>
    </ScrollView>
  );
}
