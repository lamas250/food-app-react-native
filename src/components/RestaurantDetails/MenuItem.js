import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { useDispatch } from 'react-redux'

const foods = [
  {
    title: 'Teste Comida 2',
    description: 'Teste descrptions grande 1',
    price: '$19.20',
    image: 'https://super.abril.com.br/wp-content/uploads/2017/03/bigmac.png'
  },
  {
    title: 'Teste Comida 1',
    description: 'Teste descrptions grande 1',
    price: '$32.00',
    image: 'https://super.abril.com.br/wp-content/uploads/2017/03/bigmac.png'
  },
  {
    title: 'Teste Comida 3',
    description: 'Teste descrptions grande 1',
    price: '$19.20',
    image: 'https://super.abril.com.br/wp-content/uploads/2017/03/bigmac.png'
  },
  {
    title: 'Teste Comida 4',
    description: 'Teste descrptions grande 1',
    price: '$32.00',
    image: 'https://super.abril.com.br/wp-content/uploads/2017/03/bigmac.png'
  },
  {
    title: 'Teste Comida 5',
    description: 'Teste descrptions grande 1',
    price: '$32.00',
    image: 'https://super.abril.com.br/wp-content/uploads/2017/03/bigmac.png'
  }
]



export default function MenuItem({restaurantName}) {
  const dispatch = useDispatch();
  const selectItem = (item, checkboxValue) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {...item, restaurantName: restaurantName, checkboxValue: checkboxValue},
    })
  }

  return (
    <ScrollView showsVerticalScrollIndicator='false'>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
              <BouncyCheckbox 
                iconStyle={{borderColor: 'lightgray', borderRadius: 0}}
                fillColor='green'onPress={(checkboxValue) => {
                  selectItem(food, checkboxValue)
                }}
              />
              <FoodInfo food={food} />
              <FoodImage food={food} />
            </View>
            <Divider width={0.5} style={{marginHorizontal: 20}} />
        </View>
      ))}
    </ScrollView>
  )
}

const FoodInfo = (prop) => {
  return (
    <View style={{width: 240, justifyContent: 'space-evenly'}}>
      <Text style={styles.titleStyle}>{prop.food.title}</Text>
      <Text>{prop.food.description}</Text>
      <Text>{prop.food.price}</Text>
    </View>
  )
}

const FoodImage = (props) => {
  return (
    <View>
      <Image source={{uri: props.food.image}} style={{width: 100, height: 100, borderRadius: 8}} />
    </View>
  )
}

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20
  },
  titleStyle: {
    fontSize: 29,
    fontWeight: '600',
  }
})