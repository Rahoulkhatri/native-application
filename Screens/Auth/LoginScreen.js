import React ,{useState}from 'react'
import { View, Text,Image } from 'react-native'
import MyAuthButton from '../../Component/MyAuthButton'
import MyInput from '../../Component/MyInput'

const LoginScreen = (props) => {
    const [Email,setEmail]=useState("")
    const [password,setpassword]=useState("")
  
    const loginHandler = () =>{
      if(Email===""){
        alert("please enter your email first");
      }
      else if(password===""){
        alert("please enter your password first");
      }
      else {
        props.navigation.navigate("cate")
      }  
      
  
    }
    return (
      <View style={{flex:1, backgroundColor:"white"}}>
      <View style={{height:"30%",width:"100%",backgroundColor:"white", justifyContent:"center", alignItems:"center"}}>
        <Image
        source={require("../../assets/images/logo.png")}
        style={{height:200,width:200}}
        /> 
        <Text>FOOD APP</Text>          
  
      </View>
      <View style={{height:"70%",width:"100%",paddingHorizontal:10}}>
          <MyInput 
          placeholder="please enter your email address" 
          title="EMAIL ADDRESS" 
          onChangeText={(test)=>{
            setEmail(test);
  
          }}/>
          <MyInput 
          secureTextEntry={true}
          placeholder="please enter your PASSWORD" 
          title="PASSWORD"
          onChangeText={(test)=>{
            setpassword(test);
          }}
          />
          <View>
              <MyAuthButton onPress={loginHandler} btnTitle="LOGIN"/>
          </View>
         
  
      </View>
    
  </View>
    )
  }
  
  
export default LoginScreen;