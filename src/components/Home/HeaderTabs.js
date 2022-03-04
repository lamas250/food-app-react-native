import { View, Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'

export default function HeaderTabs(props) {
  // const [ activeTab, setActiveTab] = useState('Delivery');
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: "center"
        }}
      >
        <HeaderButton text="Delivery" activeTab={props.activeTab} setActiveTab={props.setActiveTab} />
        <HeaderButton text="Pickup" activeTab={props.activeTab} setActiveTab={props.setActiveTab} />
      </View>
    </SafeAreaView>
  )
}

const HeaderButton = (props) => {
  return(
    <TouchableOpacity 
      onPress={() => props.setActiveTab(props.text)}
      style={{
        backgroundColor: props.activeTab === props.text ? 'black' : 'white',
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30
      }}>
      <Text
        style={{
          color: props.activeTab === props.text ? 'white' : 'black',
          fontSize: 15,
          fontWeight: "900"
        }}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  )
}