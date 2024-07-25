
import React from 'react'
import Home from './src/screens/Home'
import { NavigationContainer } from '@react-navigation/native'
import Product from './src/screens/Product'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'
import Tabs from './src/config/Tabs'

const Stack = createNativeStackNavigator()
const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
     
      <Stack.Navigator screenOptions={{headerShown:false}}>
    
        <Stack.Screen name='Tabs' component={Tabs} />
        <Stack.Screen name='Product' component={Product} />
        
      </Stack.Navigator>
      
    </NavigationContainer>
    </Provider>
  )
}

export default App

