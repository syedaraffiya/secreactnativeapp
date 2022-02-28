

import React, { useState } from 'react';
import Login from './login';
import { StyleSheet, Text,TextInput,TouchableOpacity,View,ScrollView} from 'react-native';

const styles=StyleSheet.create({
  header:{
    backgroundColor:"darkcyan",
    fontSize:30,
    padding:30,
    textAlign:"center",
    color:"white",
    

  },
  input:{
    borderWidth:2,
    borderColor:"black",
    padding:20,
    margin:15,

  },
 
  color:{
    color:"black"
  },
  listDisplay: {
    flex: 7,
    backgroundColor: "lightgray",
  },
  scrolDisplay: {
    width: "100%",
  },

  list: {
    color:"black",
    margin: 10,
    backgroundColor: "darkcyan",
    width: 300,
    padding: 10,
    borderLeftWidth: 3,
    borderColor: "cyan",
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    fontSize: 16,
    shadowColor: "darkcyan",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  btn: {
    backgroundColor: "darkcyan",
    padding: 8,
    textAlign: "flex-end" ,
    borderRadius: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
})

function App(){

const [text,setText]=useState("")
const [list,setListData]=useState([])
const [isedit,setIsEdit]=useState(false)
const [indexval,setIndexval]=useState(null)

 const edittodo=(i)=>{
   setIsEdit(true)
  setIndexval(i)
   setText(list[i])
 }
  const deletetodo=(i)=>{
    list.splice(i,1)
    setListData([...list])

  }
const add = () => {
  setListData([...list,text])
  console.log(list)
  setText("")

}
  return (
  <>
  <Login />
    <View >
      <Text style={styles.header}>
      TO DO APP
      </Text>

      </View>


      <View style={styles.listDisplay}>
          <ScrollView style={styles.scrolDisplay}>
          
            <Text >{list.map((e,i)=>(
<View key={i}>
 
  <Text style={styles.list}>{e} </Text> 
  <TouchableOpacity style={styles.btn}>
    <Text style={{ color: "#fff", fontSize: 25, textAlign: "center" }}  onPress={()=>edittodo(i)}>+</Text></TouchableOpacity>

  <TouchableOpacity style={styles.btn}>
    <Text style={{ color: "#fff", fontSize: 25, textAlign: "center" }} onPress={()=>deletetodo(i)}>-</Text></TouchableOpacity>
</View>
))}</Text>
          
          </ScrollView>
        </View> 


    

      <View>
<TextInput onChangeText={(e)=>setText(e)} style={styles.input} placeholder='Enter text'></TextInput>
      </View>
      <View >

  <TouchableOpacity style={styles.btn} onPress={add}>
            <Text style={{ color: "#fff", fontSize: 25, textAlign: "center" }}>
              +
            </Text>
          </TouchableOpacity>
      </View>
      
   </>
  );
};





export default App;
