import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { AvaliationsItem } from './item';
import bikesData from '../../db.json';

export interface ListProps {
    id: string;
    name: string;
    image: string;
    rating: number;
    desc?: string;
}

export function AvaliationsList() {
    const [bikes, setBikes] = useState<ListProps[]>([]);

    useEffect(() => {
        setBikes(bikesData.bikes);
    }, []);

    return (
        <View className='px-4 flex-1 w-full h-full mb-12 gap-4'>
            {bikes.map(item => (
                <AvaliationsItem item={item} key={item.id} />
            ))}
        </View>
    );
}