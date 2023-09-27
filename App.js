import { StyleSheet, Text} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, Ionicons, FontAwesome } from 'react-native-vector-icons'


import Home from './src/pags/home/index';
import Pergunta from './src/pags/Pergunta/index';
import CarroselLarissa from './src/pags/carroselLarissa/index'
import CarroselJuntos from './src/pags/CarroselJuntos/index';

export default function App() {

  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarStyle:{
            backgroundColor: "#e18479",
            borderTopWidth: 0
          }
        }}
      >
        <Tab.Screen 
          name='Home' 
          component={Home} 
          options={{tabBarIcon: () => (<Text><MaterialCommunityIcons name='emoticon-kiss' size= {25} color='#fff'/></Text>)}}
        />

        <Tab.Screen 
          name='CarroselLarissa' 
          component={CarroselLarissa} 
          options={{tabBarIcon: () => (<Text><Ionicons name='images-outline' size={25} color='#fff'/></Text>)}}
        />

        <Tab.Screen 
          name='CarroselFotosNossas' 
          component={CarroselJuntos} 
          options={{tabBarIcon: () => (<Text><MaterialCommunityIcons name='view-carousel-outline' size= {25} color='#fff'/></Text>)}}
        />

        <Tab.Screen
          name='Pergunta'
          component={Pergunta}
          options={{tabBarIcon: () => (<Text><FontAwesome name='question' size={25} color='#fff'/></Text>)}}
        />

      </Tab.Navigator>  
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
