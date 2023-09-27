import { StyleSheet, Text} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons'
import Home from './src/pags/home/index';

export default function App() {

  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#000',
          tabBarStyle:{
            backgroundColor: "#e18479",
            borderTopWidth: 0
          }
        }}
      >
        <Tab.Screen name='Home' component={Home} options={{tabBarIcon: () => (<Text><MaterialCommunityIcons name='emoticon-kiss' size= {25} color='#fff'/></Text>)}} />

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
