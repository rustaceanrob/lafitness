import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Workouts from '../screens/Workouts'

type Props = {}
const Stack = createNativeStackNavigator()

const WorkoutStack = (props: Props) => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Workouts' component={Workouts} options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
}

export default WorkoutStack