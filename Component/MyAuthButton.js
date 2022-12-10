import React from 'react'
import { View, Text  , TouchableOpacity} from 'react-native'
import color from '../Constant/Color'


const MyAuthButton = (props) => {
  return (
    <TouchableOpacity
    onPress={props.onPress}
    style={{height:60 , width:"100%",backgroundColor:color.btncolor,borderRadius:20,marginTop:"10%",justifyContent:"center", alignItems:"center"}}>
      <Text style={{fontSize:20,fontWeight:"bold",color:"white"}}>{props.btnTitle}</Text>
    </TouchableOpacity>
  )
}

export default MyAuthButton