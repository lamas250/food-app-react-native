import { View, Text, Image } from 'react-native'
import React from 'react'


// const yelpRestaurantInfo = {
//   name: 'Most Famous Fast Food',
//   image: 'https://media-cdn.tripadvisor.com/media/photo-s/1a/51/df/c0/mcdonald-s.jpg',
//   price: '$$',
//   reviews: '144',
//   rating: 5,
//   categories: [{title: 'Thai'}, {title: 'Confort Food'}]
// }

export default function About({route}) {

  const {name, image, price, reviews, rating, categories} = route.params;

  const formatedCategories = categories.map((cat) => cat.title).join(' • ');

  const description = `${formatedCategories} ${price ? ' • ' + price : '' } • ${rating} ⭐ •  (${reviews}+)`
  // console.log('abaut', route);
  return (
    <View style={{marginBottom: 8}}>
      <RestauranteImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  )
}

const RestauranteImage = (props) => {
  return (
    <Image source={{uri: props.image}} style={{width: '100%', height: 180}} />
  )
}

const RestaurantName = (props) => {
  return (
    <Text style={{fontSize: 29, fontWeight: '600', marginTop: 10, marginHorizontal: 15}}>{props.name}</Text>
  )
}

const RestaurantDescription = (props) => {
  return (
    <Text style={{marginTop: 10, marginHorizontal: 15, fontWeight: '400', fontSize: 16}}>{props.description}</Text>
  )
}