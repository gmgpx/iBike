// app/bike-details.tsx

import { View, Text, Image, ScrollView } from 'react-native';

export default function BikeDetails() {

  return (
    <ScrollView>
      <View style={{ padding: 20 }}>
        <Image source={{ uri: bike.image }} style={{ width: '100%', height: 200, borderRadius: 10 }} />
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginVertical: 10 }}>{bike.name}</Text>
        <Text style={{ fontSize: 20, color: 'green' }}>R$ {bike.price}</Text>
        <Text style={{ fontSize: 16, color: 'gray' }}>{bike.brand} - {bike.kilometer} km</Text>
        <Text style={{ fontSize: 18, marginTop: 20 }}>{bike.description}</Text>
      </View>
    </ScrollView>
  );
}
