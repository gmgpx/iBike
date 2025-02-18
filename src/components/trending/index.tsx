import { FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { CardHorizontalBikes } from './bikes'
import bikesData from '../../db.json';

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
    const [bikes, setBikes] = useState<BikeProps[]>([]);

    useEffect(() => {
        setBikes(bikesData.bikes);
    }, []);

    return (
        <FlatList 
            data={bikes}
            renderItem={ ({ item }) => <CardHorizontalBikes bike={ item } /> }
            horizontal={true}
            contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
            showsHorizontalScrollIndicator={false}
        />
    );
}
