import React, { useRef, useEffect, useState, useMemo } from 'react'
import { View, Dimensions, Animated, LogBox, Keyboard } from 'react-native'
import { setStatusBarStyle } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import theme from '../assets/theme'

import Icons from '../components/Icons'
import Account from '../screen/Account'
import Feed from '../screen/Feed'
import Watchlist from '../screen/Watchlist'
import Movie from '../screen/Movie'
import Login from '../screen/Login'
import RegistrationEmail from '../screen/Registration/Email'
import RegistrationPassword from '../screen/Registration/Password'
import RegistrationName from '../screen/Registration/Name'
import RegistrationImage from '../screen/Registration/Image'

import UserProvider from '../context/UserContext'

LogBox.ignoreLogs([
  'AsyncStorage has been extracted from react-native core',
  'Setting a timer',
  'Remote debugger',
])

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
setStatusBarStyle('light')

const getWidth = () => {
  let width = Dimensions.get('window').width - 40
  return width / 3
}

export default function Routes() {
  return (
    <UserProvider>
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name='Authentication' component={Authentication} />
          <Stack.Screen name='Home' component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  )
}

const Authentication = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='RegistrationEmail' component={RegistrationEmail} />
      <Stack.Screen
        name='RegistrationPassword'
        component={RegistrationPassword}
      />
      <Stack.Screen name='RegistrationName' component={RegistrationName} />
      <Stack.Screen name='RegistrationImage' component={RegistrationImage} />
    </Stack.Navigator>
  )
}

const Home = () => {
  const tabOffsetValue = useRef(new Animated.Value(0)).current
  const [keyboardVisible, setKeyboardVisible] = useState(undefined)

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true)
    })
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false)
    })

    return () => {
      showSubscription.remove()
      hideSubscription.remove()
    }
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        initialRouteName='WatchlistTab'
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
          name='FeedTab'
          component={FeedTab}
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
          name='WatchlistTab'
          component={WatchlistTab}
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
          name='AccountTab'
          component={AccountTab}
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
      {!keyboardVisible && (
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
      )}
    </View>
  )
}

const FeedTab = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Feed' component={Feed} />
    </Stack.Navigator>
  )
}

const WatchlistTab = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Watchlist' component={Watchlist} />
      <Stack.Screen name='Movie' component={Movie} />
    </Stack.Navigator>
  )
}

const AccountTab = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Account' component={Account} />
    </Stack.Navigator>
  )
}
