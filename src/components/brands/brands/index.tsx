import { Pressable, Text, Image } from 'react-native';
import { BrandProps } from '..';

export default function CardBrand({ item }: { item: BrandProps }) {
    return (
        <Pressable 
        className='flex flex-col items-center justify-center'
        onPress={ () => console.log("Clicou na marca " + item.name) }
        >
            <Image
                source={{ uri: item.image }}
                className='w-20 h-20 rounded-full'
                resizeMode="cover"
            />
            <Text
                className='text-sm mt-2 w-20 text-center leading-4 text-black'
                numberOfLines={2}
            >
                {item.name}
            </Text>
        </Pressable>
    );
}