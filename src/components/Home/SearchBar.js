import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesing from 'react-native-vector-icons/AntDesign'
import { GOOGLE_API } from '@env';

export default function SearchBar({setCity}) {
  return (
    <View style={{marginTop: 15, flexDirection: 'row'}}>
      <GooglePlacesAutocomplete
        query={{ key:GOOGLE_API}}
        onPress={(data, detais = null) => {
          let city = data.description.split(',')[0];
          city = city.replace(' ','');
          setCity(city);
        } }
        placeholder='Search' 
        styles={{
          textInput: {
            backgroundColor: '#eee',
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7
          },
          textInputContainer: {
            backgroundColor: '#eee',
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 10
          }
        }}
        renderLeftButton={() => (
          <View style={{marginLeft: 10}}>
            <Ionicons name='location-sharp' size={24} />
          </View>
        )}
        renderRightButton={() => (
         <View
            style={{
              flexDirection: 'row',
              marginRight: 8,
              backgroundColor: 'white',
              padding: 9,
              borderRadius: 30,
              alignItems: 'center'
          }}
          >
            <AntDesing
              name='clockcircle'
              size={12} 
              style={{marginRight: 6}}
            />
            <Text>
              Search
            </Text>
          </View>
        )}
      />
    </View>
  )
}