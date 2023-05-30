import React from 'react'
import { View } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'

const LoadingScreen = () => {
  return (
    <View style={{
      flex:1, 
      justifyContent:"center", 
      alignItems:"center"}}>

      <ActivityIndicator size={50} color='black'/>
    </View>
  )
}

export default LoadingScreen