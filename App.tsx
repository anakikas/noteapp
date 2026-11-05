import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NoteScreen from './views/NoteScreen';
import MapScreen from './views/MapScreen';
import ReminderScreen from './views/ReminderScreen';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function App() {

  const Tab = createBottomTabNavigator();


  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Notes"
            component={NoteScreen} 
            options={{ 
            tabBarLabel: 'NOTES',
            tabBarIcon: ({ size, color }) =>  <Ionicons name={'notes'} size={size} color={color} />
            }}  
            />
          <Tab.Screen name="Map"
            component={MapScreen}
            options={{ 
            tabBarLabel: 'Map',
            tabBarIcon: ({ size, color }) =>  <Ionicons name={'map'} size={size} color={color} />
            }}
            />
          <Tab.Screen name="Reminders"
            component={ReminderScreen}
            options={{ 
            tabBarLabel: 'REMINDER',
            tabBarIcon: ({ size, color }) =>  <Ionicons name={'reminder'} size={size} color={color} />
            }}
            />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
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

