import React, { useRef } from 'react'
import { View, LogBox, Dimensions, Animated } from 'react-native'
import { setStatusBarStyle } from 'expo-status-bar'
import theme from '../assets/theme'
import { House, Check, Person } from '../assets/icons'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Feed from '../screen/Feed'
import Account from '../screen/Account'

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  'Non-serializable values were found in the navigation state',
])

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
setStatusBarStyle('light')

const getWidth = () => {
  let width = Dimensions.get('window').width
  width = width - 40
  return width / 3
}

export default function Routes() {
  const tabOffsetValue = useRef(new Animated.Value(0)).current

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        <Stack.Screen
          name='Navigator'
          options={{ headerShown: false }}
          initialParams={{ tabOffsetValue }}
        >
          {(props) => <Navigator {...props} tabOffsetValue={tabOffsetValue} />}
        </Stack.Screen>
      </Stack.Navigator>

      <Animated.View
        style={{
          width: getWidth() - 110,
          height: 4,
          borderRadius: 5,
          backgroundColor: theme.colors.primary,
          position: 'absolute',
          bottom: 35,
          left: 75,
          transform: [{ translateX: tabOffsetValue }],
        }}
      />
    </NavigationContainer>
  )
}

const Navigator = ({ tabOffsetValue }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.inactive,
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingBottom: 30,
          height: 80,
          elevation: 0,
          borderTopWidth: 0,
          borderTopColor: theme.colors.inactive,
          margin: 20,
        },
      }}
    >
      <Tab.Screen
        name='Feed'
        component={Feed}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                position: 'absolute',
                top: '50%',
              }}
            >
              <House
                color={focused ? theme.colors.primary : theme.colors.inactive}
                filled={focused}
              />
            </View>
          ),
        }}
        listeners={() => ({
          tabPress: (e) => {
            Animated.spring(tabOffsetValue, {
              toValue: 0,
              useNativeDriver: true,
            }).start()
          },
        })}
      />
      <Tab.Screen
        name='Check'
        component={Account}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                position: 'absolute',
                top: '50%',
              }}
            >
              <Check
                color={focused ? theme.colors.primary : theme.colors.inactive}
                background={theme.colors.background}
                filled={focused}
              />
            </View>
          ),
        }}
        listeners={() => ({
          tabPress: (e) => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth(),
              useNativeDriver: true,
            }).start()
          },
        })}
      />
      <Tab.Screen
        name='Account'
        component={Account}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                position: 'absolute',
                top: '50%',
              }}
            >
              <Person
                color={focused ? theme.colors.primary : theme.colors.inactive}
                filled={focused}
              />
            </View>
          ),
        }}
        listeners={() => ({
          tabPress: (e) => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 2,
              useNativeDriver: true,
            }).start()
          },
        })}
      />
    </Tab.Navigator>
  )
}
