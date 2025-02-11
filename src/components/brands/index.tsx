import { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import CardBrand from './brands'

export interface BrandProps {
    id: string;
    name: string;
    image: string;
}

export function Brands() {

    const [brands, setBrands] = useState<BrandProps[]>([])

    useEffect(() => {
        async function getBikes(){
            // Sempre checar seu endereço ipv4 
            // com o comando 'ipconfig' no cmd
            const response = await fetch('http://10.109.28.62:3000/brands')
            const data = await response.json()
            setBrands(data);
        }

        getBikes();

    }, [])

 return (
   <FlatList 
      data={brands}
      renderItem={ ({ item }) => <CardBrand item ={ item } /> }
      horizontal={true}
      contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16  }}
      showsHorizontalScrollIndicator={false}
    />
  );
}