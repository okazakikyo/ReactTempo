import React, { useState, useEffect } from 'react'
import {
  View,
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  ImagePropTypes,
  ImageComponent
} from 'react-native'
// import { useDispatch } from 'react-redux'
// import { useTranslation } from 'react-i18next'
// import { Brand } from '@/Components'
// import { useTheme } from '@/Hooks'
// import { useLazyFetchOneQuery } from '@/Services/modules/users'
// import { changeTheme, ThemeState } from '@/Store/Theme'
// import { create } from 'react-test-renderer'
// import { FontSize } from '@/Theme/Variables'

const ExampleContainer = () => {
  // const { t } = useTranslation()
  // const { Common, Fonts, Gutters, Layout } = useTheme()
  // const dispatch = useDispatch()

  // const [userId, setUserId] = useState('9')
  // const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] =
  //   useLazyFetchOneQuery()

  // useEffect(() => {
  //   fetchOne(userId)
  // }, [fetchOne, userId])

  // const onChangeTheme = ({ theme, darkMode }: Partial<ThemeState>) => {
  //   dispatch(changeTheme({ theme, darkMode }))
  // }
  const style = StyleSheet.create({
    
    container:{
      backgroundColor: '#FFF3E9',
      position: 'absolute',
      width: 414,
      height: 692,
      left: 0,
      right: 0,
      
    },
    ques:{
      position: 'absolute',
      width: 44,
      height: 44,
      left: 330,
      right: 20,
      top: 39,
      bottom: 609,
      backgroundColor: '#573353',
      opacity: 0.1,
      borderRadius: 25
    },
    question:{
      width: 880,
      height: 880,
      position: 'absolute',
      top: 52,
      left: 350,
      right: 37,
      bottom: 630
    },
    dot:{
      position: 'absolute',
      top: 67,
      bottom: 621,
      right: 40,
      left: 370
    },
    welcome:{
      position: 'absolute',
      left: 32,
      right: 32,
      top: 220,
      bottom: 380,
      fontFamily: 'Klasik',
      fontStyle: 'normal',
      fontWeight: 'normal',
      lineHeight: 32,
      fontSize: 32,
      textAlign: 'center',
      letterSpacing: -3,
      textTransform: 'uppercase',
      color: '#573353'
    },
    G1:{
      position: 'absolute',
      top: 320,
      bottom: 330,
      right: 20,
      left: 20,
      backgroundColor: 'white',
      borderRadius: 12
    },
    google:{
      position: 'absolute',
      left: 108,
      top: 15,
      fontFamily: 'Manrope',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 16,
      lineHeight: 16,
      textAlign: 'center',
      color: '#573353'
    },
    FB1:{
      position: 'absolute',
      top: 380,
      bottom: 270,
      left: 20,
      right: 20,
      backgroundColor: 'white',
      borderRadius: 12
    },
    facebook:{
      position: 'absolute',
      left: 108,
      top: 15,
      fontFamily: 'Manrope',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 16,
      lineHeight: 16,
      textAlign: 'center',
      color: '#573353'
    },
    fbicon:{
      width: 23,
      height: 23,
      left: 63,
      top: 10,
      bottom: 20,

    },
    ggicon:{
      width: 23,
      height: 23,
      left: 63,
      top: 10,
      bottom: 20,

    },
    textmail:{
      
      fontFamily: 'Manrope',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: 16,
      lineHeight: 24,
      textAlign: 'center',
      color: '#573353'
    },
    userid:{
      left: 15,
      backgroundColor: '#FFF6ED',
      borderRadius: 12,
      width: 364,
      height: 30
    },
    mailuser:{
      fontFamily: 'Manrope',
      fontWeight: 'bold',
      fontSize: 16,
      lineHeight: 14,
      color: '#FDA758',
      left: 85
    },
    iconmail:{
      tintColor: '#FDA758',
      width: 15,
      height: 12,
      borderRadius: 2,
      borderStyle: 'solid',
      borderEndColor: '#FC9D45',
      left: 25,
      top: 10
    },
    userpass:{
      left: 15,
      top: 7,
      backgroundColor: '#FFF6ED',
      borderRadius: 12,
      width: 364,
      height: 30
    },
    iconpass:{
      tintColor: '#573353',
      width: 12,
      height: 16,
      borderRadius: 2,
      borderStyle: 'solid',
      borderEndColor: '#573353',
      left: 25,
      top: 10
    },
    
    showpass:{
      top: 5,
      right: 20,
      textAlign: 'right',
      fontFamily: 'Manrope',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: 14,
      lineHeight: 16,
      color: '#573353',
      textDecorationLine: 'underline'
    },
    oopass:{
      fontFamily: 'Manrope',
      fontWeight: '500',
      fontSize: 16,
      lineHeight: 16,
      color: '#573353',
      left: 85
    },
    loginb:{
      left: 12,
      top: 12,
      backgroundColor: '#FDA758',
      borderRadius: 8,
      width: 364,
      height: 35
    },
    loginT:{
      top: 10,
      textAlign: 'center',
      fontFamily: 'Manrope',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: 16,
      lineHeight: 16,
      color: '#573353',
    },
    forgotpass:{
      top: 7,
      fontFamily: 'Manrope',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: 14,
      lineHeight: 22,
      color: '#573353',
      textAlign: 'center'
      
    },
    dontaccount:{
      top: 7,
      fontFamily: 'Manrope',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: 14,
      lineHeight: 22,
      color: '#573353',
      textAlign: 'center'

    },
    signup:{
      top: 7,
      fontFamily: 'Manrope',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: 14,
      lineHeight: 22,
      color: '#573353',
      textAlign: 'center'
    },
    container2:{
      backgroundColor: 'white',
      position: 'absolute',
      width: 414,
      height: 356,
      top: 440,
      borderRadius: 20,
      textAlign: 'center'
    }
    
  })
  return (
      //top layout
        
    <View style={style.container}>
      <Image source={require('./bg.png')}
        
        style={{
          width: 400,
          height: 250
        }}
      ></Image>

      <View style={style.ques}></View>
        <Text style={style.question}>?</Text>
        <Text style={style.dot}>.</Text>

        
        <Text style={style.welcome}>
          Welcome to Monumental Habits
        </Text>

        <View style={style.G1}>
        <Image source={require('./ggicon.png')} style={style.ggicon}></Image>
        <Text style={style.google}>Continute with Google</Text>
        </View>
        
        <View style={style.FB1}>
        <Image source={require('./fbicon.png')} style={style.fbicon}></Image>  
        <Text style={style.facebook}>Continute with Facebook</Text>
        </View>

        
      <View style={style.container2}>
        <Text style={style.textmail}>Login with email</Text>
      
        <View style={style.userid}>
          <Image source={require('./mail.png')} style={style.iconmail}></Image>
          <Text style={style.mailuser}>Jonathansmth@gmail.com</Text>
        </View>
        
        <View style={style.userpass}>
        <Image source={require('./lock.png')} style={style.iconpass}></Image>
          
          <Text style={style.oopass}>Password</Text>
          <Text style={style.showpass}>Show</Text>
        </View>
        <View style={style.loginb}>
          <Text style={style.loginT}>Login</Text>
        </View>

        <Text style={style.forgotpass}>Forgot password</Text>
        <Text style={style.dontaccount}>Don't have account? <Text style={style.signup}>Sign up</Text></Text>
      </View>
    </View>
  )
  }

export default ExampleContainer
