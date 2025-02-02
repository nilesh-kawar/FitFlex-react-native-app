import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar'

export default class aiWorkout extends Component {
  render() {
    return (
      <View className='flex-1'>
        <StatusBar style="light" />
        <Text>aiWorkoutddd</Text>
      </View>
    )
  }
}