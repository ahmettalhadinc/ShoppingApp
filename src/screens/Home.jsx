import { FlatList, StyleSheet, Text, SafeAreaView, View, Image, Dimensions, Pressable, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllData } from '../redux/userSlice'

const Home = ({ navigation }) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state) => state.user)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')


  

  const filteredItems = items.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  

  useEffect(() => {
    dispatch(getAllData())
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.all}>
      <View style={styles.filters}>
        
      </View>
        <TextInput
          style={styles.input}
          placeholder="Ara..."

          onChangeText={(text) => setSearchTerm(text)}
        />

        <FlatList
          data={filteredItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Pressable
                onPress={() => navigation.navigate('Product', { productt: item })}
              >
                <Image source={{ uri: item.image }} style={styles.image} />
                <Text style={{ fontSize: 15 }}>{item.title}</Text>
                <Text>Category: {item.category}</Text>
                <Text>Price: {item.price} $</Text>
              </Pressable>
            </View>
          )}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  all: {
    flex: 1,
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 20,
    marginTop: 70,
    width: '100%',
  },
  itemContainer: {
    borderWidth: 1,
    borderRadius: 10,

    marginBottom: 20,
    width: (Dimensions.get('window').width / 2) - 30,
    marginRight: 20,
    height: 'auto',
    shadowColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 80,
    height: 100,
    marginRight: 10,
    marginTop: 15,
    resizeMode: 'center',
    textAlign: 'center'
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 20,
    width: '100%',
  },
  filters: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    justifyContent: 'center',
  },
  filterButton: {
    margin: 5,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
})
