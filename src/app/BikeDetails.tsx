import { View, Text, Image, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';

export default function BikeDetails() {
  const router = useRouter(); // Hook do expo-router
  const [bike, setBike] = useState(null);
  const [brand, setBrand] = useState(null);
  const [id, setId] = useState(null);

  useEffect(() => {
    if (router?.query?.id) {
      setId(router.query.id); // Acessando corretamente o id via query
      console.log('ID capturado:', router.query.id);
    }
  }, [router.query]);

  useEffect(() => {
    if (id) {
      async function fetchBikeDetails() {
        try {
          console.log('Buscando detalhes da moto com ID:', id);

          // Fetch para buscar os dados da moto
          const response = await fetch(`http://10.109.28.64:3000/bikes/${id}`);
          if (!response.ok) {
            console.error('Erro ao obter os dados da moto. Status:', response.status);
            return;
          }
          const data = await response.json();
          console.log('Dados da moto:', data);
          setBike(data);

          // Fetch para buscar os dados da marca
          const brandResponse = await fetch(`http://10.109.28.64:3000/brands/${data.brandId}`);
          if (!brandResponse.ok) {
            console.error('Erro ao obter os dados da marca. Status:', brandResponse.status);
            return;
          }
          const brandData = await brandResponse.json();
          console.log('Dados da marca:', brandData);
          setBrand(brandData);

        } catch (error) {
          console.error('Erro ao buscar os detalhes:', error);
        }
      }

      fetchBikeDetails();
    }
  }, [id]);

  if (!bike || !brand) {
    console.log('Carregando... Bike:', bike, 'Brand:', brand); // Verifique os dados antes de renderizar
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
        <Text className="text-lg">{brand.name} - {bike.kilometer} km</Text>
        <Text className="text-sm">{bike.desc}</Text>
      </View>
    </ScrollView>
  );
}
