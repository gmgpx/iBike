import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import CardBrand from './brands'
import bikesData from '../../db.json';

export interface BrandProps {
    id: string;
    name: string;
    image: string;
}

export function Brands() {

  const [brands, setBikes] = useState<BrandProps[]>([]);

  useEffect(() => {
      setBikes(bikesData.brands); 
  }, []);

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