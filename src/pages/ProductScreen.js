import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'


const ProductScreen = () => {

    const name = useSelector(state => state.user.name);
    const surName= useSelector(state => state.user.surName);
    const email= useSelector(state => state.user.email);
    const telNumber= useSelector(state => state.user.telNumber);

    

 
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ad:   {name} </Text>
      <Text style={styles.text}>Soyad:   {surName} </Text>
      <Text style={styles.text}>E-mai:   {email} </Text>
      <Text style={styles.text}>Telefon Numarası:   {telNumber} </Text>
    </View>
  )
}

export default ProductScreen

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    alignItems:"flex-start",
    backgroundColor: 'lightblue',
  },
  text: {
    marginTop:30,
    marginLeft:20,
    fontSize: 20,
    color: 'black',
  },
})