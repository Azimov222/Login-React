import React from 'react'
import { StyleSheet, Text, View,TextInput, TouchableOpacity} from 'react-native'

const App = () => {
  return (
    <View style={styles.Div}>
       <Text style={styles.Yozuvlar}>Hey App</Text>
       <TextInput style={styles.inputlar} placeholder="       Emil"/>
       <TextInput style={styles.inputlar} placeholder="       Password"/>
       <Text style={styles.password}>Forgot Password?</Text>
       <TouchableOpacity style={styles.singUp}>
         <Text style={styles.tuzuv}>Login</Text>
       </TouchableOpacity>
       <Text style={styles.login}>Singup</Text>
    </View>
  )
}


export default App

const styles = StyleSheet.create({
  Div:{
    width:"100%",
    height:"100%",
    backgroundColor: '#04405a'
  },
  Yozuvlar:{
    color: "#ed6068",
    marginTop:150,
    marginLeft:120,
    fontSize:50,
    fontWeight:"700"
  },
  inputlar:{
    marginLeft:60,
    width:300,
    height:50,
    borderRadius:50,
    margin:20,
    backgroundColor:"#435980",
    color:"white",
    fontSize:15
  },
  password:{
    marginLeft:150,
    color:"white",
    width:"30%"
  },
  singUp:{
    width:300,
    height:50,
    backgroundColor:"#ed6068",
    marginLeft:60,
    margin:20,
    borderRadius:50,
  },
  tuzuv:{
    marginTop:10,
    textAlign:"center",
    fontSize:20,
    color:"white",
    fontWeight:"700"
  },
  login:{
    marginLeft:180,
    color:"white",
    fontSize:16,
    fontWeight:"700"
  }
})