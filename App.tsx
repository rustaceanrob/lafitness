import { StatusBar } from 'expo-status-bar';
import {  View } from 'react-native';
import UserStack from './src/stacks/UserStack';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <UserStack/>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

