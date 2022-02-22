import React, { useRef, useEffect } from 'react'
import { View, Dimensions, Animated, LogBox } from 'react-native'
import { setStatusBarStyle } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import theme from '../assets/theme'

import Icons from '../components/Icons'
import Account from '../screen/Account'
import Feed from '../screen/Feed'
import Watchlist from '../screen/Watchlist'
import Login from '../screen/Login'

LogBox.ignoreLogs(['AsyncStorage has been extracted from react-native core'])

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
setStatusBarStyle('light')

const getWidth = () => {
  let width = Dimensions.get('window').width - 40
  return width / 3
}

export default function Routes() {
  return (
    <NavigationContainer theme={theme} initial>
      <Stack.Navigator>
        <Stack.Screen
          name='Authentication'
          options={{ headerShown: false }}
          component={Authentication}
        />
        <Stack.Screen
          name='Home'
          options={{ headerShown: false }}
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const Authentication = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Login'
        options={{ headerShown: false }}
        component={Login}
      />
    </Stack.Navigator>
  )
}

const Home = () => {
  const tabOffsetValue = useRef(new Animated.Value(0)).current

  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        initialRouteName='Check'
        screenOptions={{
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.inactive,
          tabBarHideOnKeyboard: 'true',
          tabBarShowLabel: false,
          tabBarStyle: {
            paddingHorizontal: 20,
            paddingBottom: 30,
            height: 80,
            zIndex: 300,
            elevation: 0,
            borderTopWidth: 0,
            borderTopColor: theme.colors.inactive,
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
                <Icons
                  name='home'
                  color={focused ? theme.colors.primary : theme.colors.inactive}
                  filled={focused}
                  height={24}
                  width={24}
                />
              </View>
            ),
          }}
          listeners={() => ({
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: -getWidth(),
                useNativeDriver: true,
              }).start()
            },
          })}
        />
        <Tab.Screen
          name='Check'
          component={Watchlist}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  position: 'absolute',
                  top: '50%',
                }}
              >
                <Icons
                  name='check'
                  color={focused ? theme.colors.primary : theme.colors.inactive}
                  filled={focused}
                  height={24}
                  width={24}
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
                <Icons
                  name='person'
                  color={focused ? theme.colors.primary : theme.colors.inactive}
                  filled={focused}
                  height={24}
                  width={24}
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
      </Tab.Navigator>
      <Animated.View
        style={{
          width: 10,
          alignSelf: 'center',
          height: 4,
          borderRadius: 5,
          backgroundColor: theme.colors.primary,
          position: 'absolute',
          bottom: 20,
          transform: [{ translateX: tabOffsetValue }],
        }}
      />
    </View>
  )
}
