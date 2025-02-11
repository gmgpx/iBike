import { View, Pressable, Text, Image } from 'react-native';
import { ListProps } from '..'; 
import { Ionicons } from '@expo/vector-icons';

export function AvaliationsItem({item} : {item : ListProps}) {
 return (
   <Pressable className='flex flex-row items-center justify-start gap-2'>
    <Image 
    source={{ uri: item.image }}
    className='w-20 h-20 rounded-xl'
    />
    <View className='flex gap-2'>
        <Text
        className='text-base text-black leading-4 font-bold'
        numberOfLines={2}
        >
            {item.name}
        </Text>

        <View className='flex-row items-center gap-1'>
            <Ionicons name='star' size={14} color="#ca8a04" />
            <Text className='text-md'>{item.rating}</Text>
        </View>

        <View className='text-sm'>
            <Text>{item.desc}</Text>
        </View>
    </View>
    </Pressable>
  );
}