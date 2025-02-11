import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { AvaliationsItem } from './item';

export interface ListProps {
    id: string;
    name: string;
    image: string;
    rating: number;
    desc?: string;
}

export function AvaliationsList() {

    const [avaliations, setAvaliations] = useState<ListProps[]>([])

    useEffect(() => {
        async function getBikes() {
            // Sempre checar seu endereço ipv4 
            // com o comando 'ipconfig' no cmd
            const response = await fetch('http://10.109.28.64:3000/bikes')
            const data = await response.json()
            setAvaliations(data);
        }

        getBikes();

    }, [])

    return (
        <View className='px-4 flex-1 w-full h-full mb-12 gap-4'>
            {avaliations.map( item => (
                <AvaliationsItem item={item} key={item.id}/>
            ))}
        </View>
    );
}