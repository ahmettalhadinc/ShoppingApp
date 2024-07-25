import React from 'react'
import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../redux/userSlice'

const Product = ({ route }) => {
  const { productt } = route.params


const dispatch=useDispatch()
const handleAddToCart = (item) => {

    
  dispatch(addItem(item));
};
  return (
    <View style={styles.container}>
      <Image source={{ uri: productt.image }} style={styles.image} />
      <Text style={styles.title}>{productt.title}</Text>
      <Text style={styles.category}>Category: {productt.category}</Text>
      <Text style={styles.price}>Price: {productt.price} $</Text>
      <Text style={styles.description}>Description: {productt.description}</Text>
      <Pressable  onPress={() => handleAddToCart(productt)}   style={styles.btn}>
        <Text>Sepete Ekle</Text>
        
      </Pressable>
      
    </View>
  )
}

export default Product

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white'
  },
  image: {
    width: 150,
    height: 200,
    marginBottom: 20,
    resizeMode:'center'
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  category: {
    fontSize: 18,
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
  btn: {
    borderRadius: 10,
    backgroundColor: 'orange',
    fontWeight: 'bold',
    width: 80,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  }
})
