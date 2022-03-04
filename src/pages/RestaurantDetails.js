import React from 'react'
import { View, Text } from 'react-native'
import { Divider } from 'react-native-elements'
import About from '../components/RestaurantDetails/About'
import MenuItem from '../components/RestaurantDetails/MenuItem'
import ViewsCart from '../components/RestaurantDetails/ViewsCart'


export default function RestaurantDetails({route, navigation}) {
  return (
    <View>
      <About route={route} />
      <Divider width={2.1} style={{marginVertiral: 20}}  />
      <MenuItem restaurantName={route.params.name} />
      <ViewsCart navigation={navigation} restaurantName={route.params.name} />
    </View>
  )
}