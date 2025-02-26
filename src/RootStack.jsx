import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Profile from './Profile';

const RootStack = () => {
    const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator initialRouteName='Home' 
     screenOptions={{headerBackVisible:true}}>
    <Stack.Screen name='Home' component={Home} />
    <Stack.Screen name='Profile' component={Profile} />
  </Stack.Navigator>
  )
}

export default RootStack

const styles = StyleSheet.create({})