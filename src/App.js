import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Provider } from 'react-redux'
import { Store } from './redux/store'
import Splash from './screens/Splash'
import Task from './screens/Task'
import ToDo from './screens/ToDo'
import Done from './screens/Done'
import Camera from './screens/Camera'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Tab = createBottomTabNavigator()

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={
        ({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            
            return (
              <FontAwesome5
                name={
                  route.name === 'To-Do' ? 'clipboard-list' : 'clipboard-check'
                }
                size={focused ? 25 : 20}
                color={color}
              />
            )
          },

          tabBarActiveTintColor: '#0080ff',
          tabBarInactiveTintColor: '#777',
          tabBarLabelStyle: { fontSize: 15, fontWeight: 'bold' }
        })
      }
    >
      <Tab.Screen name='To-Do' component={ToDo} options={{ headerShown: false }} />
      <Tab.Screen name='Done' component={Done} options={{ headerShown: false }}  />
    </Tab.Navigator>
  )
}

const RootStack = createStackNavigator()

function App () {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName='Splash'
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#0080ff'
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontSize: 25,
              fontWeight: 'bold'
            }
          }}
        >
          <RootStack.Screen
            name='Splash'
            component={Splash}
            options={{
              headerShown: false
            }}
          />

          <RootStack.Screen
            name='My Tasks'
            component={HomeTabs}
          />
          
          <RootStack.Screen
            name='Task'
            component={Task}
          />

          <RootStack.Screen
            name='Camera'
            component={Camera}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
