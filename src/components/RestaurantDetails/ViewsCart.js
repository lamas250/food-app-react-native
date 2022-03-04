import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import OrderItem from './OrderItem';

export default function ViewsCart({restaurantName}) {
  const items = useSelector((state) => state.cartReducer.selectedItems.items);
  const [isOpen, setIsOpen] = useState(false);

  const total = items
    .map((item) => Number(item.price.replace('$','')))
    .reduce((prev, curr) => prev + curr, 0);

    const totalUSD = total.toLocaleString('en', {
      style: 'currency',
      currency: 'USD'
    })

    const checkoutModalContent = () => {
      return (
        <>
         <View style={styles.modalContainer}>
            <View style={styles.modalCheckoutContainer}>
              <Text style={styles.restaurantName}>{restaurantName}</Text>
              {items.map((item, index) => (
                <OrderItem key={index} item={item} />
              ))}
               <View style={styles.subtotalContainer}>
                  <Text style={styles.subtotalText}>Subtotal</Text>
                  <Text>{totalUSD}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                  <TouchableOpacity 
                    style={{marginTop: 20, backgroundColor: 'black', alignItems: 'center', padding: 13, borderRadius: 30, width: 300, position: 'relative'}}
                    onPress={() => setIsOpen(false)}
                  >
                    <Text style={{color: 'white', fontSize: 18, fontWeight: '600'}}>Checkout</Text>
                  </TouchableOpacity>
                </View>
            </View>
         </View>
        </>
      )
    };

  return (
    <>
      <Modal 
        animationType='slide'
        visible={isOpen}
        transparent={true}
        onRequestClose={() => setIsOpen(false)}
      >
        {checkoutModalContent()}
      </Modal>
      {
        total
        ? (
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              position: 'absolute',
              bottom: 110,
              zIndex: 999
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                width: '100%'
              }}
            >
              <TouchableOpacity
                style={{
                  marginTop: 20,
                  backgroundColor: 'black',
                  alignItems: 'center',
                  padding: 13,
                  borderRadius: 30,
                  width: 300,
                  position: 'relative',
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                }}
                onPress={() => setIsOpen(true)}
              >
                <Text style={{color: 'white', fontSize: 20, marginRight: 40}} >
                  View Cart
                </Text>
                <Text style={{color: 'white', fontSize: 20}}>
                  {totalUSD}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )
        : (
          <>
          
          </>
        )
      }
    </>
  )
}

const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(0,0,0,0.7)',
    },
    modalCheckoutContainer: {
      backgroundColor: 'white',
      padding: 16,
      height: 500,
      borderWidth: 1
    },
    modalChecoutButtom: {
      textAlign: 'center',
      fontWeight: '600',
      fontSize: 18,
      marginBottom: 10
    },
    subtotalContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 15
    },
    subtotalText: {
      textAlign: 'left',
      fontWeight: '600',
      fontSize: 15,
      marginBottom: 10
    },
    restaurantName: {
      fontSize: 20,
      fontWeight: '600',
      marginBottom: 10,
      textAlign: 'center'
    }
});