import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/pages/HomeScreen';
import ProductScreen from './src/pages/ProductScreen';
import { Provider } from 'react-redux';
import store from './src/redux/store';

const Stack = createStackNavigator();


const App = () => {
  return (

   <Provider store = {store}>
    <NavigationContainer>
     <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Product' component={ProductScreen}/>
     </Stack.Navigator>
      
   </NavigationContainer>
   </Provider>
  )
}

export default App

const styles = StyleSheet.create({})