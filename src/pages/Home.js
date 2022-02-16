import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import RestaurantItem, { localRestaurants } from '../components/RestaurantItem'
import { YELP_API_KEY } from '@env';



export default function Home() {
  const [ restaurantData, setRestaurantData] = useState(localRestaurants);
  const [ city, setCity] = useState('BeloHorizonte');

  useEffect(() => {
    getRestaurantesFromYelp();
  },[city]);

  const getRestaurantesFromYelp = () => {
    const url = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`
    console.log(url);
    fetch(url,{
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      }
    }).then(res => res.json()).then(json => setRestaurantData(json.businesses))
  }

  return (
    <SafeAreaView style={{backgroundColor: '#eee', flex: 1}}>
      <View style={{backgroundColor: 'white', padding: 15}}>
        <HeaderTabs />
        <SearchBar setCity={setCity} />
      </View>
      <Categories />
      <RestaurantItem restaurantData={restaurantData} /> 
    </SafeAreaView>
  )
}

