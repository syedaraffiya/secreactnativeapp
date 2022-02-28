
import React, { useState } from 'react';
import { Text, View,  TextInput,TouchableOpacity, StyleSheet ,ScrollView} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';


const styles = StyleSheet.create({
    // button: {
    //   paddingHorizontal: 10,
    //   paddingVertical: 12,
    //   width: 75,
    //   borderRadius: 50,
    //   backgroundColor:"pink",
    //   alignItems: "center",
    //   justifyContent: "center",
    // },
   
     input:{
         borderWidth:2,
         borderRadius: 30,
        borderColor:"black",
         padding:20,
        margin:15,
        alignItems: "center",
        justifyContent: "center",
    
       },
      header:{
        backgroundColor:"darkcyan",
        fontSize:30,
        padding:30,
        textAlign:"center",
        color:"white",
        
    
      },
      btn: {
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"flex-end",
        backgroundColor: "darkcyan",
        marginBottom:10,
        padding: 8,
        textAlign: "center" ,
        borderRadius: 10,
        width: 80,
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

function Login() {
  const [text,setText]=useState("")
  const [list,setListData]=useState([])
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
//  const add =()=>{
//     setEmail();
//     setPassword();
//          console.log(good)
//          }
     let login = (e) => {
         e.preventDefault();
        let obj = {
          email,
           password,
       };

       const deletetodo=(i)=>{
        list.splice(i,1)
        setListData([...list])
    
      }
      // const edit= () => {
      //   setListData([...list,text])
      //   console.log(list)
      //   setText("")
    
      // }
     
        
    };
    

    return (
      <>
        <View className="head">
          <Text style={styles.header}>Login</Text>
        </View>
        <View>
          {/* <form onSubmit={(e) => login(e)}> */}
            <View>
              <TextInput
              style={styles.input}
              onChangeText={(email) => setEmail(email)}
                placeholder="Email"
                type="email"
              />
  
  
              
            </View>
            <View>
              < TextInput
              style={styles.input}
              onChangeText={(password) => setPassword(password)}
                placeholder="Password"
                type="password"
              />
            </View>
            <View>
            <TouchableOpacity style={styles.btn} onPress={login}>
            <Text style={{ color: "#fff", fontSize: 25, textAlign: "center" }}>
            text
            </Text>
          </TouchableOpacity>
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

 <TouchableOpacity  style={styles.btn} >
            <Text  style={{ color: "#fff", fontSize: 25, textAlign: "center" }}>
              +
            </Text>
          </TouchableOpacity> 
      </View>


    

   
          {/* </form> */}
        </View>
      </>
    );
  }
  export default Login;