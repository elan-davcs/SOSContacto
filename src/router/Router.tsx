import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Tabs } from '../navigator/Tabs';
 

const Router = () => {
  return (
    <NavigationContainer>
        <Tabs/>
    </NavigationContainer>
    
  )
}

export default Router