import { FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { CardHorizontalBikes } from './bikes'

export interface BikeProps { 
    id: string, 
    name: string, 
    price: number,
    brand: string,
    kilometer: number,
    rating: number,
    image: string,
    brandId: string;
  }

export function TrendingBikes() {
    const [bikes, setBikes] = useState<BikeProps[]>([])

    useEffect(() => {
        async function getBikes(){
            // Sempre checar seu endereço ipv4 
            // com o comando 'ipconfig' no cmd
            const response = await fetch('http://10.109.28.64:3000/bikes')
            const data = await response.json()
            setBikes(data);
        }

        getBikes();

    }, [])

 return (

   <FlatList 
   data={bikes}
   renderItem={ ({ item }) => <CardHorizontalBikes bike={ item } /> }
   horizontal={true}
   contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16  }}
   showsHorizontalScrollIndicator={false}
   />

  );
}

// Faculdade\mobile\iBike\src\components\trending\index.tsx