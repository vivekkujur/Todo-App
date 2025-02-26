import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Home = () => {

    const navigator = useNavigation()

    const handleclick = () => {
        navigator.navigate("Profile")
    }

    return (
        <View>
            <Text>Home</Text>

            <Button onPress={handleclick}  title='go to profile'>
            </Button>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})