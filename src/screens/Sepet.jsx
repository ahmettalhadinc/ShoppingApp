import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
const groupItemsById = (items) => {
  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.id]) {
      acc[item.id] = { ...item, quantity: 0 };
    }
    acc[item.id].quantity += 1;
    return acc;
  }, {});

  return Object.values(groupedItems);
};


const Sepet = () => {
  const { itemsInShop } = useSelector((state) => state.user);
  const groupedItems = groupItemsById(itemsInShop);
const [fiyat,guncelFiyat]=useState([])
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        data={groupedItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <View style={styles.itemContent}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text style={styles.itemTitle}>{item.title}</Text>
            
            </View>
            <View style={{ flexDirection: 'row' }}>
              
              <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
              


            </View>
            <Text> Total Payment Is :{item.quantity*item.price} </Text>
          </View>
        )}
      />
      
    </View>
  );
};

export default Sepet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatList: {
    width: '100%',
    marginTop: 40,
    marginBottom: 20,
  },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    marginBottom: 20,
  },
  itemContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 80,
    height: 100,
    marginRight: 10,
    marginTop: 15,
    resizeMode: 'contain', // İmajın orantısını korur
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemQuantity: {
    fontSize: 14,
    color: 'gray',
  },
});
