import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import {useNavigation} from "@react-navigation/native"
import { useDispatch } from 'react-redux';
import {  CHANGE_EMAIL, CHANGE_NAME, CHANGE_SURNAME, CHANGE_TELNUMBER } from '../redux/actions/actionTypes';

const HomeScreen = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();


  return (
    <View style= {styles.container}>
      <Text>HomeScreen</Text>
      <Button title='Kayıt' onPress={()=> navigation.navigate("Product")
      }/>
      <TextInput placeholder='Adınız' style = {{padding: 10, borderWidth:1 , borderRadius:10 ,marginBottom:20}} onChangeText={text => dispatch({
        type: CHANGE_NAME,
        payload:text
      })}/>
      <TextInput placeholder='Soayadınız' style = {{padding: 10, borderWidth:1 , borderRadius:10, marginBottom:20}} onChangeText={text => dispatch({
        type: CHANGE_SURNAME,
        payload: text
      })}/>
      <TextInput placeholder='E-mail' style = {{padding: 10, borderWidth:1 , borderRadius:10,marginBottom:20}} onChangeText={text => dispatch ({
        type: CHANGE_EMAIL,
        payload: text
      })}/>
      <TextInput placeholder='Telefon Numaranız' style = {{padding: 10, borderWidth:1 , borderRadius:10}} onChangeText={text => dispatch ({
        type: CHANGE_TELNUMBER,
        payload:text
      })}/>
    </View>
     
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        margin: 20,
        flex: 1,     
        backgroundColor: 'lightpink',
      },
})