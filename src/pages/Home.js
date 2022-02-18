import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderTabs from '../components/Home/HeaderTabs'
import SearchBar from '../components/Home/SearchBar'
import Categories from '../components/Home/Categories'
import RestaurantItem, { localRestaurants } from '../components/Home/RestaurantItem'
import { YELP_API_KEY } from '@env';
import BottomTabs from '../components/Home/BottomTabs'
import { Divider } from 'react-native-elements/dist/divider/Divider'



export default function Home({navigation}) {
  const [ restaurantData, setRestaurantData] = useState([]);
  const [ city, setCity] = useState('Hollywood');
  const [ activeTab, setActiveTab ] = useState('Delivery');

  useEffect(() => {
    getRestaurantesFromYelp();
  },[city, activeTab]);
 
  const getRestaurantesFromYelp = () => {
    const url = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`
    fetch(url,{
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      }
    }).then(res => res.json()).then(json => {
      setRestaurantData(json.businesses.filter((businesses) => businesses.transactions.includes(activeTab.toLowerCase())))
      // console.log(json.businesses.filter((businesses) => businesses.transactions.includes(activeTab.toLowerCase())));
    })
  }

  return (
    <SafeAreaView style={{backgroundColor: '#eee', flex: 1}}>
      <View style={{backgroundColor: 'white', padding: 15}}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar setCity={setCity} />
      </View>
      <Categories />
      <RestaurantItem restaurantData={restaurantData} navigation={navigation} /> 
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  )
}

