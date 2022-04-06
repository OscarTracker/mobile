import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  Animated,
  Text,
} from 'react-native'
import { useUserContext } from '../../context/UserContext'

import Input from '../../components/Input'
import IconButton from '../../components/IconButton'
import ImagePicker from '../../components/ImagePicker'
import Toggle from '../../components/Toggle'
import Button from '../../components/Button'

import { signOut, setProfile, getAvatar, setAvatar } from '../../apis/firebase'
import theme from '../../assets/theme'

export default function Account({ navigation }) {
  const { user, setUser } = useUserContext()

  const [image, setImage] = useState(null)
  const [name, setName] = useState('')
  const [nickname, setNickname] = useState('')
  const [email, setEmail] = useState('')

  const [showPoster, setShowPoster] = useState(false)
  const [showPlot, setShowPlot] = useState(false)
  const [showCast, setShowCast] = useState(false)
  const [showRatings, setShowRatings] = useState(false)

  const [editing, setEditing] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setName(user.name)
      setEmail(user.email)
      setNickname(user.nickname)
      const avatar = await getAvatar(user.uid)
      setImage(avatar)

      setShowPlot(user.preferences.showPlot)
      setShowCast(user.preferences.showCast)
      setShowPoster(user.preferences.showPoster)
      setShowRatings(user.preferences.showRatings)
    }
    fetchData()
  }, [])

  const logOut = () => {
    signOut()
    setUser(null)
    navigation.navigate('Authentication')
  }

  const save = () => {
    const preferences = {
      showPoster,
      showCast,
      showPlot,
      showRatings,
    }
    setProfile(user.uid, name, nickname, email, preferences)
    setEditing(!editing)
    setAvatar(user.uid, image)
  }

  let AnimatedHeaderValue = new Animated.Value(0)
  const Header_Max_Heigth = 100
  const Header_Min_Heigth = 75

  const animateHeaderHeight = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Max_Heigth - Header_Min_Heigth],
    outputRange: [Header_Max_Heigth, Header_Min_Heigth],
    extrapolate: 'clamp',
  })

  const animateFontSize = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Max_Heigth - Header_Min_Heigth],
    outputRange: [30, 20],
    extrapolate: 'clamp',
  })

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.header, { height: animateHeaderHeight }]}>
        <View style={{ width: 24 }} />
        <Animated.Text style={[styles.title, { fontSize: animateFontSize }]}>
          Account
        </Animated.Text>
        {editing ? (
          <IconButton name='save' onPress={() => save()} />
        ) : (
          <IconButton name='edit' onPress={() => setEditing(!editing)} />
        )}
      </Animated.View>
      <ScrollView
        style={styles.scroll}
        scrollEventThrottle={1}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: AnimatedHeaderValue } } }],
          { useNativeDriver: false }
        )}
      >
        <View style={styles.content}>
          <ImagePicker disabled={!editing} image={image} setImage={setImage} />
          <Text style={styles.sectionTitle}>Information</Text>

          <Text style={styles.inputTitle}>Name</Text>
          {editing ? (
            <Input onChangeText={setName} value={name} />
          ) : (
            <Text style={styles.text}>{name}</Text>
          )}

          <Text style={styles.inputTitle}>Nickname</Text>
          {editing ? (
            <Input onChangeText={setNickname} value={nickname} />
          ) : (
            <Text style={styles.text}>{nickname}</Text>
          )}

          <Text style={styles.inputTitle}>E-mail</Text>
          {editing ? (
            <Input onChangeText={setEmail} value={email} />
          ) : (
            <Text style={styles.text}>{email}</Text>
          )}

          <Text style={styles.sectionTitle}>Preferences</Text>

          <View style={styles.toggle}>
            <Text style={styles.toggleTitle}>Show posters</Text>
            <Toggle
              disabled={!editing}
              active={showPoster}
              setActive={setShowPoster}
            />
          </View>

          <View style={styles.toggle}>
            <Text style={styles.toggleTitle}>Show plot</Text>
            <Toggle
              disabled={!editing}
              active={showPlot}
              setActive={setShowPlot}
            />
          </View>

          <View style={styles.toggle}>
            <Text style={styles.toggleTitle}>Show cast</Text>
            <Toggle
              disabled={!editing}
              active={showCast}
              setActive={setShowCast}
            />
          </View>

          <View style={styles.toggle}>
            <Text style={styles.toggleTitle}>Show ratings</Text>
            <Toggle
              disabled={!editing}
              active={showRatings}
              setActive={setShowRatings}
            />
          </View>
          <View style={styles.buttons}>
            <Button title='Sign Out' bordered onPress={() => logOut()} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    paddingHorizontal: 20,
    width: '100%',
    alignItems: 'center',
  },
  header: {
    marginTop: 30,
    width: '100%',

    paddingHorizontal: 20,
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  scroll: {
    width: '100%',
  },
  title: {
    alignContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    fontWeight: '400',
    color: 'white',
    paddingVertical: 20,
  },
  sectionTitle: {
    width: '100%',
    fontSize: 22,
    paddingTop: 20,
    color: theme.colors.text,
  },
  inputTitle: {
    width: '100%',
    fontSize: 16,
    paddingTop: 20,
    paddingBottom: 10,
    color: theme.colors.text,
  },
  text: {
    width: '100%',
    fontSize: 16,
    paddingTop: 12,
    paddingBottom: 10,
    paddingLeft: 16,
    color: theme.colors.text,
  },
  toggleTitle: {
    fontSize: 18,
    color: theme.colors.text,
  },
  toggle: {
    alignItems: 'center',
    paddingTop: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
  },
  buttons: {
    paddingTop: 40,
    paddingBottom: 20,
  },
})
