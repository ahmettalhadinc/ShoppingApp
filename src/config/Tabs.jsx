import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entypo from '@expo/vector-icons/Entypo';
import { AntDesign } from '@expo/vector-icons';

import Home from '../screens/Home';
import Sepet from '../screens/Sepet';
import { useSelector } from 'react-redux';




const Tabs = () => {
 const Tab=createBottomTabNavigator()
 const { itemsInShop } = useSelector((state) => state.user)
 return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="Home" component={Home} options={{
        tabBarLabel:({color})=>(
            <Text style={{color:color,fontSize:12,marginTop:-7}}>Home</Text>
        ), tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={24} color="black" />
          ),
      }} />


      <Tab.Screen name="Sepet" component={Sepet} options={{
        tabBarLabel:({color})=>(
            <Text style={{color:color,fontSize:12,marginTop:-7}}>Sepet</Text>
        ), tabBarIcon: ({ color, size }) => (

          <View style={styles.container}>
          <View style={styles.iconContainer}>
            <AntDesign name="shoppingcart" size={24} color="black" />
            <View style={styles.circleContainer}>
              <Text style={styles.circle}>{itemsInShop.length}</Text>
            </View>
          </View>
        </View>
          ),
      }} />
    </Tab.Navigator>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    position: 'relative', // icon'un üzerine absolute yerleştirmek için gerekli
  },
  circleContainer: {
    position: 'absolute',
    top: -5, // Yukarıdan uzaklık
    right: -5, // Sağdan uzaklık
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    backgroundColor: 'orange',
    color: 'white',
    width: 18,
    height: 18,
    borderRadius: 9, // Yükseklik ve genişliğin yarısı
    textAlign: 'center',
    lineHeight: 18, // Metni ortalamak için
    fontSize: 10,
  },
});
export default Tabs

