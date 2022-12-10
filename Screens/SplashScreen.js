import React,{useEffect} from 'react'
import { View, Text , Image} from 'react-native'

const SplashScreen = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.replace("login");
    }, 3000);
  }, []);
  return (
    <View style={{flex:1,backgroundColor:"white",justifyContent:"center",alignItems:"center"}}>
        
        <Image
        source={require("../assets/images/logo.png")}
        style={{height:400,width:300}}
        />
        <Text style={{alignItems:"center",fontWeight:'bold',fontSize:30}}>FOOD APP</Text>
    </View>
  )
}

export default SplashScreen